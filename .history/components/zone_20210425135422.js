import React from "react";
import { Layout, Card, Typography } from "antd";

const { Title } = Typography;

function zone(props) {
  return (
    <>
      <Layout>
        <Title>{props.zone.title}</Title>
        <Card></Card>
      </Layout>
    </>
  );
}

export default zone;
