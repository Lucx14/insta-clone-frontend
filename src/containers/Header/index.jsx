import { connect } from 'react-redux';
import Header from '../../components/Layout/Header';

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
  username: state.auth.username,
});

export default connect(mapStateToProps)(Header);
