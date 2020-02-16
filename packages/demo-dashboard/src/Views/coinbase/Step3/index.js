import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, CardText, FormGroup } from "reactstrap";
import React from "react";
// import InputField from "Components/Card/Input";
import Button from "Components/Button/Progress";

const hours = 0;

const CoinbaseStep3 = () => {
  return (
    <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <span className={cn("font-weight-bold", "text-3")}>Freeze</span>
        </Col>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <p>Account frozen for {hours} hours.</p>
        </Col>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <p>
            Please contact a Coinbase representative, and have required
            documentation available.
          </p>
        </Col>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <p>Support Phone ###</p>
        </Col>

        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <p>Support Email</p>
        </Col>

        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <Col xs="4" className={cn(align.allCenter, align.noMarginPad)}>
            <Button>Contact</Button>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default CoinbaseStep3;
