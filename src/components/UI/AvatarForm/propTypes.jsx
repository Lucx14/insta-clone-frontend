import PropTypes from 'prop-types';

const AvatarFormProps = {
  upload: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired,
};

export default AvatarFormProps;
