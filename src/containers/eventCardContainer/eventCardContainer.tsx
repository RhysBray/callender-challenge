import styles from "./eventCardContainer.module.scss";
import EventCard from "../../components/eventCard";
import { connect } from "react-redux";
import { IStore } from "../../reducers";
import { fetchCalendar, ICalendarEvents } from "../../reducers/calendarReducer";

import * as React from "react";

export interface IOwnProps {}

export interface IStateProps {
  calendarEvents: ICalendarEvents[];
  fetchCalendar: () => void;
  searchText: string;
}

export interface IState {
  filteredList: ICalendarEvents[];
}

class EventCardContainer extends React.Component<
  IOwnProps & IStateProps,
  IState
> {
  public state = { searchText: "", filteredList: [] };
  public componentDidMount = () => {
    this.props.fetchCalendar();
  };
  //taken from toptrumps to get working
  public componentDidUpdate(prevProps: IOwnProps & IStateProps) {
    if (this.props !== prevProps) {
      this.setState({
        filteredList: this.props.calendarEvents.filter(this.filterEvents)
      });
    }
  }
  public filterEvents = (event: ICalendarEvents) => {
    const ar = Object.values(event).filter(str => {
      if (typeof str === "string") {
        return str.toLowerCase().includes(this.props.searchText.toLowerCase());
      }
      return false;
    });
    return ar.length > 0 ? true : false;
  };
  public render() {
    return (
      <>
        {this.state.filteredList.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {
    calendarEvents: state.calendar.calendarEvents,
    searchText: state.calendar.searchText
  };
};

const mapDispatchToProps = { fetchCalendar };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCardContainer);
