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
import Loading from 'Components/Loading';
import React, { Component } from "react";
import QRReader from "Components/QRReader";
import Navigation from "Components/Navbar";
// import CardView from "Components/Card";
import InputField from "Components/Card/Input";
import StepWizard from "Components/StepWizard";
import {tryCall} from 'Utils';
import ButtonConfirm from "Components/Button/Confirm";
import ButtonReject from "Components/Button/Reject";

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

  register =  () => {
    return new Promise((done, err) => {
      this.setState({
        loading: true
      }, async () => {
        try { 
          let rec = await tryCall(this.props.sendTxn, this.state.data);
          console.log("RECEIPT", rec);
          done();
        } catch (e) {
          console.log(e);
         
        }
        this.setState({
          loading: false
        })
      })
    })
  }

  handleNextStep = idx => {
    switch(idx) {
      case 0: {
        return this.register();
        break;
      }
    }
  }

  fieldChanged = (fld, val) => {
    this.setState({
      data: {
        ...this.state.data,
        [fld]: val
      }
    })
  }

  render() {
    const { functions } = this.props;

    let dirty = this.state.dirty;

    /***
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
     */
    let steps = [
     /* {
        title: "Activation",
       
        dirty
      },*/
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
      <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
        <Loading loading={this.state.loading} />

        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <Navigation />
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <StepWizard stepMeta={steps} onNext={this.handleNextStep}>
              
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
                    <InputField label="some label" placeholder="customer wallet" 
                        value={this.state.data.address || ''}
                        onChange={e=>this.fieldChanged('address', e.target.value)}/>
                  </Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                    <InputField label="some label" placeholder="Phone Number" 
                        value={this.state.data.phoneNumber || ''}
                        onChange={e=>this.fieldChanged("phoneNumber", e.target.value)}/>
                  </Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  ></Col>
                  <Col
                    xs="12"
                    className={cn(align.allCenter, align.noMarginPad)}
                  >
                   
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