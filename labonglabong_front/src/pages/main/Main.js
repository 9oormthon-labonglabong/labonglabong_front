import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Calendar from "../../components/Calendar";
import { Modal, ModalBody } from "reactstrap";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import { useRegisteredMarker } from "../../features/map/map.queries";

import labong from "../../assets/labong.png";
import labong_default from "../../assets/labong_default.png";

import { format } from "date-fns";

const dummyData = [
  { lat: 33.43, lng: 126.87 },
  { lat: 33.52, lng: 126.66 },
  { lat: 33.39, lng: 126.26 },
  { lat: 33.47, lng: 126.45 },
  { lat: 33.5, lng: 126.5 },
  { lat: 33.32, lng: 126.68 },
  { lat: 33.37, lng: 126.8 },
  { lat: 33.43, lng: 126.87 },
];

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [modalVisible, setModalVisible] = useState(false);

  const { data: registeredMarker } = useRegisteredMarker({ nickname: "aa" });

  const handleToggle = () => setModalVisible(!modalVisible);

  const handleDateClick = (date) => {
    handleToggle();
    setSelectedDate(date);
  };

  useEffect(() => {
    console.log("test", registeredMarker);
  }, [registeredMarker]);

  return (
    <Layout>
      <Header>
        <div>
          <div style={{ fontWeight: 600 }}>OO라봉의 제주 여행 일기</div>

          <Title>
            <Image src={labong_default} alt={"라봉로고"} />
            아이라봉
          </Title>
        </div>
        <div onClick={handleToggle}>{selectedDate}</div>
      </Header>

      <Map
        center={{ lat: 33.2, lng: 126.54 }}
        style={{
          width: "100%",
          height: "550px",
          marginBottom: "22px",
          borderRadius: "8px",
        }}
        level={10}
      >
        {dummyData?.map((data, index) => {
          const { lat, lng } = data;

          return (
            <MapMarker
              key={`${lat}-${index}`}
              position={{ lat, lng }}
              image={{
                src: labong,
                size: {
                  width: 30,
                  height: 30,
                },
              }}
            />
          );
        })}
      </Map>
      <Button>라봉이 심으러 갈래?</Button>

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
  justify-content: space-between;
  padding: 16px;
`;

const Title = styled.p`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 400;
`;

const Image = styled.img`
  width: 28px;
  height: 30px;
  margin-right: 10px;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
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
