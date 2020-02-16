import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, CardText, FormGroup } from "reactstrap";
import React from "react";
import InputField from "Components/Card/Input";
import Button from "Components/Button/Coinbase";

const CoinbaseStep2 = (props) => {
  return (
    <div className={cn("step", "step2", align.full, align.allCenter, align.noMarginPad)}>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <span className={cn("font-weight-bold", "text-1-5")}>
            Forgot your password?
          </span>
        </Col>
        <FormGroup className={cn(align.full, align.noMarginPad)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <InputField className={cn(align.full, "px-3")} name="email" placeholder="email" />
          </Col>
          <Col xs="12" className={cn(align.leftCenter, "p-3", align.noMarginPad)}>
            <Button size="sm" onClick={props.reset}>RESET PASSWORD</Button>
          </Col>
        </FormGroup>
        <Col xs="12" className={cn(align.allCenter, "mt-2")}>
          <p>Don't have an account yet? Sign up.</p>
        </Col>
        <Col xs="12" className={cn(align.allCenter, "mt-1")}>
          <p>Don't have an account yet? Sign in.</p>
        </Col>
      </Row>
    </div>
  );
};

export default CoinbaseStep2;
