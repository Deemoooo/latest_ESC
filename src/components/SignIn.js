import React, { Component } from 'react';
import {Card, CardHeader, TextField} from 'material-ui';
import {Button, Grid, Row, Col} from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        
        <div>
      <Grid>
          <Row className="show-grid">
            <br />
            <br />
            <Col sm={2} md={4}>
              <MuiThemeProvider>
                <br />
                <br />
                <br /> 
                <Row>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
              </Col>           
            </Col>
            <Col sm={2} md={4}>
              <MuiThemeProvider>
                <br />
                <br />
                <br />
                <Row>
                  <Col md={12}>
                    <Card>
                      <CardHeader
                          title="Welcome Back"
                          subtitle="Please login"
                      />
                      <br/>
                      <Col>
                        <Col sm={2} />
                          <Grid>
                  <h4>Username</h4>
                  <Grid>
                      <TextField

                          id="username"
                          onChange={event => this.setState(byPropKey('email', event.target.value))}
                        margin="normal"
                      >
                
                      </TextField>
                    </Grid>
                    </Grid>
                    <Grid>

                <h4>Password</h4>
                    <Grid>
                  <TextField
                        id="password"
                        type="password"
                        onChange={event => this.setState(byPropKey('password', event.target.value))}
                          margin="normal"
                      >
                      </TextField>
                      </Grid>
                    </Grid>
                      </Col>
                      <br />
                      <br />
                    </Card>
                  </Col>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={9} className="Quizimage">
              <Button bsStyle="info" onClick={this.onSubmit} block>Login</Button>
               <SignUpLink />
                                 </Col>           
            </Col>
            <Col sm={2} md={4}>
              <MuiThemeProvider>
                <br />
                <br />
                <br />
                <Row>
                  <Col md={12}>
                   
                  </Col>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
                </Col>           
            </Col> 
          </Row>
        </Grid>
        { error && <p>{error.message}</p> }
       
        </div>

        
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};