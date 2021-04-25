import React from "react";
import { Card as CardAntd } from "antd";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <Container
          style={{ marginBottom: "2px" }}
          itemRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.card.content}
        </Container>
      )}
    </Draggable>
  );
}

export default Card;
