import React from 'react';
import {Link, withRouter} from "react-router-dom";
import * as routes from '../constants/routes';
import { db } from '../firebase/firebase';

import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {TextField, RaisedButton} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import {Button} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey100, red100 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

var scoreRef = db.ref('/Course/CSE/Lecture1/students');
var alertplace = db.ref('/Course/CSE/Lecture1/students/Student1');
var quizRef = db.ref('/Course/CSE/Lecture1/quiz');
var lists=[];
var count = 0;
var ans = 2;

const muiTheme = getMuiTheme({
  palette: {
    textColor: red100,
  },
  appBar: {
    height: 50,
  },
  fontFamily: {
    fontFamily: 'Raleway, sans-serif',
    fontsize: 10,
  }
})

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
// const Main = () => (
//   <MuiThemeProvider muiTheme={muiTheme}>
//   </MuiThemeProvider>
// );

class QuizsStud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount(){

  }

  sendalert() {
    alertplace.push("low");
  }

  render() {
    lists = [];
    var msg = "low";
    var alertplace = db.ref('/Course/CSE/Lecture1/students/Student1');
    scoreRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          var result = (childData.score / childData.time)*100;
          lists.push(
            childData.time<10 ? 
            <Card>
            <ListItem
            primaryText={childData.name}
            secondaryText={`Overall score: ${result}`}
            leftAvatar={<Avatar src="https://placeimg.com/800/450/nature" />}
            /></Card> : 

            result>60 ?
            <Card>
            <ListItem
            primaryText={childData.name}
            secondaryText={`Overall score: ${result}`}
            leftAvatar={<Avatar src="http://www.bu.edu/pardee/files/2017/04/kohheadshot.jpg" />}
            /></Card> :

            <Card>
            <ListItem
            primaryText={childData.name + " (BELOW AVERAGE)"}
            secondaryText={`Overall score: ${result}`}
        leftAvatar={<Avatar src="http://www.bu.edu/pardee/files/2017/04/whiteheadshot.jpg" />}
            />
            <FlatButton label="Click to send alert" primary={true} onClick={() => alertplace.update({msg: msg})}/>
            </Card>
          );
        });
    });
    quizRef.on('value', function(snapshot) {
      var theone = "no";
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        if (childData.score===1) {
          theone = childData.name;
        }
      });
      lists.push(
        <ListItem 
          primaryText={theone==="no"? "" : theone + " (First one to answer correctly)"}
          leftAvatar={<Avatar src="http://www.bu.edu/pardee/files/2017/04/kohheadshot.jpg" />}
        />
      );
    });

    return(<div>
     <MuiThemeProvider>
     <Card>
                <CardHeader
                  title="Student Performance"
                  titleStyle = {{ fontSize: '40px'}}
                  // subtitle="Subtitle"
                  // avatar="https://placeimg.com/800/450/nature"
                  // fontsize="100"
                />
    {/* <CardHeader
      title="Students Performance"
    /> */}
    <List on>
    {lists}
    </List>
    </Card>
    <Link to={routes.HOME}><button class="btn btn-success">Back</button></Link>
    </MuiThemeProvider>
    </div>);
  }

}

export default withRouter(QuizsStud);