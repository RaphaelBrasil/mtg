import "antd/dist/antd.css";
import { Card, Avatar, Layout, Divider } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Card style={{ backgroundColor: "gray" }}>P2</Card>
      <Divider />
      <Card style={{ backgroundColor: "gray" }}>P1</Card>
    </>
  );
}
