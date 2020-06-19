import PropTypes from 'prop-types';

const ModalProps = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalProps;
