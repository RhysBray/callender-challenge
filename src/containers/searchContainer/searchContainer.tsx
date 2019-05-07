import * as React from "react";
import styles from "./searchContainer.module.scss";
import Search from "../../components/search";
import { connect } from "react-redux";
import { IStore } from "../../reducers";
import { onSearch } from "../../reducers/calendarReducer";

export interface IOwnProps {}

export interface IStateProps {
  onSearch: (searchText: string) => void;
}

export interface IState {}

class SearchContainer extends React.Component<IOwnProps & IStateProps, IState> {
  public render() {
    return (
      <div className={styles["search-bar"]}>
        <Search onSearch={this.props.onSearch} />
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {};
};

const mapDispatchToProps = { onSearch };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
