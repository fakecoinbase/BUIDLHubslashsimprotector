import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, CardHeader, CardText } from "reactstrap";
import React from "react";
import InputField from "Components/Card/Input";
import { tryCall } from "Utils";
// import Button from "Components/Button/Coinbase";

export default class Main1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFn: null,
      data: {},
      dirty: false,
      loading: false
    };
  }
  register = () => {
    return new Promise((done, err) => {
      this.setState(
        {
          loading: true
        },
        async () => {
          try {
            let rec = await tryCall(this.props.sendTxn, this.state.data);
            console.log("RECEIPT", rec);
            done();
          } catch (e) {
            console.log(e);
          }
          this.setState({
            loading: false
          });
        }
      );
    });
  };

  handleNextStep = idx => {
    switch (idx) {
      case 0: {
        return this.register();
        break;
      }
    }
  };

  fieldChanged = (fld, val) => {
    this.setState({
      data: {
        ...this.state.data,
        [fld]: val
      }
    });
  };
  render() {
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
            className={cn(align.allCenter, align.noMarginPad, "mt-3")}
          >
            <CardText>Activating SAFENET(c) for the client...</CardText>
          </Col>
          <Col
            xs="12"
            className={cn(align.allCenter, align.noMarginPad, "mb-2")}
          >
            <CardText>Please confirm key user details.</CardText>
          </Col>

          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <InputField
              placeholder="Customer Wallet Address"
              value={this.state.data.address || ""}
              onChange={e => this.fieldChanged("address", e.target.value)}
            />
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <InputField
              placeholder="Phone Number"
              value={this.state.data.phoneNumber || ""}
              onChange={e => this.fieldChanged("phoneNumber", e.target.value)}
            />
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}></Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}></Col>
        </Row>
      </div>
    );
  }
}
