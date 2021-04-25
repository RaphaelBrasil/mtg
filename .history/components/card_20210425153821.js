import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export default function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          {props.card.content}
        </Container>
      )}
    </Draggable>
  );
}
