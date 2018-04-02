import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { firebase } from '../firebase';
import * as routes from '../constants/routes';

const withAuthorization = (authSignin) => (authStudent) => (authProf) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {

      firebase.auth.onAuthStateChanged(authUser => {
        if (!authSignin(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }else if (authStudent(authUser)) {
          this.props.history.push(routes.STUDENT);
        }else if (authProf(authUser)) {
          this.props.history.push(routes.STUDENT);
        }
      });
    }

    render() {
      return this.context.authUser ? <Component /> : null;
    }
  }

  WithAuthorization.contextTypes = {
    authUser: PropTypes.object,
  };

  return withRouter(WithAuthorization);
}

export default withAuthorization;