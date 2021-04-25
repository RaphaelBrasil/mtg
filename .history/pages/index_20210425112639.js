import "antd/dist/antd.css";
import { Card, Avatar, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <Layout style={{ backgroundColor: "gray" }}>
      <Sider style={{ backgroundColor: "blue" }}>Sider</Sider>
      <Layout>
        <Header style={{ backgroundColor: "green" }}>Header</Header>
        <Content style={{ backgroundColor: "white" }}>Content</Content>
        <Footer style={{ backgroundColor: "red" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
}
