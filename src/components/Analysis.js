import React from 'react';
import {Link, withRouter} from "react-router-dom";
import * as routes from '../constants/routes';
import { db } from '../firebase/firebase';

import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {TextField} from 'material-ui';
import {Button} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var scoreRef = db.ref('/Course/CSE/Lecture1/students');
var quizRef = db.ref('/Course/CSE/Lecture1/quiz');
var lists=[];
var count = 0;
var ans = 2;

class QuizsStud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }

  }

  render() {
    lists = [];
    scoreRef.on('value', function(snapshot) {

        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          var result = (childData.score / childData.time)*100;
          lists.push(
            childData.time<10 ? 
            <ListItem
            primaryText={childData.name}
            secondaryText={`Overall score: ${result}`}
            /> : 
            result>60 ?
            <ListItem
            primaryText={childData.name}
            secondaryText={`Overall score: ${result}`}
            /> :
            <ListItem
            primaryText={childData.name + " (BELOW AVERAGE)"}
            secondaryText={`Overall score: ${result}`}
            />
          );
        });
    });
    quizRef.on('value', function(snapshot) {
      var theone;
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        if (childData.score===1) {
          theone = childData.name;
        }
      });
      lists.push(
        <ListItem 
          primaryText={theone + " (First one to answer correctly)"}
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
  }

}

export default withRouter(QuizsStud);
