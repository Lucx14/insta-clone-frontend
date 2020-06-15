import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Signup from '../../components/Signup';

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error !== null,
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onAuthSignup: (name, username, email, password, passwordConfirmation) =>
    dispatch(
      actions.authSignup(name, username, email, password, passwordConfirmation)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
