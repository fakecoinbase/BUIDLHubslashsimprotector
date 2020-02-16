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
import Loading from "Components/Loading";
import React, { Component } from "react";
import QRReader from "Components/QRReader";
import Navigation from "Components/Navbar";
// import CardView from "Components/Card";
import InputField from "Components/Card/Input";
import StepWizard from "Components/StepWizard";
import { tryCall } from "Utils";
import ButtonConfirm from "Components/Button/Confirm";
import ButtonReject from "Components/Button/Reject";
import Step1 from "./Step1";
import Step2 from "./Step2";

export default class MainView extends Component {
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
    console.log("NEXT STEP", idx);

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
    const { functions } = this.props;

    let dirty = this.state.dirty;

    let steps = [
      {
        title: "User Details",
        nextTitle: "Confirm",
        dirty
      },
      {
        title: "Confirm Details"
      }
    ];
    return (
      <div className={cn("main-start", align.full, align.topCenter, align.noMarginPad)}>
        <Loading loading={this.state.loading} />

        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <Navigation />
          </Col>
          <Col xs="8" className={cn(align.allCenter, align.noMarginPad)}>
            <StepWizard stepMeta={steps} onNext={this.handleNextStep}>
              <Step1 fieldChanged={this.fieldChanged} stateData={this.state.data} />
              <Step2 fieldChanged={this.fieldChanged}  stateData={this.state.data}  />
            </StepWizard>
          </Col>
        </Row>
      </div>
    );
  }
}
