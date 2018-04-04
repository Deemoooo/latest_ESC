import React from 'react';
import {Link} from "react-router-dom";
import {Alert} from "react-bootstrap";
import * as routes from '../constants/routes';

export default class Quizzes extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      questate: true,
      question: '',
      word: '',
      step: 1,
      answer: false,
      new: '',
      state: 'Please enter the question:',
    };
  }

  increment() {
    this.setState({
      questate: false,
      new: '',
      step: this.state.step+1,
      question: this.state.question + '\n' + this.state.new,
      answer: this.state.step-4 >= 0,
      state: this.state.answer ? 'Please select the correct answer:' : 'Please enter option ('+this.state.step+')',
    })
    if (this.state.step<=6){
    if (this.state.questate){
      return (
        
        alert('Question added: \n' + this.state.new)
      );
    }else{
      if(this.state.step<=5){
        return (
          alert('Option added: \n' +(this.state.step-1)+': '+ this.state.new)
        );
      }else {
        alert('Correct answer chosen successfully!')
      }
     
    }
  }
  }

  handleChange(value) {
    this.setState({
      new: value
    });
  }

  show(){
    alert(this.state.question)
  }

  render() {
    return (
       <div>
        <p> {this.state.state}</p>
        <input type="text" value={this.state.new} onChange={(e) =>this.handleChange(e.target.value)} />
        <input type="submit" value="Submit" onClick={() => this.increment()} />
        <input type="submit" value="View question" onClick={() => this.show()} />
        <Link to="/feature"><button class="btn btn-success">Back</button></Link>

      </div>
    );
  }
}