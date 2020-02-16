import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import React, { Component } from "react";

export default class StepIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.wizardRef = React.createRef();
  }

  render() {
    let { page, onClick } = this.props;
    return (
      <Col xs="3" className={cn(align.allCenter, align.noMarginPad)}>
        <a href={this.onClick}>
          <div
            className={cn(
              align.full,
              align.allCenter,
              align.noMarginPad,
              "stepindicator"
            )}
          >
            <p className={cn("stepindicator-num")}>{page}</p>
          </div>
        </a>
      </Col>
    );
  }
}
