import PropTypes from 'prop-types';

const AppProps = {
  isAuthenticated: PropTypes.bool.isRequired,
  onTryAutoSignup: PropTypes.func.isRequired,
};

export default AppProps;
