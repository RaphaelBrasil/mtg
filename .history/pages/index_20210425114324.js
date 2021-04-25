import "antd/dist/antd.css";
import { Card, Avatar, Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Space direction="vertical" style={{ minWidth: "100vw" }}>
        <Card
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            height: "49vh",
          }}
        >
          P2
        </Card>
        <Card
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            height: "49vh",
          }}
        >
          P1
        </Card>
      </Space>
    </>
  );
}
