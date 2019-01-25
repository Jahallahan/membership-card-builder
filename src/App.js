import React, { Component } from "react";
import Card from "./Card";
import Config from "./Config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jack Hallahan",
      membershipPlan: "Gold plan",
      membershipNo: "M12345678",
      organization: "Organization name",
      theme: 1,
      color: "#349fe4",
      textColor: "light",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
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

  updateName(name) {
    this.setState({
      name: name
    });
  }

  updateOrganization(organization) {
    this.setState({
      organization: organization
    });
  }

  updateMembershipNo(membershipNo) {
    this.setState({
      membershipNo: membershipNo
    });
  }

  updateMembershipPlan(membershipPlan) {
    this.setState({
      membershipPlan: membershipPlan
    });
  }

  updateLogo(logo) {
    this.setState({
      logo: logo
    });
  }

  updateTextColor(textColor) {
    this.setState({
      textColor: textColor
    });
  }

  render() {
    const pageStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      flexDirection: "column"
    };

    return (
      <div className="App" style={pageStyle}>
        <Config
          updateTheme={this.updateTheme.bind(this)}
          updateColor={this.updateColor.bind(this)}
          updateName={this.updateName.bind(this)}
          updateMembershipNo={this.updateMembershipNo.bind(this)}
          updateMembershipPlan={this.updateMembershipPlan.bind(this)}
          updateOrganization={this.updateOrganization.bind(this)}
          updateLogo={this.updateLogo.bind(this)}
          updateTextColor={this.updateTextColor.bind(this)}
          color={this.state.color}
          name={this.state.name}
          membershipPlan={this.state.membershipPlan}
          membershipNo={this.state.membershipNo}
          organization={this.state.organization}
          logo={this.state.logo}
          textColor={this.state.textColor}
        />
        <Card
          name={this.state.name}
          membershipPlan={this.state.membershipPlan}
          color={this.state.color}
          membershipNo={this.state.membershipNo}
          organization={this.state.organization}
          logo={this.state.logo}
          textColor={this.state.textColor}
        />
      </div>
    );
  }
}

export default App;
