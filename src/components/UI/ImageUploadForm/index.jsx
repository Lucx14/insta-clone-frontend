import React, { useState } from 'react';
import ImageUploadFormProps from './propTypes';
import {
  Wrapper,
  Input,
  HeadingWrapper,
  FileInputWrapper,
  ButtonWrapper,
  StyledHelper,
} from './style';
import SubmitButton from '../Buttons/SubmitButton';
import { checkValidity } from '../../../shared/utility';

const ImageUploadForm = (props) => {
  const { upload, closeModal, complete } = props;

  const captionInitialState = {
    caption: {
      elementType: 'input',
      elementConfig: {
        type: 'input',
        placeholder: 'Caption...',
      },
      value: '',
      validation: {
        required: true,
        minLength: 3,
        maxLength: 200,
      },
      valid: false,
      touched: false,
    },
  };

  const [caption, setCaption] = useState(captionInitialState);
  const [selectedFile, setSelectedFile] = useState(null);

  const captionUpdateHandler = (event) => {
    const updatedCaption = {
      ...caption,
      caption: {
        ...caption.caption,
        value: event.target.value,
        valid: checkValidity(event.target.value, caption.caption.validation),
        touched: true,
      },
    };
    setCaption(updatedCaption);
  };

  const fileChangedHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (selectedFile !== null && caption.caption.value.length > 2) {
      const formData = new FormData();
      formData.append('image', selectedFile, selectedFile.name);
      upload(caption.caption.value, formData);
    }
    setCaption(captionInitialState);
    setSelectedFile(null);
    closeModal();
    complete();
  };

  return (
    <Wrapper>
      <HeadingWrapper>New post</HeadingWrapper>
      <form onSubmit={submitHandler}>
        <Input
          type="input"
          value={caption.value}
          onChange={captionUpdateHandler}
          name="upload-caption"
          placeholder="Caption...."
          shouldValidate={caption.caption.validation}
          invalid={!caption.caption.valid}
          touched={caption.caption.touched}
        />
        {caption.caption.touched && !caption.caption.valid && (
          <StyledHelper
            errors={caption.caption.touched && !caption.caption.valid}
          >
            <div>Caption is required</div>
          </StyledHelper>
        )}
        <FileInputWrapper>
          <input type="file" onChange={fileChangedHandler} />
          {selectedFile === null && (
            <StyledHelper errors={selectedFile === null}>
              <div>Image file is required</div>
            </StyledHelper>
          )}
        </FileInputWrapper>
        <ButtonWrapper>
          <SubmitButton
            disabled={!caption.caption.valid || selectedFile === null}
          >
            Upload
          </SubmitButton>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
};

ImageUploadForm.propTypes = ImageUploadFormProps;

export default ImageUploadForm;
