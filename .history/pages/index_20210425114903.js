import "antd/dist/antd.css";
import { Card, Avatar, Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Card
        size="small"
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Space direction="vertical" style={{ minWidth: "100%" }}>
          <Card
            style={{
              backgroundColor: "gray",
              borderRadius: "5px",
              height: "40vh",
            }}
          >
            P2
          </Card>
          <Card
            style={{
              backgroundColor: "gray",
              borderRadius: "5px",
              height: "40vh",
            }}
          >
            P1
          </Card>
          <Card
            style={{
              backgroundColor: "blue",
              borderRadius: "5px",
              height: "20vh",
            }}
          >
            Hand
          </Card>
        </Space>
      </Card>
    </>
  );
}
