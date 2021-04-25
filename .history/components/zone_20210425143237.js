import React from "react";
import { Layout, Card, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

function zone(props) {
  return (
    <Layout>
      <Content>
        <Card style={{ margin: "8px", borderRdius: "5px" }}>
          <Title>{props.zone.title}</Title>
          <Card>
            {props.cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </Card>
        </Card>
      </Content>
    </Layout>
  );
}

export default zone;
