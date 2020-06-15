import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Auth from '../../components/Auth';

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error !== null,
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onAuthInit: (email, password) => dispatch(actions.authInit(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
