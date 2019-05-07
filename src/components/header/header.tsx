import styles from "./header.module.scss";

import * as React from "react";

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  public render() {
    return <h1 className={styles.h1}>Event Tracker</h1>;
  }
}

export default Header;
