import React from "react";
import { Layout, Card as CardAntd, Typography } from "antd";
import { Droppable } from "react-beautiful-dnd";
import Card from "./card";

const { Content } = Layout;
const { Title } = Typography;

function zone(props) {
  return (
    <Layout>
      <Content>
        <CardAntd style={{ margin: "8px", borderRdius: "5px" }}>
          <Title>{props.zone.title}</Title>
          <Droppable>
            <CardAntd>
              {props.cards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </CardAntd>
          </Droppable>
        </CardAntd>
      </Content>
    </Layout>
  );
}

export default zone;
