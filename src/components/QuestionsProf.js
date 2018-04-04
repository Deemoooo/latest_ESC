import React, { Component } from 'react';
import {Link} from "react-router-dom";
import * as routes from '../constants/routes';
import { db } from '../firebase/firebase';

import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var leadsRef = db.ref('/Course/CSE/Lecture1/questions');
var lists=[];



export default class QuestionsProf extends Component {
  constructor() {
    super();
  }

  render() {
    leadsRef.on('value', function(snapshot) {
      if(snapshot.numChildren()!=lists.length){
        alert("You have received new questions from your students!");
        lists=[];
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          lists.push(
            <ListItem
            primaryText={childData.msg}
            secondaryText={`Page of slides: ${childData.value}`}
            />
          );
        });
        return(<div>
         <MuiThemeProvider>
         <Card>
        <CardHeader
          title="Questions from students"
        />
        <List on>
        {lists}
        </List>
        </Card>
        <Link to='/feature'><button class="btn btn-success">Back</button></Link>
        </MuiThemeProvider>
        </div>);
      }
    });
    return(<div>
     <MuiThemeProvider>
     <Card>
    <CardHeader
      title="Questions from students"
    />
    <List >
    {lists}
    </List>
    </Card>
    <Link to='/feature'><button class="btn btn-success">Back</button></Link>
    </MuiThemeProvider>
    </div>);
  }

}
export {lists};
