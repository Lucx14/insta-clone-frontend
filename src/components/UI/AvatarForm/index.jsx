import React, { useState } from 'react';
import SubmitButton from '../Buttons/SubmitButton';
import AvatarFormProps from './propTypes';

import {
  Wrapper,
  HeadingWrapper,
  FileInputWrapper,
  StyledHelper,
  ButtonWrapper,
} from './style';

const AvatarForm = (props) => {
  const { upload, closeModal, complete } = props;
  const [selectedFile, setSelectedFile] = useState(null);

  const fileChangedHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (selectedFile !== null) {
      const formData = new FormData();
      formData.append('avatar', selectedFile, selectedFile.name);
      upload(formData);
    }
    setSelectedFile(null);
    closeModal();
    complete();
  };

  return (
    <Wrapper>
      <HeadingWrapper>Change Avatar</HeadingWrapper>
      <form onSubmit={submitHandler}>
        <FileInputWrapper>
          <input type="file" onChange={fileChangedHandler} />
          {selectedFile === null && (
            <StyledHelper errors={selectedFile === null}>
              <div>Image file is required</div>
            </StyledHelper>
          )}
        </FileInputWrapper>
        <ButtonWrapper>
          <SubmitButton disabled={selectedFile === null}>Upload</SubmitButton>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
};

AvatarForm.propTypes = AvatarFormProps;

export default AvatarForm;
