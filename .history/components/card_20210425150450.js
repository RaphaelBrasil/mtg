import React from "react";
import { Card as CardAntd } from "antd";
import { Draggable } from "react-beautiful-dnd";

function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      <CardAntd style={{ marginBottom: "2px" }}>{props.card.content}</CardAntd>
    </Draggable>
  );
}

export default Card;
