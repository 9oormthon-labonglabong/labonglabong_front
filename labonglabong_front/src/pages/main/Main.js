import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import Calendar from "../../components/Calendar";
import { Modal, ModalBody } from "reactstrap";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

import { useRegisteredMarker } from "../../features/map/map.queries";

import { useRegisteredDiary } from "../../features/calendar/calendar.queries";

import labong from "../../assets/labong.png";
import labong_default from "../../assets/labong_default.png";

import { ChevronDownIcon, Spinner } from "@goorm-dev/gds-goormthon";

import { checkCommentSize, LABONG_ARRAY } from "../../utils/common";

import { useRecoilState } from "recoil";
import { calendarAtom } from "../../atoms/calendarAtom";

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [calendarState, setCalendarState] = useRecoilState(calendarAtom);

  const navigate = useNavigate();

  const {
    data: registeredDiarys,
    refetch,
    isFetching,
  } = useRegisteredDiary({
    nickname: "aa",
    date: calendarState.selectedDate,
  });
  const { data: registeredMarker } = useRegisteredMarker({ nickname: "aa" });

  useEffect(() => {
    refetch();
  }, [calendarState.selectedDate]);

  useEffect(() => {
    console.log("registeredMarker", registeredMarker);
  }, [registeredMarker]);

  const handleToggle = () => setModalVisible(!modalVisible);

  const handleDateClick = (date) => {
    handleToggle();
    setCalendarState({
      selectedDate: date,
    });
  };

  return (
    <Layout>
      <div>
        <Header>
          <div>
            <div style={{ fontWeight: 600 }}>OO라봉의 제주 여행 일기</div>

            <Title>
              <Image src={labong_default} alt={"라봉로고"} />
              아이라봉
            </Title>
          </div>
          <DatePickerTrigger onClick={handleToggle}>
            {calendarState?.selectedDate}
            <ChevronDownIcon />
          </DatePickerTrigger>
        </Header>

        {/* {isFetching ? (
          <SpinnerWrapper>
            <Spinner color={"warning"} />
          </SpinnerWrapper>
        ) : ( */}
        <Map
          center={{ lat: 33.35, lng: 126.54 }}
          style={{
            width: "100%",
            height: "550px",
            marginBottom: "22px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
          level={10}
        >
          {registeredDiarys?.map((data, index) => {
            const { latitude, longitude, size, emotion } = data;
            const { width, height } = checkCommentSize(size);

            return (
              <>
                <MapMarker
                  key={`${longitude}-${index}`}
                  position={{ lat: latitude, lng: longitude }}
                  image={{
                    src: LABONG_ARRAY[emotion - 1],
                    size: {
                      width,
                      height,
                    },
                  }}
                />
                {/* <CustomOverlayMap
                  position={{ lat: latitude, lng: longitude }}
                  xAnchor={-2}
                  yAnchor={5}
                >
                  <NumberTag>{index + 1}</NumberTag>
                </CustomOverlayMap> */}
              </>
            );
          })}
        </Map>
        {/* )} */}
      </div>
      <Button onClick={() => navigate("/diary")}>라봉이 심으러 갈라봉?</Button>

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
  padding: 58px 16px 58px 16px;
`;

const Title = styled.div`
  margin-top: 15px;
  font-size: 40px;
  line-height: 36px;
  font-weight: 600;
  font-family: JejuGothic;
`;

const Image = styled.img`
  width: 28px;
  height: 30px;
  margin-right: 10px;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NumberTag = styled.div`
  padding: 4px 8px;
  background-color: #f99239;
  border: 1px solid white;
  border-radius: 8px;
  font-size: 10px;
  color: white;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
`;

const DatePickerTrigger = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 500;
`;

const Button = styled.div`
  padding: 16px;
  border-radius: 12px;
  background-color: #f99239;
  color: white;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-shadow: "0px 4px 10px rgba(0, 0, 0, 0.2)";
`;
