import PropTypes from 'prop-types';

const AuthProps = {
  onAuthInit: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default AuthProps;
