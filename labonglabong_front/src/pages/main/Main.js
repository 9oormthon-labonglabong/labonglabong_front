import React, { useState } from "react";

import styled from "styled-components";

import Calendar from "../../components/Calendar";
import { Modal, ModalBody } from "reactstrap";

import { format } from "date-fns";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggle = () => setModalVisible(!modalVisible);

  const handleDateClick = (date) => {
    handleToggle();
    setSelectedDate(date);
  };

  return (
    <Layout>
      <Header>
        <div>아이라봉</div>
        <div onClick={handleToggle}>{selectedDate}</div>
      </Header>
      <Button>여행 기록 남기기</Button>

      <Modal isOpen={modalVisible} toggle={handleToggle} centered={true}>
        <ModalBody>
          <Calendar onClick={handleDateClick} />
        </ModalBody>
      </Modal>
    </Layout>
  );
};

export default Main;

const Layout = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const Button = styled.div`
  padding: 16px;
  border-radius: 12px;
  background-color: #f99239;
  color: white;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;
