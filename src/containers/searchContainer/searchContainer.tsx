import * as React from "react";
import styles from "./searchContainer.module.scss";
import Search from "../../components/search";
import { connect } from "react-redux";
import { IStore } from "../../reducers";
import { onSearch, onDateSelect } from "../../reducers/calendarReducer";

export interface IOwnProps {}

export interface IStateProps {
  onSearch: (searchText: string) => void;
  onDateSelect: (startDate: string, endDate: string) => void;
}

export interface IState {}

class SearchContainer extends React.Component<IOwnProps & IStateProps, IState> {
  public render() {
    return (
      <div className={styles["search-bar"]}>
        <Search
          onSearch={this.props.onSearch}
          onDateSelect={this.props.onDateSelect}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {};
};

const mapDispatchToProps = { onSearch, onDateSelect };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
