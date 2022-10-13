import React, { useState, useEffect } from "react";

import styled from "styled-components";

import theme from "../../context/themeContext";

import { useNavigate } from "react-router-dom";

import Lottie from "lottie-react";

import labong from "../../assets/labong_lottie.json";

import { useNicknameRegistMutation } from "../../features/nickname/nickname.queries";

const Landing = () => {

  const navigate = useNavigate();

  const [InputText, setInputText] = useState("");

  const { mutateAsync } = useNicknameRegistMutation({ data: InputText });

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/main')
  };

  return (
    <Layout>
      <ImageWrapper>
        <Lottie animationData={labong} />
      </ImageWrapper>
      <ClearFix>
        <Content>
          <div style={{ marginTop: "50px" }}>나의 제주 여행 일기</div>
          <Title>아이라봉</Title>
          <SubContent>이름을 알려주라봉</SubContent>
          <CustomInputWrapper>
            <BotoomLine/>
            <CustomInput type="text" maxLength="10" placeholder={"Ex) 카카"} onChange={onChange}  />
            <Date>라봉</Date>
          </CustomInputWrapper>
        </Content>
        <Button type="submit" onClick={handleSubmit}>라봉이 심으러 갈라봉?</Button>
      </ClearFix>
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

const ClearFix = styled.div`
  height: 100%;
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
  margin-top: 15px;
  font-size: 40px;
  line-height: 36px;
  font-weight: 600;
`;

const SubContent = styled.div`
  margin-top: 55px;
  text-align: center;
  font-weight: 700;
`;

const CustomInputWrapper = styled.div`
  margin-top: 20px;
  padding: 20px 26px;
  // display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomInput = styled.input`
  margin: 0 3px;
  padding: 15px;
  margin-left: -15px;
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

const Date = styled.span`
  margin-left: -45px;
`;

const BotoomLine = styled.div`
  width: "170px";
  height: "3px";
  padding: "0 15px";
  borderbottom: "3px solid #f99239";
  position: "absolute";
  top: "600px";
`;
