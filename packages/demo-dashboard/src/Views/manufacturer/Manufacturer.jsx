import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, Input, Button } from "reactstrap";
import React, { Component } from "react";
import Select from "react-select";
import Loading from "Components/Loading";
import { tryCall } from "Utils";
import QRReader from "qrcode.react";

import StepWizard from "Components/StepWizard";

export default class Manufacturer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFn: null,
      paramData: [],
      dirty: false,
      loading: false,
      qrCodeValue: null,
      qrCodeError: null
    };
  }

  onFnSel = sel => {
    this.setState({
      selectedFn: sel.value,
      dirty: true,
      paramData: []
    });
  };

  paramChanged = (idx, val) => {
    let paramData = [...this.state.paramData];
    paramData[idx] = val;
    this.setState({
      dirty: true,
      paramData
    });
  };

  generateCode = () => {
    this.setState(
      {
        dirty: false,
        loading: true
      },
      async () => {
        try {
          let r = await tryCall(this.props.generateQRCode, {
            fn: this.state.selectedFn.actualFn,
            params: this.state.paramData
          });
          console.log("Signed data", r);

          this.setState({
            loading: false,
            qrCodeValue: r
          });
        } catch (e) {
          console.log(e);
          this.setState({
            loading: false,
            qrCodeError: e.message
          });
        }
      }
    );
  };

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
      <StepWizard stepMeta={steps}>
        <MainPage
          {...this.props}
          stateData={this.state}
          onFnSel={this.onFnSel}
          generateCode={this.generateCode}
          paramChanged={this.paramChanged}
        />
        <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
          <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
            <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
              <span className={cn("font-weight-light", "text-1")}>Page 2</span>
            </Col>
          </Row>
        </div>

        <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
          <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
            <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
              <span className={cn("font-weight-light", "text-1")}>Page 2</span>
            </Col>
          </Row>
        </div>
      </StepWizard>
    );
  }
}

const MainPage = props => {
  const { functions, onFnSel, generateCode, paramChanged, stateData } = props;

  let loading = stateData.loading;
  let vals = stateData.paramData;
  let qrData = stateData.qrCodeValue;
  let qrErr = stateData.qrCodeError;
  let selectedFn = stateData.selectedFn;
  let dirty = stateData.dirty;

  let opts = functions.map(f => {
    return {
      label: f.name,
      value: f
    };
  });

  let ins = [];
  if (selectedFn) {
    ins = selectedFn.inputs;
  }

   const registerPhoneNumber = () => {
     tryCall(
       props.registerPhoneNumber,
       "123456",
       "0x803428e38DBFDf2EB25D94B538A1CFc395E66615"
     );
   };

   const addProvider = () => [
     tryCall(props.addProvider, "0x803428e38DBFDf2EB25D94B538A1CFc395E66615")
   ];

  return (
    <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
      <Loading loading={loading} />

      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          Select function to encode
        </Col>
      </Row>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
          <Select
            className={cn(align.full)}
            options={opts}
            onChange={onFnSel}
          />
        </Col>
      </Row>
      {ins.length > 0 && (
        <React.Fragment>
          <Row
            className={cn(
              align.full,
              "pt-5",
              align.noMarginPad,
              align.allCenter
            )}
          >
            <Col xs="6" className={cn(align.leftCenter, align.noMarginPad)}>
              <span className={cn("font-weight-bold", "text-1")}>
                Input Params
              </span>
            </Col>
          </Row>

          <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
            <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
              <div
                className={cn(align.full, align.topCenter, align.noMarginPad)}
              >
                {ins.map((f, i) => {
                  return (
                    <Row
                      key={i}
                      className={cn(
                        align.full,
                        align.noMarginPad,
                        align.topCenter
                      )}
                    >
                      <Col
                        xs="12"
                        className={cn(align.allCenter, align.noMarginPad)}
                      >
                        <span className={cn("font-weight-light", "text-1")}>
                          Param {f.name}
                        </span>
                      </Col>
                      <Col
                        xs="12"
                        className={cn(align.allCenter, align.noMarginPad)}
                      >
                        <Input
                          className={cn(align.full)}
                          onChange={e =>
                            tryCall(paramChanged, i, e.target.value)
                          }
                          value={vals[i] || ""}
                        />
                      </Col>
                    </Row>
                  );
                })}
              </div>
            </Col>
          </Row>
        </React.Fragment>
      )}

      <Row
        className={cn(align.full, "py-4", align.noMarginPad, align.allCenter)}
      >
        <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
          <Button
            size="sm"
            color={dirty ? "primary" : "secondary"}
            disabled={!dirty}
            onClick={generateCode}
          >
            Generate QR Code
          </Button>
        </Col>
      </Row>

      {qrData && (
        <Row
          className={cn(align.full, "pt-5", align.noMarginPad, align.allCenter)}
        >
          <Col xs="4" className={cn(align.allCenter, align.noMarginPad)}>
            <QRReader value={qrData} />
          </Col>
        </Row>
      )}
    </div>
  );
};
