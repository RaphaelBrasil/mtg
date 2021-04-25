import React from "react";
import { Layout, Card as CardAntd, Typography } from "antd";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Card from "./card";

const { Content } = Layout;
const { Title } = Typography;

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: white;
`;

function zone(props) {
  return (
    <Layout>
      <Content>
        <CardAntd style={{ margin: "8px", borderRdius: "5px" }}>
          <Title>{props.zone.title}</Title>
          <Droppable droppableId={props.zone.id}>
            {(provided) => (
              <CardAntd
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {props.cards.map((card, index) => (
                  <Card key={card.id} card={card} index={index} />
                ))}
                {provided.placeholder}
              </CardAntd>
            )}
          </Droppable>
        </CardAntd>
      </Content>
    </Layout>
  );
}

export default zone;
