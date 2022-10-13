import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { ChevronLeftIcon } from "@goorm-dev/gds-goormthon";

import { useRecoilState } from "recoil";
import { calendarAtom } from "../../atoms/calendarAtom";
import { diaryAtom } from "../../atoms/diaryAtom";

import { useNavigate } from "react-router-dom";

import { useDiaryRegistMutation } from "../../features/diary/diary.queries";

import dayjs from "dayjs";

import labong_smile from "../../assets/labong_smile.png";

import { TimePicker } from "antd";

import { LABONG_ARRAY } from "../../utils/common";

// props 혹은 query params로 체크하여 수정이 불가하게 분기처리한다.
const Diary = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState(null);

  const [calendarState] = useRecoilState(calendarAtom);
  const [diaryState, setDiaryState] = useRecoilState(diaryAtom);

  // modal visible
  const { mutateAsync } = useDiaryRegistMutation({ data: formData });

  const navigate = useNavigate();

  useEffect(() => {
    if (!!formData) {
      mutateAsync();
    }
  }, [formData]);

  const readImage = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(input.files[0]);
    }
  };

  const checkAllDataSelected = () => {
    const { time, emotion, text, title } = diaryState;

    return !!time && !!emotion && !!text && !!title && !!selectedFile;
  };

  useEffect(() => {
    console.log("test", checkAllDataSelected());
  }, [checkAllDataSelected]);

  const handleSubmit = () => {
    const isAllDataSelected = checkAllDataSelected();

    if (!isAllDataSelected) return;

    const customFormData = new FormData();

    customFormData.append("imageFiles", selectedFile);
    customFormData.append("time", diaryState.time);
    customFormData.append("emotion", diaryState.emotion);
    customFormData.append("text", diaryState.text);
    customFormData.append("date", calendarState.selectedDate);
    customFormData.append("latitude", diaryState.latitude);
    customFormData.append("longitude", diaryState.longitude);
    customFormData.append("address", diaryState.address);
    customFormData.append("title", diaryState.title);
    customFormData.append("nickname", "aa");

    setFormData(customFormData);
  };

  return (
    <Layout>
      <ArrowWrapper>
        <ChevronLeftIcon
          style={{ width: "20px", height: "20px" }}
          onClick={() => navigate(-1)}
        />
        <Title>{dayjs(calendarState?.selectedDate).format("YYYY.MM.DD")}</Title>
        <SubmitButton disabled={checkAllDataSelected()} onClick={handleSubmit}>
          등록
        </SubmitButton>
      </ArrowWrapper>
      <div>
        <DiarySection>
          <LabelSection>
            <LabelWrapper>
              <LabelTitle>장소</LabelTitle>
              <LabelContent>
                <TextInput placeholder={"장소를 입력해주세요"} />
              </LabelContent>
            </LabelWrapper>
            <LabelWrapper>
              <LabelTitle>시간</LabelTitle>
              <LabelContent>
                <TimePicker
                  placeholder={"00:00"}
                  onChange={(value) =>
                    setDiaryState({
                      ...diaryState,
                      time: dayjs(value).format("HH:mm"),
                    })
                  }
                  format={"HH:mm"}
                />
              </LabelContent>
            </LabelWrapper>
          </LabelSection>
          <LabelSection>
            <LabelWrapper>
              <LabelTitle>기분</LabelTitle>
              <div style={{ display: "flex", flex: 1, padding: "0 20px" }}>
                <EmojiSection>
                  {LABONG_ARRAY.map((data, index) => {
                    return (
                      <EmojiWrapper index={index} emotion={diaryState.emotion}>
                        <img
                          src={data}
                          onClick={() =>
                            setDiaryState({
                              ...diaryState,
                              emotion: index,
                            })
                          }
                          style={{ width: "28px", height: "35px" }}
                        />
                      </EmojiWrapper>
                    );
                  })}
                </EmojiSection>
              </div>
            </LabelWrapper>
          </LabelSection>
          <div
            style={{
              height: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "3px solid #858899",
            }}
          >
            {selectedImage ? (
              <MainImage src={selectedImage} />
            ) : (
              <ImageUpload>
                <label htmlFor="ex_file">
                  <div className="btnStart">
                    <img src={labong_smile} alt="btnStart" />
                  </div>
                </label>
                <input
                  type="file"
                  id="ex_file"
                  accept="image/jpg, image/png, image/jpeg"
                  onChange={(e) => {
                    setSelectedFile(e.target.files[0]);
                    readImage(e.target);
                  }}
                />
              </ImageUpload>
            )}
          </div>
          <LabelSection>
            <LabelWrapper>
              <LabelTitle>제목</LabelTitle>
              <LabelContent>
                <TextInput
                  onChange={(e) =>
                    setDiaryState({
                      ...diaryState,
                      title: e.target.value,
                    })
                  }
                  placeholder={"제목을 입력해주세요"}
                />
              </LabelContent>
            </LabelWrapper>
          </LabelSection>
          <ContentSection>
            <TextInput
              onChange={(e) =>
                setDiaryState({
                  ...diaryState,
                  text: e.target.value,
                })
              }
              placeholder={"추억을 담아 라봉이를 키워보라봉"}
            />
          </ContentSection>
        </DiarySection>
      </div>
    </Layout>
  );
};

export default Diary;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ArrowWrapper = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div``;

const DiarySection = styled.section`
  height: calc(100vh - 60px);
  border: 3px solid #858899;
`;

const LabelSection = styled.section`
  display: flex;
  align-items: center;
`;

const LabelWrapper = styled.div`
  height: 64px;
  display: flex;
  flex: 1;
  align-items: center;

  border-bottom: 3px solid #858899;

  & + & {
    border-left: 3px solid #858899;
  }
`;

const LabelTitle = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  border-right: 3px solid #858899;
`;
const LabelContent = styled.div`
  padding: 10px;
  display: flex;
  flex: 1;
`;

const EmojiSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const EmojiWrapper = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ emotion, index }) =>
    emotion === index ? "#f99239" : "white"};
  border-radius: 8px;
`;

const MainImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ImageUpload = styled.div`
  margin: 0 8px 0 8px;
  img {
    max-width: 325px;
  }
  label {
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const ContentSection = styled.section`
  display: flex;
  align-items: center;
`;

const TextInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.div`
  color: ${({ disabled }) => (disabled ? "#f99239" : "#A9ABB8")};
`;
