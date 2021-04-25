import Dnd from "./../components/dnd";
import { resetServerContext } from "react-beautiful-dnd";

export default function Home() {
  return <Dnd />;
}

// Reseta o servidor, fazendo com que os componentes Styled e DnD funcionem
Home.getInitialProps = async () => {
  resetServerContext();
  return {};
};
