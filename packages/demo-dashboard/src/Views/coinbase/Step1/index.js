import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, CardText } from "reactstrap";
import React from "react";
import InputField from "Components/Card/Input";
import Button from "Components/Button/Coinbase";

const CoinbaseStep1 = () => {
  return (
    <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <span className={cn("font-weight-bold", "text-3")}>
            Sign into Coinbase
          </span>
        </Col>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <InputField name="email" placeholder="email" />
        </Col>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <InputField name="password" placeholder="password" />
        </Col>
        <Col xs="12" className={cn(align.bottomRight, "mt-3", "mr-5")}>
          <Button>SIGN IN</Button>
        </Col>
        <Col xs="12" className={cn(align.allCenter, "mt-3")}>
          <Col xs="4" className={cn(align.allCenter, align.noMarginPad)}>
            <CardText>Forgot Password?</CardText>
          </Col>
          <Col xs="4" className={cn(align.allCenter, align.noMarginPad)}>
            <CardText>Don't have an account?</CardText>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default CoinbaseStep1;
