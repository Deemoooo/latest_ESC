import React from 'react';
import {Link, withRouter} from "react-router-dom";
import * as routes from '../constants/routes';
import { db } from '../firebase/firebase';

import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {TextField} from 'material-ui';
import {Button} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var leadsRef = db.ref('/Course/CSE/Lecture1/Quiz');
var scoreRef = db.ref('/Course/CSE/Lecture1/students/student1');
var lists=[];
var count = 0;
var ans = 2;

class QuizsStud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qn: '',
      op1: '',
      op2: '',
      op3: '',
      op4: '',
      ans: '22',
      choice: '',
      score: 0,
    }
    this.checkans = this.checkans.bind(this);

  }

  checkans() {
    const {
      history,
    } = this.props;
    var childData;
    leadsRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          childData = childSnapshot.val();
        });      
    });
    if (ans==this.state.choice) {
      alert("You are correct!")
    }else {
      alert("Try harder")
    }
    scoreRef.push(this.state.score);
    history.push(routes.STUDENT)

  }

  render() {
    scoreRef.on('value', function(snapshot) {
        lists=[];
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          lists.push(
            <ListItem
            primaryText={childData.score}
            secondaryText={`Page of slides: ${childData.value}`}
            />
          );
        });
        return(<div>
         <MuiThemeProvider>
         <Card>
        <CardHeader
          title="Students Performance"
        />
        <List on>
        {lists}
        </List>
        </Card>
        <Link to='/feature'><button class="btn btn-success">Back</button></Link>
        </MuiThemeProvider>
        </div>);
      
    });
    return(<div>
     <MuiThemeProvider>
     <Card>
    <CardHeader
      title="Students Performance"
    />
    <List on>
    {lists}
    </List>
    </Card>
    <Link to='/feature'><button class="btn btn-success">Back</button></Link>
    </MuiThemeProvider>
    </div>);
  }

}

export default withRouter(QuizsStud);
