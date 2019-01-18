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
        margin: 50
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="215"
          viewBox="0 0 375 215"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              fill={this.props.color}
              d="M9.39 213.999c-5.178 0-9.39-4.215-9.39-9.395V9.396C0 4.216 4.212 0 9.39 0h356.221C370.788 0 375 4.215 375 9.396v195.209c0 5.18-4.212 9.395-9.389 9.395H9.39v-.001z"
            />

            <path
              fill="#E1E8ED"
              fill-rule="nonzero"
              d="M365.135 1C370.023 1 374 4.977 374 9.865v194.557c0 4.888-3.977 8.865-8.865 8.865H9.865c-4.888 0-8.865-3.977-8.865-8.865V9.865C1 4.977 4.977 1 9.865 1h355.27zm0-1H9.865C4.439 0 0 4.439 0 9.865v194.557c0 5.426 4.439 9.865 9.865 9.865h355.271c5.426 0 9.865-4.439 9.865-9.865V9.865C375 4.439 370.561 0 365.135 0z"
            />
            <g>
              <path
                fill="#2F2E2D"
                d="M122.789 107.48c0 39.314-10.667 75.907-29.012 106.52H6.846A9.919 9.919 0 0 1 0 208.948V5.052A9.919 9.919 0 0 1 6.846 0h86.353c18.699 30.806 29.59 67.754 29.59 107.48z"
                opacity=".1"
              />
            </g>
          </g>
        </svg>
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
    );
  }
}

export default Card;
