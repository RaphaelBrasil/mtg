import "antd/dist/antd.css";
import { Card, Avatar, Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Card size="small">
        <Space direction="vertical" style={{ minWidth: "100%" }}>
          <Card
            style={{
              backgroundColor: "gray",
              borderRadius: "5px",
              height: "35%",
            }}
          >
            P2
          </Card>
          <Card
            style={{
              backgroundColor: "gray",
              borderRadius: "5px",
              height: "40%",
            }}
          >
            P1
          </Card>
          <Card
            style={{
              backgroundColor: "blue",
              borderRadius: "5px",
              height: "22%",
            }}
          >
            Hand
          </Card>
        </Space>
      </Card>
    </>
  );
}
