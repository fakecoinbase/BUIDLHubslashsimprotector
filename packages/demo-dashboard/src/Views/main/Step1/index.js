import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, CardHeader, CardText } from "reactstrap";
import React from "react";
import InputField from "Components/Card/Input";
import { tryCall } from "Utils";
// import Button from "Components/Button/Coinbase";

export default class Main1 extends React.Component {
  
  
  render() {
    const {
      stateData,
      fieldChanged
    } = this.props;

    return (
      <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            {/* <span className={cn("font-weight-bold", "text-3")}>
              Customer Details
            </span> */}
            <CardHeader
              className={cn(align.full, "step-header", "card-header")}
            >
              <div
                className={cn(align.full, align.allCenter, align.noMarginPad)}
              >
                <span className={cn("font-weight-bold", "text-1")}>
                  Customer Details
                </span>
              </div>
            </CardHeader>
          </Col>
          <Col
            xs="12"
            className={cn(align.allCenter, align.noMarginPad)}
          >
            <div className={cn("step", align.full, align.topCenter, align.noMarginPad)}>
              
                <CardText>Activating SAFENET(c) for the client...</CardText>
              
                <CardText >Please confirm key user details.</CardText>
            
                <InputField
                  placeholder="Customer Wallet Address"
                  value={stateData.address || ""}
                  onChange={e => fieldChanged("address", e.target.value)}
                />
              
                <InputField
                  placeholder="Phone Number"
                  value={stateData.phoneNumber || ""}
                  onChange={e => fieldChanged("phoneNumber", e.target.value)}
                />
             </div>
             </Col>
        </Row>
      </div>
    );
  }
}
