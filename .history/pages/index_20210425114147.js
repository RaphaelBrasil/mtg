import "antd/dist/antd.css";
import { Card, Avatar, Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Space direction="vertical">
        <Card
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            minHeight: "49vh",
          }}
        >
          P2
        </Card>
        <Card
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            minHeight: "49vh",
          }}
        >
          P1
        </Card>
      </Space>
    </>
  );
}
