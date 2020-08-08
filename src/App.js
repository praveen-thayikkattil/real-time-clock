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
    let timeFormatted = this.state.currentLocalTime.format("LTS");

    let seconds = this.state.currentLocalTime.format("ss");
    let secondsInDegrees = (seconds / 60) * 360;
    let secondsInDegreesAdjusted = secondsInDegrees + 0;

    let minutes = this.state.currentLocalTime.format("mm");
    let minutesInDegrees = (minutes / 60) * 360;

    let hours = this.state.currentLocalTime.format("hh");
    let hoursInDegrees = (hours / 12) * 360;

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
                style={{
                  transform: `rotate( ${secondsInDegreesAdjusted}deg )`,
                }}
              ></div>
              <div
                className="minute-hand-needle"
                style={{
                  transform: `rotate( ${minutesInDegrees}deg )`,
                }}
              ></div>
              <div
                className="hour-hand-needle"
                style={{
                  transform: `rotate( ${hoursInDegrees}deg )`,
                }}
              ></div>
            </div>
          </div>

          <p>{timeFormatted}</p>
        </header>
      </div>
    );
  }
}

export default App;
