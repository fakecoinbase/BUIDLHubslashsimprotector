import React from "react";
import * as align from "Constants/alignments";
import cn from "classnames";
// import logo from "../Assets/images/bhub-logo-hex-gold.svg";

export default class LogoBlock extends React.Component {
  render() {
    const { light } = this.props;
    let bColor = light ? "text-light" : "text-black";

    let brand = (
      <div
        onClick={this.goHome}
        className={cn(
          align.justLeft,
          align.topLeft,
          "flex-column",
          "pl-2",
          "clickable",

          align.noMarginPad
        )}
      >
        <div className={cn(align.leftLeft, align.full, align.noMarginPad)}>
          <span
            className={cn(
              align.rightCenter,
              align.noMarginPad,
              "font-weight-bold",
              "logoblocklandingfont",
              "logofontspacing",
              "logofontcolorcoinbase"
            )}
            style={{ fontSize: "25px" }}
          >
            Coinbase
          </span>
        </div>
      </div>
    );
    return (
      <span
        className={cn(
          "bhub-brand",
          align.leftCenter,
          align.full,
          align.noMarginPad
        )}
        href="#"
        onClick={this.props.goHome}
      >
        {brand}
      </span>
    );
  }
}
