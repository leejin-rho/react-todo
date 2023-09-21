import React from "react";
import styled from "styled-components";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
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
  margin: 0px 8px 0px 8px;
`;

const ClickedText = styled.text`
  font-family: "Pretendard-Regular";
  font-size: 13px;
  margin: 0px 8px 0px 8px;
  text-decoration: line-through;
`;

const IconBox = styled.div`
  display: flex;
`;

export default function ListItem({ input, onClick, isClicked, deleteList }) {
  return (
    <Item>
      {isClicked ? (
        <FontAwesomeIcon icon={faCircleCheck} style={{ height: 13 }} />
      ) : (
        <FontAwesomeIcon
          onClick={onClick}
          icon={faCircle}
          style={{ height: 13 }}
        />
      )}
      {isClicked ? (
        <ClickedText>{input}</ClickedText>
      ) : (
        <ItemText>{input}</ItemText>
      )}

      {isClicked ? (
        <IconBox>
          <FontAwesomeIcon
            icon={faRotateLeft}
            style={{ height: 13, marginRight: 3 }}
            onClick={onClick}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ height: 13 }}
            onClick={deleteList}
          />
        </IconBox>
      ) : (
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ height: 13 }}
          onClick={deleteList}
        />
      )}
    </Item>
  );
}
