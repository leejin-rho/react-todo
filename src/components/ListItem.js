import React from "react";
import styled from "styled-components";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

const ItemText = styled.text`
  font-family: "Pretendard-Regular";
  font-size: 13px;
`;

export default function ListItem({ input }) {
  return (
    <Item>
      <FontAwesomeIcon icon={faCircle} />
      <ItemText>{input}</ItemText>
      <FontAwesomeIcon icon={faTrashCan} />
    </Item>
  );
}
