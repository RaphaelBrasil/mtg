import Dnd from "./../components/dnd";
import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";

export default function Home() {
  return <Dnd />;
}

export const GetServerSideProps = async ({ query }) => {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } };
};
