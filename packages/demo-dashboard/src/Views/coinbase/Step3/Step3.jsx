import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, CardText, FormGroup } from "reactstrap";
import React from "react";
// import InputField from "Components/Card/Input";
import Button from "Components/Button/Progress";
import {Icon}  from "Components/icons";

const DAY = 86400000;


export default class Step3 extends React.Component {

    render() {
        const {
            lastEvent
        }= this.props;
        if(!lastEvent) {

            return null;
        }

        let exp = lastEvent.timestamp + (7*DAY);
        let expDate = new Date(exp).toString();

        return (
            <div className={cn("step", "step3", align.full, align.topCenter, align.noMarginPad)}>
            <Row className={cn(align.full,  align.noMarginPad, align.allCenter)}>
                <Col xs="12" className={cn(align.leftCenter, "py-4", "px-3", "bg-danger", align.noMarginPad)}>
                <Icon className={cn("fa-exclamation-triangle", "text-warning", "text-2")} />
                <span className={cn('font-weight-bold', 'text-1-2', "text-light", "pl-2")}>
                    Cannot Reset Password
                </span>
                </Col>
            </Row>

            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                <Col xs="10" className={cn(align.allCenter, align.noMarginPad)}>
                <span className={cn("font-weight-bold", "text-1-5")}>
                    Device Identity Recently Changed
                </span>
                </Col>
            </Row>
            <Row className={cn(align.full, "py-3", align.noMarginPad, align.allCenter)}>
                <Col xs="10" className={cn(align.allCenter, align.noMarginPad)}>
                    <span className={cn('font-weight-bold', 'text-1-2')}>
                        Locked until {expDate} 
                    </span>
                </Col>
            </Row>
            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                
                <Col xs="10" className={cn(align.allCenter, align.noMarginPad)}>
                <span className={cn('font-weight-light', 'text-1')}>
                    The device you configured for authorizing password resets has 
                    recently changed. By policy, you must wait 7 days after the 
                    change before resetting passwords.
                </span>
                </Col>
            </Row>
            <Row className={cn(align.full, "py-3", align.noMarginPad, align.allCenter)}>
                
                <Col xs="10" className={cn(align.allCenter, align.noMarginPad)}>
                <span className={cn('font-weight-light', 'text-1')}>
                    
                    Please contact a Coinbase representative, and have required
                    documentation available.
                </span>
                </Col>
            </Row>

            
            </div>
        );
    }
}
