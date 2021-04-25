import React from "react";
import { Card as CardAntd } from "antd";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Wrapper = styled.section``;

function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <CardAntd
          style={{ marginBottom: "2px" }}
          itemRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.card.content}
        </CardAntd>
      )}
    </Draggable>
  );
}

export default Card;
