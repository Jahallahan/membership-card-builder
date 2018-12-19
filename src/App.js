import React, { Component } from "react";
import Card from "./Card";
import Config from "./Config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jack Hallahan",
      membershipPlan: "Gold plan",
      theme: 1,
      color: "#349fe4",
      secondaryColor: "#444444",
      membershipNo: true
    };
  }

  updateTheme(selectedTheme) {
    this.setState({
      theme: selectedTheme
    });
  }

  updateColor(selectedColor) {
    this.setState({
      color: selectedColor
    });
  }

  updateSecondaryColor(selectedColor) {
    this.setState({
      secondaryColor: selectedColor
    });
  }

  render() {
    return (
      <div className="App">
        <Config
          updateTheme={this.updateTheme.bind(this)}
          updateColor={this.updateColor.bind(this)}
          updateSecondaryColor={this.updateSecondaryColor.bind(this)}
          color={this.state.color}
          secondaryColor={this.state.secondaryColor}
        />
        <Card
          name={this.state.name}
          membershipPlan={this.state.membershipPlan}
          theme={this.state.theme}
          color={this.state.color}
          secondaryColor={this.state.secondaryColor}
          membershipNo={this.state.membershipNo}
        />
      </div>
    );
  }
}

export default App;
