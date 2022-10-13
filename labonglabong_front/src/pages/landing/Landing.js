import React from "react";

import { Input } from "reactstrap";

import labong from "../../assets/labong.png";
import styled from "styled-components";

const Landing = () => {
  return (
    <Layout>
      <Image src={labong} alt={"라봉이"} />
      <Content>나의 라봉이 이름을 지어주세요</Content>
      <CustomInput placeholder={"나의 라봉이는?"} />
    </Layout>
  );
};

export default Landing;

const Layout = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
`;

const Content = styled.div`
  margin-top: 25px;
  font-size: 24px;
  font-weight: 700;
`;

const CustomInput = styled(Input)`
  width: 300px;
  margin-top: 20px;
`;
