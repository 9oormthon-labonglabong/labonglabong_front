import React, { useState, useEffect } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
import labong_add from "../../assets/labong_add.svg";
import goback from "../../assets/goback.svg";

const { kakao } = window;

function Map_sdk() {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
  };

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(InputText, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, InputText]);

  return (
    <Layout>
      <Header>
        <div>
          <img src={goback} style={{ height: "16px" }} />
        </div>
        <div>
          <Date>장소 탐색</Date>
        </div>
        <div style={{ width: "10px" }}></div>
      </Header>
      <form className="inputForm" onSubmit={handleSubmit}>
        {/* <Container> */}
        <Input
          placeholder="라봉이를 심을 장소 탐색하라봉"
          onChange={onChange}
          value={InputText}
        />
        {/* <button type="submit">검색</button> */}
        {/* </Container> */}
      </form>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 33.35,
          lng: 126.55,
        }}
        style={{
          width: "100%",
          height: "100%",
          // marginBottom: "22px",
          borderRadius: "8px",
          paddingTop: "100px",
        }}
        level={10}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <>
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              image={{
                src: labong_add,
                size: {
                  width: 30,
                  height: 30,
                },
              }}
              onClick={() => setInfo(marker)}
            />

            <CustomOverlayMap position={marker.position}>
              <div className="label" style={{ color: "#000" }}>
                {info && info.content === marker.content && (
                  <Container>
                    <Info>{marker.content}</Info>
                    <Button><a href=""> 일기 쓰기 </a></Button>
                  </Container>
                )}
              </div>
            </CustomOverlayMap>
          </>
        ))}
      </Map>
    </Layout>
  );
}

export default Map_sdk;

const Button = styled.div`
  padding: 3px;
  border-radius: 6px;
  background-color: #f99239;
  color: white;
  font-weight: 700;
  text-align: center;
  align-items: center;
  cursor: pointer;
  width: 78px;
  height: 21px;
  margin-top: 7px;
  font-size: 12px;
  float: right;
`;

const Info = styled.span`
  padding: 2px;
  margin-top: 30px;
  border-radius: 12px;
  font-weight: 500;
  text-align: center;
  width: 500px;
  -webkit-text-stroke: 0.5px white;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 13px;
  padding-left: 25px;
  border-radius: 12px;
  background-color: white;
  font-weight: 500;
  width: 90%;
  justify-content: space-between;
  margin-right: 16px;
  margin-left: 16px;
  border-radius: 12px;
  position: absolute;
  z-index: 999;
  top: 75px;
  font-size: 16px;
`;

const Layout = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 999;
  height: 50px;
  padding-right: 16px;
  padding-left: 16px;
`;

const Date = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: 16px;
`;

const Container = styled.div`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 11px;
  height: 64px;
`;

const ClearFix = styled.div`
  background-color: white;
  width: 100%;
`;
