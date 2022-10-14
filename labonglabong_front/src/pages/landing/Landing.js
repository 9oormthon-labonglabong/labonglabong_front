import React from "react";

import styled from "styled-components";

import theme from "../../context/themeContext";

import labong from "../../assets/labong.png";

const Landing = () => {
  return (
    <Layout>
      <Content>
        <ImageWrapper>
          <Image src={labong} alt={"라봉이"} />
        </ImageWrapper>
        <div style={{ marginTop: "40px" }}>나의 제주 여행 일기</div>
        <Title>아이라봉</Title>
        <SubContent>나의 이름을 알려주라봉</SubContent>
        <CustomInputWrapper>
          <div
            style={{
              width: "100px",
              height: "25px",
              padding: "0 15px",
              borderBottom: "3px solid #f99239",
            }}
          >
            <input placeholder={"테스트"} style={{ width: "50px" }} />
          </div>
          라봉
        </CustomInputWrapper>
      </Content>
      <Button>라봉이 심으러 갈라봉?</Button>
    </Layout>
  );
};

export default Landing;

const Layout = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 58px 16px 58px 16px;
`;

const ImageWrapper = styled.div`
  display: flex;
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
  margin-top: 25px;
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
  font-weight: 600;
`;

const CustomInputWrapper = styled.div`
  margin-top: 20px;
  padding: 20px 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f99239;
  border-radius: 8px;
`;

const CustomInput = styled.input`
  &:focus {
    border: none;
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
`;
