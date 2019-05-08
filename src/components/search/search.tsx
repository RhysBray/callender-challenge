import * as React from "react";
import styles from "./search.module.scss";

export interface IProps {
  onSearch: (searchText: string) => void;
  onDateSelect: (startDate: string, endDate: string) => void;
}

export interface IState {
  startDate: string;
  endDate: string;
}

class Search extends React.Component<IProps, IState> {
  public state = { startDate: "", endDate: "" };
  public render() {
    this.props.onDateSelect(this.state.startDate, this.state.endDate);
    return (
      <div className={styles["search-container"]}>
        <div>
          <label htmlFor="search" className={styles.label}>
            Search Here:
          </label>
          <input
            name="search"
            type="text"
            className={styles["search-box"]}
            placeholder="..."
            onChange={event => this.props.onSearch(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="start-date" className={styles.label}>
            Show events from:
          </label>
          <input
            onChange={event =>
              this.setState({ startDate: event.currentTarget.value })
            }
            name="start-date"
            type="date"
            className={styles["date-picker"]}
          />
          <label htmlFor="end-date" className={styles.label}>
            To:
          </label>
          <input
            onChange={event =>
              this.setState({ endDate: event.currentTarget.value })
            }
            name="end-date"
            type="date"
            className={styles["date-picker"]}
          />
        </div>
      </div>
    );
  }
}

export default Search;
