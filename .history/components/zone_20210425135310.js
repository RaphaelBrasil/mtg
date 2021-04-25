import React from "react";
import { Layout } from "antd";

function zone(props) {
  return (
    <>
      <Layout>{props.zone.title}</Layout>
    </>
  );
}

export default zone;
