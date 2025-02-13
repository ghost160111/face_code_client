import "./Main.scss";
import { PureComponent, ReactNode } from "react";
import Header from "./Header";
import Content from "./Content";

class Main extends PureComponent {
  render(): ReactNode {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

export default Main;
