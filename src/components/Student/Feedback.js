import React from 'react';
// import {RadioGroup, Radio} from 'react-radio-group';
import { db } from '../../firebase/firebase';

//import ui
import Dialog from 'material-ui/Dialog';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Button} from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class StudentFeedbackForm extends React.Component {

	state = {
		open: false,
		pace: '0',
		content: '0',
		clarity: '0',
		lecturer: '0',
		other: '',
	};
	
	handleOpen = () => {
	  this.setState({open: true});
	};
	handleClose = () => {
	  this.setState({
	  	open: false,
	  });
	};
	radioChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit = () => {
	  this.setState({
	  	open: false,
	  	pace: '0',
		content: '0',
		clarity: '0',
		lecturer: '',
		other: '',
	  });
	  const{
	    pace,content,clarity,lecturer,other
	  } = this.state;
	  var ref = db.ref('/Course/CSE/Lecture1/feedback');
	  // generates a new key for every form
	  var newFeedbackRef = ref.child('/pace').push();
	  var newKey = newFeedbackRef.key;
	  if (this.state.pace === '0' || this.state.content === '0' || this.state.clarity === '0' || this.state.lecturer === ''){
	  	this.setState({open:true, other:[other]});
	  }else{
		  ref.child('/pace').update({[newKey]:pace});
		  ref.child('/content').update({[newKey]:content});
		  ref.child('/clarity').update({[newKey]:clarity});
		  ref.child('/lecturer').update({[newKey]:lecturer});
		  if (this.state.other.length > 0){
			  ref.child('/other').update({[newKey]:other});
		  }	
	  }
	  
	}

	render(){
		const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onClick={this.handleClose}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        keyboardFocused={true}
	        onClick={this.handleSubmit}
	      />,
	    ];
		return(
			<MuiThemeProvider>
			<div>
	            <Button bsSize="large" bsStyle="success" onClick={this.handleOpen} block>Give Feedback</Button>
				<Dialog
					title="Give Feedback!"
			        actions={actions}
			        open={this.state.open}
			        onRequestClose={this.handleClose}
			        contentStyle={{
			        	width:'80%',
			        	maxWidth: 'none',
			        	align:'center',
			        }}
			        autoScrollBodyContent={true} ><br/>
			        On the respective scales, please rate the following criteria: <br/><br/>
			        * Pace of lecture<br/>
			        <RadioButtonGroup 
			        	name="pace" 
			        	style={{display: 'flex', flexDirection:'row', marginTop:'5px'}}
			        	onChange={this.radioChange.bind(this)}>
						<RadioButton value='1' label='Too slow'/>
						<RadioButton value='2' label='A little slow'/>
						<RadioButton value='3' label='Just nice'/>
						<RadioButton value='4' label='A little fast'/>
						<RadioButton value='5' label='Too fast'/>
					</RadioButtonGroup><br/><br/>

					* Amount of Content<br/>	
			        <RadioButtonGroup 
			        	name="content" 
			        	style={{display: 'flex', flexDirection:'row', marginTop:'5px'}}
			        	onChange={this.radioChange.bind(this)}>
						<RadioButton value='1' label='Nothing'/>
						<RadioButton value='2' label='Too little'/>
						<RadioButton value='3' label='Just nice'/>
						<RadioButton value='4' label='Slightly too much'/>
						<RadioButton value='5' label='Overwhelming'/>
					</RadioButtonGroup><br/><br/>

					* Clarity of lecturer's explanation<br/>	
			        <RadioButtonGroup 
			        	name="clarity" 
			        	style={{display: 'flex', flexDirection:'row', marginTop:'5px'}}
			        	onChange={this.radioChange.bind(this)}>
						<RadioButton value='1' label="Completely don't understand"/>
						<RadioButton value='2' label="Mostly don't understand"/>
						<RadioButton value='3' label='Some Understood'/>
						<RadioButton value='4' label='Mostly Understood'/>
						<RadioButton value='5' label='Completely Understood'/>
					</RadioButtonGroup><br/><br/>

					* Was the lecturer able to answer your questions?<br/>
					<RadioButtonGroup 
						name="lecturer" 
						style={{display: 'flex', flexDirection:'row', marginTop:'5px', paddingRight:'60%'}}
						onChange={this.radioChange.bind(this)}>
						<RadioButton value='1' label='Yes'/>
						<RadioButton value='0' label='No'/>
					</RadioButtonGroup><br/><br/>

					Are there any other suggestions?<br/>
					<TextField name="other" margin="normal"
			        onChange={event => this.setState({other: event.target.value})}
			        value={this.state.other} >
			        </TextField><br />

			        </Dialog>
			    </div>
			</MuiThemeProvider>
			
			);
	}
}
