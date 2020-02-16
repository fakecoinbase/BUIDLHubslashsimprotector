import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col, 
    Button,
    CardHeader
} from 'reactstrap';
import React, { Component } from 'react'
import {tryCall} from 'Utils';
import Loading from 'Components/Loading';
import Input from 'Components/Card/Input';
import StepWizard from 'Components/StepWizard';

export default class Portal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            confirming: false,
            data: {}
        }
    }

    fieldChanged = (fld, val) => {
        this.setState({
            ...this.state.data,
            [fld]: val
        })
    }
    

    toggle = () => {
        if(!this.state.confirming) {
            this.setState({
                confirming: !this.state.confirming
            })
        } else {
            this.setState({
                loading: true
            }, async () => {
                await tryCall(this.props.cancelNumber)
            })
        }
    }
    render() {
        return (
            <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="10" className={cn(align.leftCenter, align.noMarginPad)}>
                        <span className={cn('font-weight-bold', 'text-2')}>
                            SAFENET
                        </span>
                    </Col>
                </Row>


                <Row className={cn(align.full, "pt-4", "pb-2", align.noMarginPad, align.allCenter)}>
                    <Col xs="10" className={cn(align.leftCenter, align.noMarginPad)}>
                        <span className={cn('font-weight-bold', 'text-1-2')}>
                            Service Options
                        </span>
                    </Col>
                </Row>

                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="10" className={cn(align.leftCenter, align.noMarginPad)}>

                        <StepWizard noButtons lightIndicator>
                                <RequestShutdown 
                                        stateData={this.state.data}
                                        fieldChanged={this.fieldChanged} />
                        </StepWizard>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}

const RequestShutdown = props => {
    const {
        fieldChanged,
        stateData
    } = props;

    return (
        <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
            <CardHeader className={cn("service-header", align.leftCenter)}>
                <span className={cn('font-weight-bold', 'text-1')}>
                    Deactivate Phone Number
                </span>
            </CardHeader>
            <Input value={stateData.phone}
                                onChange={e=>fieldChanged('phone', e.target.value)}
                                placeholder="Phone Number" />
        </div>
    )
}
