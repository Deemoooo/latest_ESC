import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Button} from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { db } from '../firebase/firebase';


export default class QuestionForm extends React.Component {
  state = {
    open: false,
    value: 1,
    msg: '',
  };
  constructor(){
    super();
    this.handleOpen=this.handleOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleOpen (){
    this.setState({open: true});
  };
  handleClose (){
    this.setState({open: false});
  };
  handleChange = (event, index, value) => this.setState({value});
  handleSubmit = () =>{
    this.setState({open: false});
    const{
      value,
      msg,
    } = this.state;
    db.ref('/Course/ESC/Lecture1/questions').push({value,msg});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        //keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <div>
      <MuiThemeProvider>
        <Button bsSize="large" bsStyle="success" onClick={this.handleOpen} block>Ask Question</Button>
        <Dialog
          title="Ask Questions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          "What is your question?"
          <br />
          <TextField
						id="username"
						margin="normal"
            onChange={event => this.setState({msg: event.target.value})}
            value={this.state.msg}
					>
          </TextField>
          <br />
          <SelectField
          floatingLabelText="Page on slides"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
          <MenuItem value={4} primaryText="4" />
          <MenuItem value={5} primaryText="5" />
        </SelectField>
        <br />
        </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}
