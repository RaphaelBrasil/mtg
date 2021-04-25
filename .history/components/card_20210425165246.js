import React from "react";
import styled from "styled-components";
import { Card as CardAntd } from "antd";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardAntd title={props.card.content}></CardAntd>
        </div>
      )}
    </Draggable>
  );
}
