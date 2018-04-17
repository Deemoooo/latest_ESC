import React from 'react';
import {Link} from "react-router-dom";
import * as routes from '../../constants/routes';

// import {RadioGroup, Radio} from 'react-radio-group';
import { db } from '../../firebase/firebase';

//import ui
import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


var lectureRef  = db.ref('/Course/CSE/Lecture1/feedback');
var titleRef = db.ref('/Course/CSE/Lecture1/title');
var titled = "";
var lists=[];

export default class FeedbackProf extends React.Component {
	constructor(){
		super();
		this.state ={
			title:"",
		}
	}
	componentDidMount(){
		titleRef.once('value').then((snapshot) =>{
			titled = snapshot.val();
			this.setState({
				title:titled,
			});
		});
	}
	render(){

		lectureRef.on("value",function(snapshot){
			 // eslint-disable-next-line
			if(snapshot.numChildren() != lists.length){
				lists = [];
				snapshot.forEach(function(childSnapshot){
					var childData = childSnapshot.val();
					if (childData.other != ""){
						lists.push(
							<ListItem><ul class="list-unstyled">
							<li>{`Pace: ${childData.pace}`}</li>
							<li>{`Amount of Content: ${childData.content}`}</li>
							<li>{`Clarity: ${childData.clarity}`}</li>
							<li>{`Ability to answer questions: ${childData.lecturer}`}</li>
							<li>{`Other:${childData.other}`}</li></ul></ListItem>);						
					}else{
						lists.push(
							<ListItem><ul class="list-unstyled">
							<li>{`Pace: ${childData.pace}`}</li>
							<li>{`Amount of Content: ${childData.content}`}</li>
							<li>{`Clarity: ${childData.clarity}`}</li>
							<li>{`Ability to answer questions: ${childData.lecturer}`}</li>
							</ul></ListItem>);	
					}
				});
			}
		});

		return(
			<div name="ViewFeedback">
				<MuiThemeProvider><Card>
				<CardHeader
					title={`Feedback for ${titled}`}
				/>
					<List >
					{lists}
					</List>
				</Card>
				<Link to={routes.HOME}><button class="btn btn-success">Back</button></Link>
				</MuiThemeProvider>
			</div>);
	}
}
