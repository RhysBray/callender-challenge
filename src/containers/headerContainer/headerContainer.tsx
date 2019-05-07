import styles from "./headerContainer.module.scss";
import Header from "../../components/header";

import * as React from "react";

export interface IProps {}

export interface IState {}

class HeaderContainer extends React.Component<IProps, IState> {
  public render() {
    return <Header />;
  }
}

export default HeaderContainer;
