import React from "react";
import { Card as CardAntd } from "antd";

function Card(props) {
  return <CardAntd>{props.card.content}</CardAntd>;
}

export default Card;
