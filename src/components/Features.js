import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Row, Col, Grid, Button, SplitButton, DropdownButton, MenuItem, Image} from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui';

import quiz from "../images/quiz.png";
import perf from "../images/performance.png";
import feedback from "../images/feedback.png";
import question from "../images/question.png";


import * as routes from '../constants/routes';
import SignOutButton from './SignOut';

const Features = (props, { authUser }) =>
  <div>
    { authUser && authUser.email == "hwnh@gmail.com"
        ? <ProfThing />
        : <StudentThing />
    }
  </div>

Features.contextTypes = {
  authUser: PropTypes.object,
};

const ProfThing = () =>
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={2} md={10}>
              <h1>Hello Prof</h1>
            </Col>
            <Col sm={2} md={2}>
              <br />
              <br />
              <Link to="/SignIn"><SignOutButton bsSize="small" bsStyle="danger">LOGOUT</SignOutButton></Link>
            </Col>
          </Row>
        </Grid>
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
                  <Col md={12}>
                    <Card>
                        <CardHeader
                            title="Review Feedback"
                            subtitle="Check the feedback from students"
                        />
                        <br/>
                        <Col>
                          <Col sm={2} />
                          <Image src= {feedback} rounded />
                        </Col>
                        <br />
                        <br />
                    </Card>
                  </Col>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
                <Link to="/prof/Feedback"><Button bsSize="large" bsStyle="success" block>Review Feedback</Button></Link>
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
                          title="Performance analysis"
                          subtitle="Analyze student's performance"
                      />
                      <br/>
                      <Col>
                        <Col sm={2} />
                        <Image src= {perf} rounded />
                      </Col>
                      <br />
                      <br />
                    </Card>
                  </Col>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
                <Link to="/prof/Analysis"><Button bsSize="large" bsStyle="success" block>Student Performance</Button></Link>
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
                          title="Push Quizzes"
                          subtitle="Upload a quiz to students"
                      />
                      <br/>
                      <Col>
                        <Col sm={2} />
                        <Image src= {quiz} rounded />
                      </Col>
                      <br />
                      <br />
                    </Card>
                  </Col>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
                <Link to="/prof/Quizzes"><Button bsSize="large" bsStyle="success" block>Push Quizzes</Button></Link>
              </Col>           
            </Col> 
          </Row>
        </Grid>
      </div>


const StudentThing = () =>
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={2} md={10}>
              <h1>Hello Student</h1>
            </Col>
            <Col sm={2} md={2}>
              <br />
              <br />
              <Link to="/SignIn"><SignOutButton bsSize="small" bsStyle="danger">LOGOUT</SignOutButton></Link>
            </Col>
          </Row>
          <Grid>
            <Row>
              <SplitButton
                  bsStyle="primary"
                  title="Select a prof"
                  >
                <DropdownButton
                    bsStyle="default"
                    title="Computer System Engineering"
                    noCaret>
                  <MenuItem eventKey="Prof1" onClick={() => this.changetext("Prof1")}>Prof1</MenuItem>
                  <MenuItem eventKey="2">Prof2</MenuItem>
                  <MenuItem eventKey="3">Prof3</MenuItem>
                </DropdownButton>
                <DropdownButton
                    bsStyle="default"
                    title="Probability and Statistics"
                    noCaret>
                  <MenuItem eventKey="1">Prof4</MenuItem>
                  <MenuItem eventKey="2">Prof5</MenuItem>
                  <MenuItem eventKey="3">Prof6</MenuItem>
                </DropdownButton>
                <DropdownButton
                    bsStyle="default"
                    title="Elements of Software Construction"
                    noCaret>
                  <MenuItem eventKey="1">Prof7</MenuItem>
                  <MenuItem eventKey="2">Prof8</MenuItem>
                  <MenuItem eventKey="3">Prof9</MenuItem>
                </DropdownButton>
              </SplitButton>
            </Row>
          </Grid>
        </Grid>

        <Grid>
          <Row className="show-grid">
            <br />
            <Col sm={1} />
            <Col sm={2} md={4}>
              <MuiThemeProvider>
              <br />
              <br />
              <br />
                <Row>
                  <Col md={12}>
                    <Card>
                      <CardHeader
                          title="Give Feedback"
                          subtitle="Send feedback to professor"
                      />
                      <br/>
                      <Col>
                        <Col sm={2} />
                        <Image src= {feedback} rounded />
                      </Col>
                      <br />
                      <br />
                    </Card>
                  </Col>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
                <Link to="/student/stuFeedback"><Button bsSize="large" bsStyle="success" block>Give Feedback</Button></Link>
              </Col>           
            </Col>
            <Col sm={2}/>
            <Col sm={2} md={4}>
              <MuiThemeProvider>
                <br />
                <br />
                <br />
                <Row>
                  <Col md={12}>
                    <Card>
                      <CardHeader
                          title="Ask Question"
                          subtitle="Let the professor know your question"
                      />
                      <br/>
                      <Col>
                        <Col sm={3} />
                        <Image src= {question} rounded />
                      </Col>
                      <br />
                      <br />
                    </Card>
                  </Col>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
                <Link to="/student/Question"><Button bsSize="large" bsStyle="success" block>Ask Questions</Button></Link>
              </Col>           
            </Col>
          </Row>
        </Grid>  
      </div>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Features;