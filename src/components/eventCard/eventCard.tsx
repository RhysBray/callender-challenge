import styles from "./eventCard.module.scss";

import * as React from "react";

export interface IProps {}

export interface IState {}

class EventCard extends React.Component<IProps, IState> {
  public render() {
    return (
      <section className={styles["event-card"]}>
        <h2 className={styles.title}>Event Title</h2>
        <article className={styles.description}>
          Description: words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words
        </article>
        <p className={styles.dates}>Dates: start to end</p>
      </section>
    );
  }
}

export default EventCard;
