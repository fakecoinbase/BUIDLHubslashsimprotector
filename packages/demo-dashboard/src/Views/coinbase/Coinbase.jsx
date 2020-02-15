import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, Button } from "reactstrap";
import React, { Component } from "react";
import QRReader from "Components/QRReader";
import Navigation from "Components/Navbar";
import CardView from "Components/Card";

export default class MainView extends Component {
  /***
       * <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                              <QRReader onScan={console.log} onError={console.log} />
                          </Col>
                      </Row>
       */
  render() {
    return (
      <div
        className={cn(
          align.full,
          align.topCenter,
          align.noMarginPad,
          "coinbase-bg"
        )}
      >
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <Navigation />
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <CardView
              header="Welcome"
              text="Coinbase..."
              progressText="Next Step"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
