import React from "react";
import { Card as CardAntd } from "antd";

function Card(props) {
  return (
    <CardAntd style={{ marginBottom: "2px" }}>{props.card.content}</CardAntd>
  );
}

export default Card;
