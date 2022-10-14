import React, { useState, useEffect } from "react";

import styled from "styled-components";

import theme from "../../context/themeContext";

import { useNavigate } from "react-router-dom";

import Lottie from "lottie-react";

import labong from "../../assets/labong_lottie.json";

import { useNicknameRegistMutation } from "../../features/nickname/nickname.queries";

import { useRecoilState } from "recoil";
import { calendarAtom } from "../../atoms/calendarAtom";

const Landing = () => {
  const [inputText, setInputText] = useState("");
  const [focusStatus, setFocusStatus] = useState(false);

  const [calendarState, setCalendarState] = useRecoilState(calendarAtom);

  const navigate = useNavigate();

  const { mutateAsync } = useNicknameRegistMutation({
    data: inputText,
    options: {
      onSuccess: () => {
        setCalendarState({
          ...calendarState,
          nickname: inputText,
        });

        console.log("test", {
          ...calendarState,
          nickname: inputText,
        });

        navigate("/main");
      },
    },
  });

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 성공시에 이동해야하기때문에 onSuccess로 이동
    mutateAsync();
    // navigate("/main");
  };

  return (
    <Layout>
      <MainSection>
        <ImageWrapper>
          <Lottie animationData={labong} />
        </ImageWrapper>
        <Content>
          <div style={{ marginTop: "50px" }}>나의 제주 여행 일기</div>
          <Title>아이라봉</Title>
          <SubContent>이름을 알려주라봉</SubContent>
          <CustomInputSection focused={focusStatus}>
            <CustomInputWrapper focused={focusStatus}>
              <CustomInput
                type="text"
                maxLength="10"
                placeholder={"Ex) 카카"}
                onChange={onChange}
                onFocus={() => setFocusStatus(true)}
                onBlur={() => setFocusStatus(false)}
              />
            </CustomInputWrapper>
            <p style={{ fontSize: "24px" }}>라봉</p>
          </CustomInputSection>
        </Content>
      </MainSection>
      <Button type="submit" onClick={handleSubmit}>
        제주도로 착륙
      </Button>
    </Layout>
  );
};

export default Landing;

const Layout = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 58px 16px 58px 16px;
`;

const MainSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 210px;
  border-radius: 105px;
  background-color: ${theme.color.PRIMARY};
`;

const Image = styled.img`
  width: 131px;
  height: 165px;
`;

const Content = styled.div`
  text-align: center;
  font-family: JejuGothic;
  font-weight: 600;
`;

const Title = styled.div`
  margin-top: 12px;
  font-size: 40px;
  font-family: JejuGothic;
  line-height: 36px;
  font-weight: 600;
`;

const SubContent = styled.div`
  margin-top: 55px;
  text-align: center;
  font-weight: 700;
`;

const CustomInputSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  padding: 10px 26px;

  border: ${({ focused }) =>
    focused ? "2px solid #f99239" : "1px solid #a9abb8"};
  border-radius: 16px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;

const CustomInputWrapper = styled.div`
  margin-right: 8px;
  border-bottom: ${({ focused }) =>
    focused ? "2px solid #f99239" : "2px solid #a9abb8"};
`;

const CustomInput = styled.input`
  width: 150px;
  padding: 0 5px 5px 5px;
  font-size: 24px;
  text-align: center;
  caret-color: #f99239;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 16px;
    text-align: center;
    color: #a9abb8;
  }
`;

const Button = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  background-color: #f99239;
  color: white;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-shadow: "0px 4px 10px rgba(0, 0, 0, 0.2)";
  margin-top: 150px;
`;
