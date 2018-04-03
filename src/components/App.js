import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Navigation from './Navigation';
import Features from './Features';
// import LandingPage from './Landing' ;
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import StudentFeedbackPage from './Student/Feedback';
import QuestionsProf from './QuestionsProf';
import QuizProf from './Quizprof';
import QuizStud from './Quizstud';
// import Pushquiz from '../pfunctions/Quizzes';

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
      <Route exact path={routes.FEEDBACK_STUDENT} component={() => <StudentFeedbackPage />} />
      <Route exact path={routes.QUESTIONP} component={() => <QuestionsProf />}/>
      <Route exact path={routes.QUIZP} component={() => <QuizProf />} />
      <Route exact path={routes.QUIZSTU} component={() => <QuizStud />}
      />
    </div>
  </Router>
//      <Route exact path={routes.FEEDBACK_PROF} component={() => <Features />} />
//      <Route exact path={routes.PUSHQUIZ} component={() => <Pushquiz />} />


export default withAuthentication(App);
