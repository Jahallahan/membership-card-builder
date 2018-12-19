import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateTheme(event) {
    this.props.updateTheme(event.target.value);
  }

  updateColor(event) {
    this.props.updateColor(event.target.value);
    this.setState({ color: event.target.value });
  }

  updateSecondaryColor(event) {
    this.props.updateSecondaryColor(event.target.value);
    this.setState({ secondaryColor: event.target.value });
  }

  render() {
    return (
      <div className="config">
        <select onChange={this.updateTheme.bind(this)}>
          <option value="1">Classic</option>
          <option value="2">Cool</option>
          <option value="3">Sophisticated</option>
          <option value="4">Warm</option>
        </select>
        <input
          type="color"
          onChange={this.updateColor.bind(this)}
          value={this.props.color}
        />
        <input
          type="color"
          onChange={this.updateSecondaryColor.bind(this)}
          value={this.props.secondaryColor}
        />
      </div>
    );
  }
}

export default App;
