import PropTypes from 'prop-types';

const NavigationItemProps = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationItemProps;
