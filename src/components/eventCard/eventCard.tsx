import styles from "./eventCard.module.scss";
import { ICalendarEvents } from "../../reducers/calendarReducer";
import * as React from "react";

export interface IProps {
  // event: IItems;
  event: ICalendarEvents;
}

export interface IState {}

class EventCard extends React.Component<IProps, IState> {
  public render() {
    return (
      <section className={styles["event-card"]}>
        <h2 className={styles.title}>
          {this.props.event.organizer.displayName}
        </h2>
        <article className={styles.description}>
          {this.props.event.summary}
        </article>
        <p className={styles.dates}>
          {"From: " +
            this.props.event.start.date +
            " to: " +
            this.props.event.end.date}
        </p>
      </section>
    );
  }
}

export default EventCard;
