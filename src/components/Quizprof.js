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


export default class QuizForm extends React.Component {
  state = {
    open: false,
    value: 1,
    qn: '',
    op1: '',
    op2: '',
    op3: '',
    op4: '',
    qn: '',
  };

  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };
  handleChange = (event, index, value) => this.setState({value});
  handleSubmit = () =>{
    this.setState({open: false});
    const{
      op1,
      op2,
      op3,
      op4,
      value,
      qn,
    } = this.state;
    db.ref('/Course/CSE/Quiz').push({qn, op1, op2, op3, op4, value});
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
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <div>
      <MuiThemeProvider>
        <Button bsSize="large" bsStyle="success" onClick={this.handleOpen} block>Push Quizzes</Button>
        <Dialog
          title="Set-up the Quiz"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Enter Question Here
          <br />
          <TextField
						id="username"
						margin="normal"
            onChange={event => this.setState({qn: event.target.value})}
            value={this.state.qn}
					>
          </TextField>
          <br />
          Option 1 -------------------------- Option 2
          <br />
          <TextField
            id="username"
            margin="normal"
            onChange={event => this.setState({op1: event.target.value})}
            value={this.state.op1}
          >
          </TextField>
          <TextField
            id="username"
            margin="normal"
            onChange={event => this.setState({op2: event.target.value})}
            value={this.state.op2}
          >
          </TextField>
          <br />
          Option 3 -------------------------- Option 4
          <br />
          <TextField
            id="username"
            margin="normal"
            onChange={event => this.setState({op3: event.target.value})}
            value={this.state.op3}
          >
          </TextField>
          <TextField
            id="username"
            margin="normal"
            onChange={event => this.setState({op4: event.target.value})}
            value={this.state.op4}
          >
          </TextField>
          <br />
          <SelectField
          floatingLabelText="Correct answer:"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
          <MenuItem value={4} primaryText="4" />
        </SelectField>
        <br />
        </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}
