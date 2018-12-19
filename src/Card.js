import React, { Component } from "react";
import Tilt from "react-tilt";

class Card extends Component {
  render() {
    const style = {
      card: {
        background: this.props.color,
        overflow: "Hidden"
      },
      sheen: {
        backgroundImage:
          "linear-gradient(315deg, rgba(255,255,255,0.3), transparent)",
        width: "100%",
        height: "100%"
      },
      qrcode: {
        width: "100%",
        height: "auto",
        padding: 40,
        borderRadius: 10
      }
    };
    return (
      <Tilt
        className="Tilt"
        options={{ max: 15, scale: 1 }}
        style={{ height: 270, width: 428 }}
      >
        <div className="Tilt-inner">
          <div style={style.card} className={"card theme" + this.props.theme}>
            <div style={style.sheen}>
              <svg
                width="428"
                height="270"
                viewBox="0 0 428 270"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 75C52.6894 75 80 47.6894 80 14C80 9.1825 79.4415 4.49543 78.3858 0H428V270H0V71.9829C5.97944 73.941 12.3661 75 19 75Z"
                  fill={this.props.secondaryColor}
                />

                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M428 61.8756C329.428 88.9878 252.891 169.299 231.2 270H428V61.8756Z"
                  fill="rgba(0,0,0,0.2)"
                />
              </svg>

              <span className="name" contentEditable="true">
                {this.props.name}
              </span>
              {this.props.membershipNo && (
                <span className="membership-no" contentEditable="true">
                  M9381048
                </span>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    );
  }
}

export default Card;
