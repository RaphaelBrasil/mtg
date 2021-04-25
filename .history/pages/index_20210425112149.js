import "antd/dist/antd.css";
import { Card, Avatar, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}
