import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, CardText } from "reactstrap";
import React, { Component } from "react";
import StepWizard from "Components/StepWizard";
import ButtonCoinbase from "Components/Button/Coinbase";
import Navigation from "Components/Navbar/Coinbase";
import CoinbaseStep1 from "./Step1";
import CoinbaseStep2 from "./Step2";
import CoinbaseStep3 from "./Step3";

export default class Coinbase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFn: null,
      paramData: [],
      dirty: false,
      loading: false
    };

    this.wizardRef = React.createRef();
  }

  forgot = () => {
    if(this.wizardRef.current) {
      this.wizardRef.current.next();
    }
  }

  reset = () => {
    if(this.wizardRef.current) {
      this.wizardRef.current.next();
    }
  }

  render() {
    const { functions } = this.props;

    let dirty = this.state.dirty;

    let steps = [
      {
        title: "Sign In",
        dirty
      },
      {
        title: "Forgot Your Password",
        dirty
      },
      {
        title: "Warning"
      }
    ];

    /***
     * 
     */
    return (
      <div
        className={cn(
          "cb-container",
          align.full,
          align.topCenter,
          align.noMarginPad
        )}
      >
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <Navigation goTo={this.props.goTo}/>
        </Col>
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="4" className={cn(align.allCenter, align.noMarginPad)}>
            
          <StepWizard ref={this.wizardRef} 
                      stepMeta={steps} noButtons 
                      lightIndicator >
              <CoinbaseStep1 forgot={this.forgot} />
              <CoinbaseStep2 reset={this.reset} />
              <CoinbaseStep3 />
            </StepWizard>
            
          </Col>
        </Row>
      </div>
    );
  }
}

// const TitleSection = props => {
//   const { className, steps } = props;

//   return (
//     <div
//       className={cn(className, align.full, align.allCenter, align.noMarginPad)}
//     >
//       <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
//         <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
//           <Navigation />
//         </Col>
//         <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
//           <StepWizard stepMeta={steps}>
//             <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
//               <Row
//                 className={cn(align.full, align.noMarginPad, align.allCenter)}
//               >
//                 <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
//                   <span className={cn("font-weight-bold", "text-3")}>
//                     Activation
//                   </span>
//                 </Col>
//                 <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
//                   <CardText className={cn(align.topLeft, "mt-5")}>
//                     Thank you for activating SAFENET(c).
//                   </CardText>
//                 </Col>
//                 <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
//                   <CardText className={cn(align.topLeft, "my-2")}>
//                     0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208
//                   </CardText>
//                 </Col>
//                 <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
//                   <CardText className={cn(align.topLeft, "my-2")}>
//                     One more step required.
//                   </CardText>
//                 </Col>
//               </Row>
//             </div>
//           </StepWizard>
//         </Col>
//       </Row>
//     </div>
//   );
// };
