import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import React from "react";
import InputField from "Components/Card/Input";
import Button from "Components/Button/Coinbase";

const CoinbaseStep1 = (props) => {
  return (
    <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="12" className={cn(align.allCenter, "py-3", align.noMarginPad)}>
          <span className={cn("font-weight-bold", "text-light", "text-1-5")}>
            Sign into Coinbase
          </span>
        </Col>
      </Row>

      <div className={cn("step", "step1", align.full, align.topCenter, align.noMarginPad)}>
        
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>

          <Col xs="12" className={cn("step1", align.allCenter, align.noMarginPad)}>
            <InputField className={cn(align.full, "px-3")} name="email" placeholder="email" />
          </Col>
        </Row>

        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <InputField className={cn(align.full, "px-3")} name="password" placeholder="password" />
          </Col>
        </Row>

        <Row className={cn(align.full, "p-3", align.noMarginPad, align.allCenter)}>
          <Col xs="9" className={cn(align.leftCenter, align.noMarginPad)}>
            <input type="checkbox" />
            <span className={cn('font-weight-light', 'text-sz-tiny', "text-muted", "pl-1")}>
              keep me signed in on this computer
            </span>
          </Col>
          <Col xs="3" className={cn(align.rightCenter, align.noMarginPad)}>
            <Button small>SIGN IN</Button>
          </Col>
        </Row>
        </div>

        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          
          <Col xs="12" className={cn(align.allCenter, "mt-3")}>
            <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
              <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                
                <Col xs="6" className={cn(align.leftCenter, align.noMarginPad)}>
                  <span className={cn("clickable", 'font-weight-light', "text-light", 'text-1')}
                      onClick={props.forgot}>
                    Forgot password?
                  </span>
                </Col>
                <Col xs="6" className={cn(align.rightCenter, align.noMarginPad)}>
                  <span className={cn("clickable", 'font-weight-light', "text-light", 'text-1')}
                      >
                    Don't have an account?
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
          </Row>
    </div>
  );
};

export default CoinbaseStep1;
