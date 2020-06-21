import PropTypes from 'prop-types';

const NavigationItemsProps = {
  isAuthenticated: PropTypes.bool.isRequired,
  authenticatedUser: PropTypes.string.isRequired,
};

export default NavigationItemsProps;
