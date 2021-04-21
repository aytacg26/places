import React, { Fragment, useRef } from 'react';
import ModalOverlay from './ModalOverlay';
import Backdrop from '../Backdrop/Backdrop';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const Modal = (props) => {
  const modalRef = useRef(null);

  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
        nodeRef={modalRef}
      >
        <ModalOverlay {...props} ref={modalRef} />
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
