import PropTypes from 'prop-types';

const ImageUploadFormProps = {
  upload: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired,
};

export default ImageUploadFormProps;
