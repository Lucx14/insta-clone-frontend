import { connect } from 'react-redux';
import Logout from '../../components/Logout';
import * as actions from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logOut()),
});

export default connect(null, mapDispatchToProps)(Logout);
