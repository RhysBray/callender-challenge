import styles from "./eventCard.module.scss";
import { ICalendarEvents } from "../../reducers/calendarReducer";
import * as React from "react";

export interface IProps {
  event: ICalendarEvents;
}

export interface IState {
  isSelected: boolean;
}

class EventCard extends React.Component<IProps, IState> {
  public state = { isSelected: false };
  public render() {
    const handleClick = () => {
      this.setState({ isSelected: !this.state.isSelected });
    };
    let selected = "";
    this.state.isSelected ? (selected = styles.selected) : (selected = "");
    return (
      <section
        className={`${styles["event-card"]} ${selected}`}
        onClick={handleClick}
      >
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
