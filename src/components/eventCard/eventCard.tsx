import styles from "./eventCard.module.scss";
import { ICalendarEvents } from "../../reducers/calendarReducer";
import * as React from "react";

export interface IProps {
  event: ICalendarEvents;
}

export interface IState {
  isSelected: boolean;
  isHidden: boolean;
}

class EventCard extends React.Component<IProps, IState> {
  public state = { isSelected: false, isHidden: true };
  public render() {
    const selectAndUnselect = () => {
      this.setState({ isSelected: !this.state.isSelected });
    };
    const ShowMoreOrLess = () => {
      this.setState({ isHidden: !this.state.isHidden });
    };
    const selected = this.state.isSelected ? styles.selected : "";
    const hidden = this.state.isHidden ? styles.hidden : "";
    const larger = this.state.isHidden ? styles.larger : styles.title;
    const dateStart = this.props.event.start.date
      ? this.props.event.start.date
      : this.props.event.start.dateTime
      ? this.props.event.start.dateTime.substring(2, 10)
      : "No dates to show";

    const dateEnd = this.props.event.end.date
      ? this.props.event.end.date
      : this.props.event.end.dateTime
      ? this.props.event.end.dateTime.substring(2, 10)
      : "No dates to show";
    console.log(dateStart);
    return (
      <>
        <section className={styles["event-card"]}>
          <div
            className={`${styles["event-selector"]}  ${selected}`}
            onClick={selectAndUnselect}
          />
          <article className={styles.contents} onClick={ShowMoreOrLess}>
            <h2 className={larger}>{this.props.event.organizer.displayName}</h2>
            <article className={`${styles.description} ${hidden}`}>
              {this.props.event.summary}
            </article>
            <p className={`${styles.dates} ${hidden}`}>
              {dateStart + " to " + dateEnd}
            </p>
          </article>
        </section>
      </>
    );
  }
}

export default EventCard;
