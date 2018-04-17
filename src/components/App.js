import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Features from './Features';
import LandingPage from './Landing' ;
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import QuestionsProf from './QuestionsProf';
import QuizProf from './Quizprof';
import QuizStud from './Quizstud';
import Analysis from './Analysis';
import StudentFeedbackForm from './Student/Feedback';
import FeedbackProf from './Prof/Feedback';


import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>

      <hr/>

      <Route exact path={routes.LANDING} component={() => <SignInPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.STUDENT} component={() => <Features />} />
      <Route exact path={routes.QUESTIONP} component={() => <QuestionsProf />} />
      <Route exact path={routes.QUIZP} component={() => <QuizProf />} />
      <Route exact path={routes.QUIZSTU} component={() => <QuizStud />} />
      <Route exact path={routes.ANALYSIS} component={() => <Analysis />} />
      <Route exact path={routes.FEEDBACKP} component={() => <FeedbackProf />} />
      <Route exact path={routes.FEEDBACKS} component={() => <StudentFeedbackForm/>} />
    </div>
  </Router>

export default withAuthentication(App);
