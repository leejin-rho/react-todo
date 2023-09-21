import React from "react";
import styled from "styled-components";
import DailyDate from "./DailyDate";
import TodoInput from "./InputItem";
import Clock from "./Clock";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: "#F6F8FA";
  padding: 10px;
  align-items: center;

  @media (max-width: 390px) {
    width: auto;
    height: 65vh;
  }
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

  @media (max-width: 390px) {
    width: 90%;
    height: 65vh;
  }
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

const Todos = styled.div`
  width: 100%;
  height: 90%;
  border: 0.5px solid #736e6e;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Dones = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  color: #6d6d6d;
  border: 0.5px solid #736e6e;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Done_lists = styled.ul`
  overflow: auto;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none;
  box-sizing: border-box;
`;

const Todo_lists = styled.ul`
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

const TodoNum = styled.span`
  display: flex;
  font-size: 13px;
  font-family: "Pretendard-SemiBold";
  width: 100%;
  height: 10%;
  align-items: center;
  padding-left: 10px;
  background-color: #e0e0e0;
  border-radius: 10px 10px 0px 0px;
  box-sizing: border-box;
`;

const DoneNum = styled.span`
  display: flex;
  font-size: 13px;
  font-family: "Pretendard-SemiBold";
  width: 100%;
  height: 10%;
  align-items: center;
  padding-left: 10px;
  background-color: #e0e0e0;
  border-radius: 10px 10px 0px 0px;
  box-sizing: border-box;
`;

export default function Todo() {
  return (
    <Container>
      <Title>DAILY PLANNER</Title>
      <TodoList>
        <First>
          <TodoInput />
          <Todos>
            <TodoNum>Todo: 0</TodoNum>
            <Todo_lists />
          </Todos>
        </First>

        <Second>
          <DailyDate />
          <Dones>
            <DoneNum>Done: 0</DoneNum>
            <Done_lists />
          </Dones>
        </Second>
      </TodoList>

      <Clock />
    </Container>
  );
}
