import "antd/dist/antd.css";
import { Card, Avatar, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Layout style={{ backgroundColor: "blueviolet" }}>
        <Sider style={{ backgroundColor: "greenyellow" }}>Sider</Sider>
        <Layout>
          <Header style={{ backgroundColor: "yellowgreen" }}>Header</Header>
          <Content style={{ backgroundColor: "blueviolet" }}>Content</Content>
          <Footer style={{ backgroundColor: "blueviolet" }}>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}
