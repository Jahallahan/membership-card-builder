import React, { Component } from "react";

class Card extends Component {
  render() {
    const style = {
      card: {
        position: "relative",
        width: 375,
        height: 215,
        fontFamily: "Muli, sans-serif",
        color: this.props.textColor === "dark" ? "rgba(0,0,0,0.9)" : "white",
        margin: 50,
        backgroundColor: this.props.color,
        borderRadius: 10,
        boxShadow: "0 0 2px 0 rgba(0,0,0,0.2)",
        overflow: "hidden"
      },
      arc: {
        width: 590,
        height: 490,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: "50%",
        left: -467,
        top: -138
      },
      orgName: {
        position: "absolute",
        top: 24,
        right: 32,
        fontSize: 15,
        fontWeight: "bold",
        maxWidth: 160,
        textAlign: "right"
      },
      membershipPlan: {
        fontSize: 12,
        fontWeight: "normal"
      },
      bottomText: {
        position: "absolute",
        bottom: 20,
        right: 32,
        fontSize: 12,
        fontWeight: "normal",
        maxWidth: 160,
        textAlign: "right",
        lineHeight: 1.5
      },
      membershipNo: {
        fontWeight: "bold"
      },
      logo: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 32,
        margin: "auto 0",
        maxWidth: 140,
        height: "auto",
        display: "block"
      }
    };
    return (
      <div style={style.card}>
        <div style={style.orgName}>
          {this.props.organization}
          <div style={style.membershipPlan}>{this.props.membershipPlan}</div>
        </div>
        <div style={style.bottomText}>
          <div style={style.membershipNo}>{this.props.membershipNo}</div>
          <div>{this.props.name}</div>
          <div>17 January 2020</div>
        </div>
        <div style={style.arc} />
        <img src={this.props.logo} style={style.logo} />
      </div>
    );
  }
}

export default Card;
