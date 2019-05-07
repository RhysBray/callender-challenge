import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";
import HeaderContainer from "./containers/headerContainer";
import EventCardContainer from "./containers/eventCardContainer";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <header>
          <HeaderContainer />
        </header>
        <main className="main">
          <EventCardContainer />
        </main>
      </Provider>
    );
  }
}

export default App;
