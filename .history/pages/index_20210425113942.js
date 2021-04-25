import "antd/dist/antd.css";
import { Card, Avatar, Layout, Divider } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Card
        style={{
          backgroundColor: "gray",
          borderRadius: "5px",
          minHeight: "50vh",
        }}
      >
        P2
      </Card>
      <Divider />
      <Card style={{ backgroundColor: "gray", borderRadius: "5px" }}>P1</Card>
    </>
  );
}
