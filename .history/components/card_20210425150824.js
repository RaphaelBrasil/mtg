import React from "react";
import { Card as CardAntd } from "antd";
import { Draggable } from "react-beautiful-dnd";

function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
          <divinnerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>

        <CardAntd
          style={{ marginBottom: "2px" }}
          >
          {props.card.content}
        </CardAntd>
            </divinnerRef=>
      )}
    </Draggable>
  );
}

export default Card;
