import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function index(props) {
  const {show , onChange, size = "lg"} = props;
  return (
    <Modal
        size={size}
        show={show}
        onHide={() => onChange(false)}
        dialogClassName="modal-90w"
        keyboard={true}
      >
        {props.children}
        <div className='conainer-fluid border-0'></div>
    </Modal>
  )
}
