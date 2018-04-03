import React from 'react';
// import {RadioGroup, Radio} from 'react-radio-group';
import * as routes from '../../constants/routes';
import { db } from '../../firebase';

const onSubmit = (event, {pace}, {history}) => {

	db.submitFeedback(pace.value)
          .then(() => {
            alert("Feedback Submitted!");
            history.push(routes.STUDENT);
          })
}

const StudentFeedbackPage = () => 
<div>
	<form>
		<h4>On a scale of 1 to 5, please rate the following criteria</h4>

		<h4>Pace of lecture</h4>
		<input type="radio" name="pace" value="1" /> 1: Too slow&emsp;
		<input type="radio" name="pace" value="2" /> 2: A little slow&emsp;
		<input type="radio" name="pace" value="3" /> 3: Okay&emsp;
		<input type="radio" name="pace" value="4" /> 4: A little fast&emsp;
		<input type="radio" name="pace" value="5" /> 5: Too fast&emsp;	

		<h4>Amount of content</h4>
		<input type="radio" name="content" value="1" /> 1: Too little&emsp;
		<input type="radio" name="content" value="2" /> 2: Could have had some more&emsp;
		<input type="radio" name="content" value="3" /> 3: Just okay&emsp;
		<input type="radio" name="content" value="4" /> 4: Slightly too much&emsp;
		<input type="radio" name="content" value="5" /> 5: Too overwhelming&emsp;	

		<h4>Clarity of professor's explanation</h4>
		<input type="radio" name="clarity" value="1" /> 1: Could not understand at all&emsp;
		<input type="radio" name="clarity" value="2" /> 2: Did not understand most of it&emsp;
		<input type="radio" name="clarity" value="3" /> 3: Some parts are confusing&emsp;
		<input type="radio" name="clarity" value="4" /> 4: Understandable with some revision&emsp;
		<input type="radio" name="clarity" value="5" /> 5: Understood everything&emsp;	

		<h4>Was the lecturer able to answer your questions?</h4>
		<input type="radio" name="lecturer" value="1" /> Yes&emsp;
		<input type="radio" name="lecturer" value="2" /> No&emsp;

		<h4>Are there any suggestions for the lecturer?</h4>
		<input type="text" name="other"/><br/>
		<button value="submit" onChange={onSubmit}>Submit Feedback</button>
	</form>
</div>

export default StudentFeedbackPage;