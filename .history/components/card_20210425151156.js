import React from "react";
import { Card as CardAntd } from "antd";
import { Draggable } from "react-beautiful-dnd";

const Wrapper = styled.section``;

function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <Wrapper
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardAntd style={{ marginBottom: "2px" }}>
            {props.card.content}
          </CardAntd>
        </Wrapper>
      )}
    </Draggable>
  );
}

export default Card;
