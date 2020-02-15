import cn from 'classnames';
import * as align from 'Constants/alignments';
import { 
    Row, 
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button 
} from 'reactstrap';
import {tryCall} from 'Utils';
import React, { Component } from 'react'

import StepWizard from 'react-step-wizard';

/**
 * Turns child elements into an animated set of steps
 */
export default class StepWizardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
        this.wizardRef = React.createRef();
    }

    next = () => {
        let n = this.state.page + 1
        if(n >= this.props.stepMeta.length)  {
            n = this.props.stateMeta.length-1;
        }
        if(this.wizardRef.current.nextStep) {
            this.wizardRef.current.nextStep();
            this.setState({
                page: n
            })
        }
    }

    prev = () => {
        let n = this.state.page - 1;
        if(n < 0) {
            n = 0;
        }

        if(this.wizardRef.current.previousStep) {
            this.wizardRef.current.previousStep();
            this.setState({
                page: n
            })
        }
    }

    render() {
        
        let {
            stepMeta
        } = this.props;
        if(!stepMeta) {
            stepMeta = []
        }

        let page = this.state.page;
        let meta = stepMeta[page] || {};
        let title = meta.title;
        let dirty = meta.dirty;
        let hasNext = page < (stepMeta.length - 1);
        let hasPrev = page > 0;

        return (
            <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="10" className={cn(align.allCenter, align.noMarginPad)}>
                        <Card className={cn("step-card", align.full, align.noMarginPad)}>

                            {
                                title &&
                                <CardHeader className={cn(align.full, "step-header")}>
                                    <div className={cn(align.full, align.leftCenter, align.noMarginPad)}>
                                        <span className={cn('font-weight-bold', 'text-1')}>
                                            {meta.title}
                                        </span>
                                    </div>
                                </CardHeader>
                            }


                            <CardBody className={cn("step-body", align.full, align.noMarginPad)}>

                                <StepWizard ref={this.wizardRef}>
                                    {this.props.children}
                                </StepWizard>

                            </CardBody>

                            <CardFooter className={cn(align.full, align.rightCenter, align.noMarginPad)}>
                                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                                    <Col xs="6" className={cn(align.leftCenter, align.noMarginPad)}>
                                        <Button size="sm" color={hasPrev?"primary":"secondary"}
                                                onClick={this.prev}
                                                disabled={!hasPrev}>Prev</Button>
                                    </Col>

                                    <Col xs="6" className={cn(align.rightCenter, align.noMarginPad)}>
                                        <Button size="sm" color={hasNext?"primary":"secondary"}
                                                 onClick={this.next}
                                                disabled={!hasNext}>Next</Button>
                                    </Col>
                                </Row> 
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
