import React, { Component } from "react";

class Card extends Component {
  render() {
    let transformFactor = (window.innerWidth * 0.6) / 375;

    const style = {
      cardContainer: {
        flexGrow: 1,
        alignItems: "center",
        display: "flex"
      },
      card: {
        position: "relative",
        margin: "0 auto",
        width: 375,
        height: 215,
        fontFamily: "Muli, sans-serif",
        color: this.props.textColor === "dark" ? "rgba(0,0,0,0.9)" : "white",
        backgroundColor: this.props.color,
        borderRadius: 10,
        boxShadow: "0 0 2px 0 rgba(0,0,0,0.2)",
        overflow: "hidden",
        transform: `scale(${transformFactor})`
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
        left: 32,
        fontSize: 15,
        fontWeight: "bold",
        maxWidth: 155,
        textAlign: "left"
      },
      membershipPlan: {
        fontSize: 12,
        fontWeight: "normal"
      },
      bottomText: {
        position: "absolute",
        bottom: 20,
        left: 32,
        fontSize: 12,
        fontWeight: "normal",
        maxWidth: 155,
        textAlign: "left",
        lineHeight: 1.5
      },
      membershipNo: {
        fontWeight: "bold"
      },
      logo: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 32,
        margin: "auto 0",
        maxWidth: 140,
        height: "auto",
        display: "block"
      }
    };
    return (
      <div style={style.cardContainer}>
        <div style={style.card}>
          <div style={style.arc} />
          <div style={style.orgName}>
            {this.props.organization}
            <div style={style.membershipPlan}>{this.props.membershipPlan}</div>
          </div>
          <div style={style.bottomText}>
            <div style={style.membershipNo}>{this.props.membershipNo}</div>
            <div>{this.props.name}</div>
            <div>17 January 2020</div>
          </div>

          <img src={this.props.logo} style={style.logo} />
        </div>
      </div>
    );
  }
}

export default Card;
