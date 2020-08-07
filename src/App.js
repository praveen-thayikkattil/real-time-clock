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

    let seconds = this.state.currentLocalTime.format("ss");
    let secondsInDegrees = (seconds * 60) / 90;
    let minutes = this.state.currentLocalTime.format("mm");
    let hours = this.state.currentLocalTime.format("hh");

    return (
      <div className="App">
        <header className="App-header">
          <div className="app-logo-wrap">
            <div className="clock-outer-ring"></div>
            <div className="clock-inner-ring"></div>

            <img src={logo} className="App-logo" alt="logo" />

            <div className="clock-needles-wrap">
              <div
                className="second-hand-needle"
                style={{ transform: `rotate( ${secondsInDegrees}deg )` }}
              ></div>
              <div className="minute-hand-needle"></div>
              <div className="hour-hand-needle"></div>
            </div>
          </div>

          <p>{hours} hours</p>
          <p>{minutes} minutes</p>
          <p>{seconds} seconds</p>

          <p>{matchTimeFormatted}</p>
        </header>
      </div>
    );
  }
}

export default App;
