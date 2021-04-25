import "antd/dist/antd.css";
import { Card, Layout } from "antd";

import Dnd from "./dnd";

const { Header, Footer, Sider, Content } = Layout;

export default function Board() {
  return (
    <>
      <Card
        size="small"
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Card
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            height: "36vh",
          }}
        >
          P2 Board
        </Card>
        <Card
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            height: "38vh",
          }}
        >
          P1 Board
        </Card>
        <Card
          style={{
            backgroundColor: "blue",
            borderRadius: "5px",
            height: "22vh",
          }}
        >
          Hand
        </Card>
      </Card>
    </>
  );
}
