import React from 'react';
import { Wrapper } from './style';
import Backdrop from '../Backdrop';
import ModalProps from './propTypes';

const Modal = (props) => {
  const { show, modalClosed, children } = props;

  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <Wrapper
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </Wrapper>
    </>
  );
};

Modal.propTypes = ModalProps;

export default Modal;
