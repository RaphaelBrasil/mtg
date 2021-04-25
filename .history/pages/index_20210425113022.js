import "antd/dist/antd.css";
import { Card, Avatar, Layout, Divider } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Card style={{ backgroundColor: "gray" }} />
      <Divider />
      <Card />
    </>
  );
}
