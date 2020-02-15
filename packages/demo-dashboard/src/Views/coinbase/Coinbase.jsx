import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import StepWizard from 'Components/StepWizard';

export default class Coinbase extends Component {
    render() {
        let steps = [
            {

            }
        ]

        return (
            <div className={cn("cb-container", align.full, align.topCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                        
                        <TitleSection className={cn("pt-5")} />

                    </Col>
                </Row>
            </div>
        )
    }
}

const TitleSection = props => {
    const  {
        className
    } = props;

    return (
        <div className={cn(className, align.full, align.allCenter, align.noMarginPad)}>
            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                    <span className={cn('title','font-weight-bold', 'text-2')}>
                        Sign into Coinbase
                    </span>
                </Col>
            </Row>
        </div>
    )
}
