import styles from "./eventCardContainer.module.scss";
import EventCard from "../../components/eventCard/";

import * as React from "react";

export interface IProps {}

export interface IState {}

class EventCardContainer extends React.Component<IProps, IState> {
  public render() {
    return <EventCard />;
  }
}

export default EventCardContainer;
