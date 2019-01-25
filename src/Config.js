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

  updateName(event) {
    this.props.updateName(event.target.value);
  }

  updateOrganization(event) {
    this.props.updateOrganization(event.target.value);
  }

  updateMembershipNo(event) {
    this.props.updateMembershipNo(event.target.value);
  }

  updateMembershipPlan(event) {
    this.props.updateMembershipPlan(event.target.value);
  }

  updateLogo(event) {
    this.props.updateLogo(event.target.value);
  }

  updateTextColor(event) {
    this.props.updateTextColor(event.target.value);
    console.log("color changed");
  }

  render() {
    const configStyle = {
      flexGrow: 0
    };
    return (
      <div className="config" style={configStyle}>
        <input
          type="text"
          onChange={this.updateName.bind(this)}
          value={this.props.name}
        />
        <input
          type="text"
          onChange={this.updateOrganization.bind(this)}
          value={this.props.organization}
        />

        <input
          type="text"
          onChange={this.updateMembershipNo.bind(this)}
          value={this.props.membershipNo}
        />
        <input
          type="text"
          onChange={this.updateMembershipPlan.bind(this)}
          value={this.props.membershipPlan}
        />
        <input
          type="text"
          onChange={this.updateLogo.bind(this)}
          value={this.props.logo}
        />

        <input
          type="color"
          onChange={this.updateColor.bind(this)}
          value={this.props.color}
        />
        <select
          onChange={this.updateTextColor.bind(this)}
          value={this.props.textColor}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    );
  }
}

export default App;
