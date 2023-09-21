import React from "react";
import styled from "styled-components";
import { useState, useCallback } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 3px;
  height: 10%;
  box-sizing: border-box;
  border: 0.5px solid #736e6e;
`;

const InputField = styled.input`
  width: 90%;
  padding: 3px;
  border: none;
  border-bottom: 1px solid #555252;
  background-color: transparent;
  color: #555252;
  font-family: "Pretendard-Regular";
  margin-left: 3px;
  box-sizing: border-box;
  &:focus {
    outline-style: none;
  }
`;

const AddButton = styled.button`
  margin-top: 3px;
  width: 20px;
  height: 30px;
  background-color: transparent;
  color: #555252;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export default function TodoInput({ input }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      setValue(""); //value 초기화
      //기본이벤트(새로고침) 방지
      e.preventDefault();
    },
    [value]
  );
  return (
    <Container onSubmit={onSubmit}>
      <InputField
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요"
      />
      <AddButton type="submit">+</AddButton>
    </Container>
  );
}
