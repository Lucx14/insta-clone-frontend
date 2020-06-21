import PropTypes from 'prop-types';

const HeaderProps = {
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default HeaderProps;
