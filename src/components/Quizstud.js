import React from 'react';
import {Link, withRouter} from "react-router-dom";
import * as routes from '../constants/routes';
import { db } from '../firebase/firebase';

import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {TextField} from 'material-ui';
import {Button} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { cyan500 } from 'material-ui/styles/colors';

var leadsRef = db.ref('/Course/CSE/Lecture1/Quiz');  // Lecture1 hardcoded
var studRef = db.ref('/Course/CSE/Lecture1/students/');
var quizRef = db.ref('/Course/CSE/Lecture1/quiz');
var lists=[];
var count = 0;
var name = "Mike";
var scoreRef = db.ref('/Course/CSE/Lecture1/students/Student1'); //student1 hardcoded, Lecture1 hardcoded
var scoreRef = db.ref('/Course/CSE/Lecture1/students/Student2'); //student1 hardcoded, Lecture1 hardcoded
var stud = "Student1";

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

class QuizsStud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qn: '',
      op1: '',
      op2: '',
      op3: '',
      op4: '',
      ans: '',
      choice: '',
      score: 0,
      text: props.text,
    }
    this.checkans = this.checkans.bind(this);
   // alert(this.state.text);
  }

  checkans() {
    const {
      history,
    } = this.props;

    var user;
    // var leadsRef = db.ref(this.props);
    leadsRef.on('value', function (snapshot) {
      snapshot.forEach(function(childSnapshot) {
          user = childSnapshot.val();
        }); // Keep the local user object synced with the Firebase userRef 
    });

    var score;

    if (user.value==this.state.choice) {
      alert("You are correct!");
      score = 1;
    }else {
      alert("Try harder");
      score = 0;
    }


    studRef.child(stud).once('value', function(snapshot) {
      var exists = (snapshot.val() !== null);
      var student = snapshot.val();
      if(!exists) {
        scoreRef.set({
          score: score,
          name: name,
          time: 1,
        });
      }
      else {
        scoreRef.update({
          score: student.score + score,
          time: student.time + 1,
        });
      }
    });

    quizRef.push({score,name});
    
    count = 0;
   // db.ref('/Course/CSE/Lecture1/Quiz').remove();
    lists = [];
    history.push(routes.STUDENT);

  }

  render() {
    scoreRef.on('value', function(snapshot) {
              var childData = snapshot.val();
              if(childData.msg === "low") {
                alert("You are performing bad!")
                scoreRef.update({msg: null})
              }
          });
    leadsRef.on('value', function(snapshot) {
      if(snapshot.numChildren()!=count){
        count = snapshot.numChildren();
        alert("You have received new quizzes from your professor!");
        lists=[];
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          lists.push(
            <div>
            <ListItem
              primaryText={childData.qn}
            />
            <ListItem
              secondaryText={`Option 1: ${childData.op1}`}
            />
            <ListItem
              secondaryText={`Option 2: ${childData.op2}`}
            />
            <ListItem
              secondaryText={`Option 3: ${childData.op3}`}
            />
            <ListItem
              secondaryText={`Option 4: ${childData.op4}`}
            />
            </div>
          );
        });
      }
    });


    return(<div>
     <MuiThemeProvider>
     <Card>
    <CardHeader
      title="Quizzes from professor"
      titleStyle = {{ fontSize: '40px' }}
    />
    <List on>
    {lists}
    </List>
   
    <TextField
      id="password"
      type="username"
      margin="normal"
      hintText="Enter your solution here"
      onChange={event => this.setState({choice: event.target.value})}
    >
    </TextField>
    <Button onClick={this.checkans}>Submit</Button>
    </Card>
    <Link to='/feature'><button class="btn btn-success">Back</button></Link>
    </MuiThemeProvider>
    </div>);
  }

}

export default withRouter(QuizsStud);
