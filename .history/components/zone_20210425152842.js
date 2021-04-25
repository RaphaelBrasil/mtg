import React from "react";
import { Layout, Card as CardAntd, Typography } from "antd";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Card from "./card";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: white;
`;

const Title = styled.h3`
  padding: 8px;
`;
const Hand = styled.div`
  padding: 8px;
`;

function zone(props) {
  return (
    <Container>
      <Title>{props.zone.title}</Title>
      <Droppable droppableId={props.zone.id}>
        {(provided) => (
          <Hand innerRef={provided.innerRef} {...provided.droppableProps}>
            {props.cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </Hand>
        )}
      </Droppable>
    </Container>
  );
}

export default zone;
