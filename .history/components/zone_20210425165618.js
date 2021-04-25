import React from "react";
import styled from "styled-components";
import { Card as CardAntd, Typography } from "antd";
import { Droppable } from "react-beautiful-dnd";
import Card from "./card";

const HandOfCards = styled.div`
  padding: 8px;
`;

const { Title } = Typography;

function Zone(props) {
  return (
    <CardAntd size="small">
      <Title>{props.zone.title}</Title>
      <Droppable droppableId={props.zone.id}>
        {(provided) => (
          <HandOfCards ref={provided.innerRef} {...provided.droppableProps}>
            {props.cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </HandOfCards>
        )}
      </Droppable>
    </CardAntd>
  );
}

export default Zone;
