import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

const SideDrawer = (props) => {
  const targetEl = useRef();

  const content = (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
      nodeRef={targetEl}
    >
      <aside className='side-drawer' onClick={props.onClick} ref={targetEl}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
