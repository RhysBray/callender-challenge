import * as React from "react";
import styles from "./search.module.scss";

export interface IProps {
  onSearch: (searchText: string) => void;
}

export interface IState {}

class Search extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className={styles["search-container"]}>
        <label htmlFor="search" className={styles.label}>
          Search Here:
        </label>
        <input
          name="search"
          type="text"
          className={styles["search-box"]}
          placeholder="..."
          onChange={event => this.props.onSearch(event.currentTarget.value)}
        />
      </div>
    );
  }
}

export default Search;
