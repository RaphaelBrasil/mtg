import Dnd from "./../components/dnd";
import { GetServerSideProps } from "next";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";

export default function Home() {
  return <Dnd />;
}

Home.getInitialProps = async () => {
  resetServerContext();
  return {};
};
