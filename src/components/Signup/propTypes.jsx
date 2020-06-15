import PropTypes from 'prop-types';

const SignupProps = {
  onAuthSignup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default SignupProps;
