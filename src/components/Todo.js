import React from "react";
import styled from "styled-components";

const TodoList = styled.div``;

const Done_lists = styled.div``;

const Todo_lists = styled.div``;

function Todo({ todos }) {
  return (
    <TodoList>
      {todos.map((todo) => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </TodoList>
  );
}

export default Todo;
