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

export interface IState {}

class EventCardContainer extends React.Component<
  IOwnProps & IStateProps,
  IState
> {
  public componentDidMount = () => {
    this.props.fetchCalendar();
  };
  public render() {
    return (
      <>
        {this.props.calendarEvents.map((event, index) => (
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
