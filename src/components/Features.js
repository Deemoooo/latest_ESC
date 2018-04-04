import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Row, Col, Grid, Button, SplitButton, DropdownButton, MenuItem, Image} from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui';

import { db } from '../firebase';

import quiz from "../images/quiz.png";
import perf from "../images/performance.png";
import feedback from "../images/feedback.png";
import question from "../images/question.png";

import * as routes from '../constants/routes';
import SignOutButton from './SignOut';

import QuestionForm from './QuestionsStud';
import StudentFeedbackForm from './Student/Feedback';
import ProfFeedbackPage from './Prof/Feedback';

import Quizprof from './Quizprof';

const Features = (props, { authUser }) =>
authUser && authUser.displayName === "Professor"
        ? <ProfThing authUser={authUser}/>
        : <StudentThing />
    

Features.contextTypes = {
  authUser: PropTypes.object,
};

class ProfThing extends React.Component {
  constructor(authUser) {
    super(authUser)
    this.state = {
      text: "Please select a class"
    }
  }
  render () {
    return (
      <div>
        <Grid><Row className="show-grid">
            <Col sm={2} md={10}>
              <h1>Hello Prof</h1>
            </Col>
            <Col sm={2} md={2}>
              <br /><br />
              <Link to={routes.SIGN_IN}><SignOutButton bsSize="small" bsStyle="danger">LOGOUT</SignOutButton></Link>
            </Col></Row></Grid>
        <Grid><Row className="show-grid">
            <br /><br />
            <Col sm={2} md={4}>
              <MuiThemeProvider><br /><br />
                <Row><Col md={12}><Card>
                        <CardHeader
                            title="Review Feedback"
                            subtitle="Check the feedback from students"/><br/>
                        <Col><Col sm={2} />
                          <Image src= {feedback} rounded />
                        </Col><br /><br />
                    </Card></Col></Row>
              </MuiThemeProvider><br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
                <Link to={routes.FEEDBACK_PROF}><Button bsSize="large" bsStyle="success"block>Review Feedback</Button>
</Link>
              </Col></Col>
            <Col sm={2} md={4}>
              <MuiThemeProvider>
                <br /><br /><Row>
                  <Col md={12}>
                    <Card>
                      <CardHeader
                          title="Performance analysis"
                          subtitle="Analyze student's performance"
                      /><br/>
                      <Col>
                        <Col sm={2} />
                        <Image src= {perf} rounded />
                      </Col><br /><br />
                    </Card></Col></Row>
              </MuiThemeProvider><br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
                <Link to="/prof/Analysis"><Button bsSize="large" bsStyle="success" block>Student Performance</Button></Link>
              </Col>           
            </Col>
            <Col sm={2} md={4}>
              <MuiThemeProvider>
                <br /><br />
                <Row>
                  <Col md={12}>
                    <Card>
                      <CardHeader
                          title="Push Quizzes"
                          subtitle="Upload a quiz to students"
                      /><br />
                      <Col>
                        <Col sm={2} />
                        <Image src= {quiz} rounded />
                      </Col><br /><br />
                    </Card>
                  </Col>
                </Row>
              </MuiThemeProvider><br />
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
              <Quizprof />
               
              </Col>           
            </Col> 
          </Row>
        </Grid>
      </div>
      );
    }
    }
class StudentThing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "Please select a class",
      profs: null,
    };
  }
  componentDidMount() {
    db.onceGetProfs().then(snapshot =>
      this.state = { profs: snapshot.val() }
    );
  }

  find() {
    const {profs} = this.state.profs;
    alert(this.state.prof === null);
    this.State(() => ({text: "Prof1"}));
    // {Object.keys(profs).map(key =>
    //   <div key={key}>{profs[key].email}</div>
    // )}
  }

  render () {
    const {profs} = this.state;
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={2} md={10}><h1>Hello Student</h1></Col>

            <Col sm={2} md={2}><br /><br />
              <Link to={routes.SIGN_IN}><SignOutButton bsSize="small" bsStyle="danger">LOGOUT</SignOutButton></Link>
            </Col>
          </Row>
          <Grid><Row>
              <SplitButton
                  id="splitButtonMenu"
                  bsStyle="primary"
                  title={this.state.text}
                  >
                <DropdownButton
                    id="CSE"
                    bsStyle="default"
                    title="Computer System Engineering"
                    noCaret>
                  <MenuItem eventKey="Prof1" onClick={() => this.find()}>Prof1</MenuItem>
                  <MenuItem eventKey="2">Prof2</MenuItem>
                  <MenuItem eventKey="3">Prof3</MenuItem>
                </DropdownButton>
                <DropdownButton
                    id="PNS"
                    bsStyle="default"
                    title="Probability and Statistics"
                    noCaret>
                  <MenuItem eventKey="1">Prof4</MenuItem>
                  <MenuItem eventKey="2">Prof5</MenuItem>
                  <MenuItem eventKey="3">Prof6</MenuItem>
                </DropdownButton>
                <DropdownButton
                    id="ESC"
                    bsStyle="default"
                    title="Elements of Software Construction"
                    noCaret>
                  <MenuItem eventKey="1">Prof7</MenuItem>
                  <MenuItem eventKey="2">Prof8</MenuItem>
                  <MenuItem eventKey="3">Prof9</MenuItem>
                </DropdownButton>
              </SplitButton>
            </Row></Grid></Grid>

        <Grid><Row className="show-grid"><br />
          <Col sm={1} /><Row className="show-grid"><br />
          <Col sm={2} md={4}>
          <MuiThemeProvider>
          <div><br /><br />
                  <Row><Col md={12}><Card><CardHeader
                    title="Give Feedback"
                    subtitle="Send feedback to professor" /><br />
                    <Col><Col sm={2} />
                      <Image src= {feedback} rounded />
                    </Col><br /><br /></Card></Col></Row>
                    </div>
          </MuiThemeProvider><br />

          <Col sm={2} />
          <Col sm={8} className="Quizimage">
          <StudentFeedbackForm />
          </Col></Col>
          <Col sm={2} md={4}>
          <MuiThemeProvider>
          <div><br /><br />
                  <Row><Col md={12}>
                  <Card><CardHeader
                    title="Answer Quiz"
                    subtitle="Solve online quizzes"/><br/>
                  <Col><Col sm={2} />
                    <Image src= {feedback} rounded />
                  </Col><br /><br /></Card></Col></Row></div>
          </MuiThemeProvider><br/>
          <Col sm={2} /><Col sm={8} className="Quizimage">
            <Link to="/QuizStud"><Button bsSize="large" bsStyle="success" block>Get Quiz</Button></Link>
          </Col></Col>
          <Col sm={2}/><Col sm={2} md={4}>
          <MuiThemeProvider><div><br /><br />
            <Row><Col md={12}>
              <Card><CardHeader
                      title="Ask Question"
                      subtitle="Let the professor know your question" /><br />
                      <Col><Col sm={3} />
                        <Image src= {question} rounded />
                      </Col><br /><br />
              </Card>
            </Col></Row></div>
          </MuiThemeProvider><br />
          <Col sm={2} />
          <Col sm={8} className="Quizimage">
          <QuestionForm />
          </Col></Col>
          </Row></Row>
        </Grid><br/>
      </div>
      );
    }
}

export default Features;