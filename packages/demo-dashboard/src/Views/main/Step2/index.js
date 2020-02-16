import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, CardText, CardHeader } from "reactstrap";
import React from "react";
import InputField from "Components/Card/Input";
import { tryCall } from "Utils";
// import Button from "Components/Button/Coinbase";

export default class Main2 extends React.Component {
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
            <CardHeader
              className={cn(align.full, "step-header", "card-header")}
            >
              <div
                className={cn(align.full, align.allCenter, align.noMarginPad)}
              >
                <span className={cn("font-weight-bold", "text-1")}>
                  Confirm Details
                </span>
              </div>
            </CardHeader>
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <CardText className={cn(align.topLeft, "mt-5")}>
              Thank you, confirmed. Inform the customer to check their emails.
            </CardText>
          </Col>
        </Row>
      </div>
    );
  }
}
