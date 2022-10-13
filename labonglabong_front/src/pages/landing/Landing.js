import React, { useState } from "react";

import Calendar from "../../components/Calendar";

import { Modal, ModalBody } from "reactstrap";

const Landing = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggle = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <div onClick={handleToggle}>랜딩페이지</div>

      <Modal isOpen={modalVisible} toggle={handleToggle}>
        <ModalBody>
          <Calendar />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Landing;
