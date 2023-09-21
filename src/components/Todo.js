import React from "react";
import styled from "styled-components";
import DailyDate from "./DailyDate";
import TodoInput from "./InputItem";
import Clock from "./Clock";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: "#F6F8FA";
  margin: 0;
  padding: 20px;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Pretendard-Regular";
  font-size: 25px;
  margin-bottom: 20px;
  line-height: 150%;
  letter-spacing: 2px;
`;

const TodoList = styled.div`
  display: flex;
  align-items: center;
  width: 60vh;
  height: 65vh;
  padding: 10px;
  justify-content: space-between;
  background-color: #f3f3f3;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Done_lists = styled.div`
  overflow: auto;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none;
  box-sizing: border-box;
`;

const Todo_lists = styled.div`
  overflow: auto;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none;
  box-sizing: border-box;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 88%;
  cursor: pointer;
  font-family: "Pretendard-Regular";
  font-size: 13px;
`;

const First = styled.div`
  width: 49%;
  height: 100%;
  box-sizing: border-box;
`;

const Second = styled.div`
  width: 49%;
  height: 100%;
  box-sizing: border-box;
`;

export default function Todo() {
  return (
    <Container>
      <Title>DAILY PLANNER</Title>
      <TodoList>
        <First>
          <TodoInput />
          <Todo_lists />
        </First>

        <Second>
          <DailyDate />
          <Done_lists />
        </Second>
      </TodoList>

      <Clock />
    </Container>
  );
}
