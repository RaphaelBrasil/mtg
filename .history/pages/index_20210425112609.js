import "antd/dist/antd.css";
import { Card, Avatar, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Layout style={{ backgroundColor: "gray" }}>
        <Sider style={{ backgroundColor: "blue" }}>Sider</Sider>
        <Layout>
          <Header style={{ backgroundColor: "yellow" }}>Header</Header>
          <Content style={{ backgroundColor: "violet" }}>Content</Content>
          <Footer style={{ backgroundColor: "blueviolet" }}>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}
