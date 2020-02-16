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
import Navigation from "Components/Navbar";

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
            data: {
                ...this.state.data,
                [fld]: val
            }
        })
    }
    

    toggle = () => {
        if(!this.state.confirming) {
            this.setState({
                confirming: !this.state.confirming
            });
        } else {
            this.setState({
                loading: true
            }, async () => {

                 await tryCall(this.props.cancelNumber, this.state.data.phone);
                this.setState({
                    confirming: false,
                    loading: false,
                    confirmation: "Number deactivated"
                });
            })
        }
    }
    render() {
        return (
            <div className={cn("portal", align.full, align.topCenter, align.noMarginPad)}>
                <Loading loading={this.state.loading} />

                <Navigation goTo={this.props.goTo} />


                <Row className={cn(align.full, "pt-4", "pb-2", align.noMarginPad, align.allCenter)}>
                    <Col xs="10" className={cn(align.leftCenter, align.noMarginPad)}>
                        <span className={cn('font-weight-bold', 'text-1-2')}>
                            Service Options
                        </span>
                    </Col>
                </Row>

                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="10" className={cn(align.leftCenter, align.noMarginPad)}>

                                <RequestShutdown 
                                        confirming={this.state.confirming}
                                        stateData={this.state.data}
                                        fieldChanged={this.fieldChanged} 
                                        doShutdown={this.toggle} />
                                        
                        
                    </Col>
                </Row>

                {
                    this.state.confirmation &&
                    <Row className={cn(align.full, "pt-3", align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                            <span className={cn('font-weight-bold', 'text-1')}>
                                {this.state.confirmation}
                            </span>
                        </Col>
                    </Row>
                }
            </div>
        )
    }
}

const RequestShutdown = props => {
    const {
        fieldChanged,
        stateData,
        confirming,
        doShutdown
    } = props;
    

    let title = confirming?"Are you sure?":"Deactivate";

    return (
        <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
            

            <CardHeader className={cn("service-header", align.full, align.leftCenter)}>
                <span className={cn('font-weight-bold', 'text-1')}>
                    Deactivate Phone Number
                </span>
            </CardHeader>
            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                        <Input value={stateData.phone || ''}
                                onChange={e=>fieldChanged('phone', e.target.value)}
                                placeholder="Phone Number" />
                </Col>
            </Row>
            <Row className={cn(align.full, "py-3", align.noMarginPad, align.allCenter)}>
                <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                    <Button size="sm"
                            color={confirming?"danger":"primary"}
                            onClick={doShutdown}>
                        <span className={cn('font-weight-bold', "text-light", 'text-1')}>
                            {title}
                        </span>
                    </Button>
                </Col>
            </Row>
            
        </div>
    )
}
