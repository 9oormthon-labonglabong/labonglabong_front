import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { ChevronLeftIcon } from "@goorm-dev/gds-goormthon";

import { useRecoilState } from "recoil";
import { calendarAtom } from "../../atoms/calendarAtom";
import { INITIAL_STATE, diaryAtom } from "../../atoms/diaryAtom";

import { useNavigate, useLocation, useParams } from "react-router-dom";

import { queryClient } from "../..";
import { useDiaryRegistMutation } from "../../features/diary/diary.queries";

import { TimePicker } from "antd";
import labong_smile from "../../assets/labong_smile.png";
import labong_default from "../../assets/labong_default.png";

import dayjs from "dayjs";
import { parse } from "query-string";

import { LABONG_ARRAY } from "../../utils/common";

const Diary = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState(null);

  const [calendarState] = useRecoilState(calendarAtom);
  const [diaryState, setDiaryState] = useRecoilState(diaryAtom);

  // modal visible
  const { mutateAsync } = useDiaryRegistMutation({
    data: formData,
    options: {
      // 성공 시 지면 이동하고, query reset
      onSuccess: () => {
        queryClient.invalidateQueries();
        console.log("good");
        navigate("/main");
      },
    },
  });

  const navigate = useNavigate();
  const location = useLocation();
  const parsedData = parse(location.search);

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

    return !!time && emotion >= 0 && !!text && !!title && !!selectedFile;
  };

  const handleSubmit = () => {
    const isAllDataSelected = checkAllDataSelected();

    if (!isAllDataSelected) return;

    const customFormData = new FormData();

    customFormData.append("imageFiles", selectedFile);
    customFormData.append("time", diaryState.time);
    customFormData.append("emotion", diaryState.emotion + 1);
    customFormData.append("text", diaryState.text);
    customFormData.append(
      "date",
      dayjs(calendarState.selectedDate).format("YYYY-MM-DD")
    );
    customFormData.append("latitude", diaryState.latitude);
    customFormData.append("longitude", diaryState.longitude);
    customFormData.append("address", diaryState.address);
    customFormData.append("title", diaryState.title);
    customFormData.append("nickname", "aa");

    setFormData(customFormData);
    setDiaryState({
      ...INITIAL_STATE,
    });
  };

  return (
    <Layout>
      <ArrowWrapper>
        <ChevronLeftIcon
          style={{
            position: "absolute",
            left: "16px",
            width: "20px",
            height: "20px",
          }}
          onClick={() => {
            const { time, emotion, title, text } = INITIAL_STATE;
            setDiaryState({
              ...diaryState,
              time,
              emotion,
              title,
              text,
            });
            navigate(-1);
          }}
        />
        <Title>{dayjs(calendarState?.selectedDate).format("YYYY.MM.DD")}</Title>
        {!parsedData?.fixed && (
          <SubmitButton
            disabled={checkAllDataSelected()}
            onClick={handleSubmit}
          >
            등록
          </SubmitButton>
        )}
      </ArrowWrapper>
      <div>
        <DiarySection>
          <LabelSection>
            <LabelWrapper>
              <LabelTitle>장소</LabelTitle>
              <LabelContent>
                <BlockContent>{diaryState.address}</BlockContent>
              </LabelContent>
            </LabelWrapper>
            <LabelWrapper>
              <LabelTitle>시간</LabelTitle>
              <LabelContent>
                {!!parsedData?.fixed ? (
                  <div>{diaryState.time}</div>
                ) : (
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
                )}
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
                          onClick={() => {
                            if (!!parsedData?.fixed) return;
                            setDiaryState({
                              ...diaryState,
                              emotion: index,
                            });
                          }}
                          style={{ width: "28px", height: "35px" }}
                        />
                      </EmojiWrapper>
                    );
                  })}
                </EmojiSection>
              </div>
            </LabelWrapper>
          </LabelSection>
          <ImageWrapper>
            {selectedImage || !!parsedData?.fixed ? (
              <MainImage src={selectedImage ?? diaryState?.paths?.[0]} />
            ) : (
              <ImageUpload>
                <label htmlFor="ex_file">
                  <div className="btnStart">
                    <img src={labong_default} alt="btnStart" />
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
          </ImageWrapper>
          <LabelSection>
            <LabelWrapper>
              <LabelTitle>제목</LabelTitle>
              <LabelContent>
                {!!parsedData?.fixed ? (
                  <div>{diaryState.title}</div>
                ) : (
                  <TextInput
                    onChange={(e) =>
                      setDiaryState({
                        ...diaryState,
                        title: e.target.value,
                      })
                    }
                    placeholder={"제목을 입력해주세요"}
                  />
                )}
              </LabelContent>
            </LabelWrapper>
          </LabelSection>
          <ContentSection>
            {!!parsedData?.fixed ? (
              <div style={{ padding: "10px" }}>{diaryState.text}</div>
            ) : (
              <PaddedTextInput
                onChange={(e) =>
                  setDiaryState({
                    ...diaryState,
                    text: e.target.value,
                  })
                }
                placeholder={"추억을 담아 라봉이를 키워보라봉"}
              />
            )}
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
  position: relative;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div``;

const BlockContent = styled.div`
  text-overflow: ellipsis;
  -webkit-line-clamp: 1; /* 라인수 */
`;

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

const ImageWrapper = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid #858899;
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
  height: 300px;
  display: flex;
  align-items: flex-start;
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

const PaddedTextInput = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.div`
  position: absolute;
  right: 16px;
  color: ${({ disabled }) => (disabled ? "#f99239" : "#A9ABB8")};
`;
