import moment from "moment";
import React, { Component } from "react";
import logo from "./clockface.png";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalClocks: 1,
      currentLocalTime: moment.utc(moment()).local(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ currentLocalTime: moment.utc(moment()).local() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let matchTimeFormatted = this.state.currentLocalTime.format(
      "hh:mm:ss | LTS"
    );

    return (
      <div className="App">
        <header className="App-header">
          <div className="app-logo-wrap">
            <div className="clock-outer-ring"></div>
            <div className="clock-inner-ring"></div>

            <img src={logo} className="App-logo" alt="logo" />

            <div className="clock-needles-wrap">
              <div className="second-hand-needle"></div>
              <div className="minute-hand-needle"></div>
              <div className="hour-hand-needle"></div>
            </div>
          </div>

          <p>
            An <code>RTC Clock App</code> with ability to add multiple clocks
            for various timezones.
          </p>

          <p>{matchTimeFormatted}</p>

          <p>
            Add New RTC Clock for a different time zone, for example canada :D
          </p>

          <button href="instagram.com" className="App-action-button">
            Add New RTC Clock
          </button>
        </header>
      </div>
    );
  }
}

export default App;
