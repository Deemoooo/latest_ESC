import React from 'react';
// import {RadioGroup, Radio} from 'react-radio-group';
import { db } from '../../firebase/firebase';

//import ui
import FlatButton from 'material-ui/FlatButton';
import {Button} from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const lectureRef  = db.ref('/Course/CSE/Lecture1/feedback');
var paceRef = lectureRef.child('/pace');
var contentRef = lectureRef.child('/content');
var clarityRef = lectureRef.child('/clarity');
var lecturerRef = lectureRef.child('/lecturer');
var otherRef = lectureRef.child('/other');
export default class ProfFeedbackPage extends React.Component {
	// state = {
	// 	pace: '',
	// 	content:'',
	// 	clarity: '',
	// 	lecturer: '',
	// 	other:'',
	// }
	state = {
		paceRating: '',
		}

	getPace = () => {
		paceRef.once('value', snapshot => {
			snapshot.forEach(function(child){
			// console.log(child.key+": "+child.val());

			// display all children 
			var paceRating = child.val();
			// this.setState({
			// 	pace: snapshot.val()
			});
		});
	}
	handleClick = (e) => {
    	this.setState({ [e]: !this.state[e] });
  	}

	handleClose = () => {
		this.setState({
			open: false,
		});
	};
	

	render(){
		return(
			<div name="FeedbackForm">
				<h1> Prof feedback</h1>
			<MuiThemeProvider>
				<Button name="Lecture1" >Lecture 1</Button>
			</MuiThemeProvider>
			</div>
			);
	}
}
