import cn from "classnames";
import * as align from "Constants/alignments";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
import React, { Component } from "react";
import QRReader from "Components/QRReader";
import Navigation from "Components/Navbar";
// import CardView from "Components/Card";
import InputField from "Components/Card/Input";
import StepWizard from "Components/StepWizard";
import ButtonConfirm from "Components/Button/Confirm";
import ButtonReject from "Components/Button/Reject";

export default class MainView extends Component {
  /***
     * <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                            <QRReader onScan={console.log} onError={console.log} />
                        </Col>
                    </Row>
     */

  constructor(props) {
    super(props);
    this.state = {
      selectedFn: null,
      paramData: [],
      dirty: false,
      loading: false
    };
  }

  render() {
    const { functions } = this.props;

    let dirty = this.state.dirty;

    let steps = [
      {
        title: "Activation",
        dirty
      },
      {
        title: "User Details",
        dirty
      },
      {
        title: "Confirm Details"
      }
    ];
    return (
      <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <Navigation />
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <StepWizard stepMeta={steps}>
              {/* STEP 1 */}
              <div
                className={cn(align.full, align.allCenter, align.noMarginPad)}
              >
                <Row
                  className={cn(align.full, align.noMarginPad, align.allCenter)}
                >
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <span className={cn("font-weight-bold", "text-3")}>
                      Activation
                    </span>
                  </Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <CardText className={cn(align.topLeft, "mt-5")}>
                      Thank you for activating SAFENET(c).
                    </CardText>
                  </Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <CardText className={cn(align.topLeft, "my-2")}>
                      0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208
                    </CardText>
                  </Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <CardText className={cn(align.topLeft, "my-2")}>
                      One more step required.
                    </CardText>
                  </Col>
                </Row>
              </div>
              {/* STEP 2 */}
              <div
                className={cn(align.full, align.allCenter, align.noMarginPad)}
              >
                <Row
                  className={cn(align.full, align.noMarginPad, align.allCenter)}
                >
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <span className={cn("font-weight-bold", "text-3")}>
                      Customer Details
                    </span>
                  </Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <InputField label="some label" placeholder="SIM ID" />
                  </Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <InputField label="some label" placeholder="Phone Number" />
                  </Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  ></Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <Row
                      className={cn(
                        align.full,
                        align.noMarginPad,
                        align.allCenter
                      )}
                    >
                      <Col
                        xs="6"
                        className={cn(align.allCenter, align.noMarginPad)}
                      >
                        <ButtonConfirm>Confirm</ButtonConfirm>
                      </Col>
                      <Col
                        xs="6"
                        className={cn(align.allCenter, align.noMarginPad)}
                      >
                        <ButtonReject>Reject</ButtonReject>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              {/* STEP 3 */}
              <div
                className={cn(align.full, align.allCenter, align.noMarginPad)}
              >
                <Row
                  className={cn(align.full, align.noMarginPad, align.allCenter)}
                >
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <span className={cn("font-weight-bold", "text-3")}>
                      Customer Details
                    </span>
                  </Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <CardText className={cn(align.topLeft, "my-2")}>
                      Thank you, confirmed.
                    </CardText>
                  </Col>
                </Row>
              </div>
            </StepWizard>
          </Col>
        </Row>
      </div>
    );
  }
}
