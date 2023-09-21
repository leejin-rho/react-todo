import React, { useState } from "react";
import styled from "styled-components";
import DailyDate from "./DailyDate";
import TodoInput from "./InputItem";
import Clock from "./Clock";
import ListItem from "./ListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: "#F6F8FA";
  padding: 10px;
  align-items: center;

  @media (max-width: 390px) {
    width: auto;
    height: 70vh;
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
  width: 80vh;
  height: 70vh;
  padding: 10px;
  justify-content: space-between;
  background-color: #f3f3f3;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 390px) {
    width: 90%;
    height: 70vh;
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
  align-items: center;
`;

const Dones = styled.div`
  width: 100%;
  height: 90%;
  border: 0.5px solid #736e6e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: #6d6d6d;
  box-sizing: border-box;
  align-items: center;
`;

const Todo_lists = styled.ul`
  overflow: auto;
  height: 80%;
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none;
  box-sizing: border-box;
  margin-bottom: 5px;
  padding-left: 0px;
  cursor: pointer;
  list-style-type: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Done_lists = styled.ul`
  overflow: auto;
  height: 80%;
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none;
  box-sizing: border-box;
  padding-left: 0px;
  list-style-type: none;
  &::-webkit-scrollbar {
    display: none;
  }
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
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  const createTodo = (listInput) => {
    setTodos((prevTodos) => [listInput, ...prevTodos]); //todo리스트에 Input div 추가
    //localStorage.setItem(JSON.stringify(todos));
  };

  const moveTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((item, i) => i !== index)); //todo리스트에서 index가 일치하는 아이템만 제거한 리스트로 setTodo
    setDones((prevDones) => [todos[index], ...prevDones]); //done리스트에 list추가
  };

  const moveDone = (index) => {
    setDones((prevDones) => prevDones.filter((item, i) => i !== index));
    setTodos((prevTodos) => [dones[index], ...prevTodos]); //todo리스트에 list추가
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((item, i) => i !== index));
  };

  const deleteDone = (index) => {
    setDones((prevDones) => prevDones.filter((item, i) => i !== index));
  };

  return (
    <Container>
      <Title>DAILY PLANNER</Title>
      <TodoList>
        <First>
          <TodoInput createTodo={createTodo} />
          <Todos>
            <TodoNum>Todo: {todos.length}</TodoNum>
            <Todo_lists>
              {todos.map((item, index) => (
                <ListItem
                  key={index}
                  input={item}
                  isClicked={false}
                  deleteList={() => deleteTodo(index)}
                  onClick={() => moveTodo(index)}
                />
              ))}
            </Todo_lists>
          </Todos>
        </First>

        <Second>
          <DailyDate />
          <Dones>
            <DoneNum>Done: {dones.length}</DoneNum>
            <Done_lists>
              {dones.map((item, index) => (
                <ListItem
                  key={index}
                  input={item}
                  isClicked={true}
                  deleteList={() => deleteDone(index)}
                  onClick={() => moveDone(index)}
                />
              ))}
            </Done_lists>
          </Dones>
        </Second>
      </TodoList>

      <Clock />
    </Container>
  );
}
