import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import Bubble from './stepIndicator';

export default class StepIndicator extends Component {
    render() {
        const {
            stepNumber,
            stepCount,
            light,
            goToStep
        } = this.props;

        let steps = [];
        for(let i=0;i<stepCount;++i) {
            steps.push(<Bubble key={i} 
                                light={light} 
                                number={i} 
                                selected={i===stepNumber}
                                onClick={()=>goToStep(i)} />)
        }

        return (
            <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                        {steps}
                    </Col>
                </Row>
            </div>
        )
    }
}

