import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import Select from 'react-select';

export default class Manufacturer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFn: null,
        }
    }

    onFnSel = sel => {
        this.setState({
            selectedFn: sel
        })
    }

    render() {
        const {
            functions
        } = this.props;

        let opts = functions.map(f=>{
           return {
                label: f.name,
                value: f
            }
        });

        let ins = [];
        if(this.state.selectedFn) {
            ins = this.state.selectedFn.inputs
        }

        return (
            <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                        Select function to encode
                    </Col>
                </Row>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
                        <Select className={cn(align.full)} 
                                options={opts} onChange={this.onFnSel} />
                    </Col>
                </Row>
                {
                    ins.length > 0 &&
                    <React.Fragment>
                        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                            <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
                                <span className={cn('font-weight-light', 'text-1')}>
                                    Input Params
                                </span>
                            </Col>
                        </Row>
                        <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
                            
                        {
                            ins.map( (f, i) => {
                                return (
                                    <Row key={i} className={cn(align.full, align.noMarginPad, align.topCenter)}>
                                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                                            <span className={cn('font-weight-light', 'text-1')}>
                                                Param {f.name}
                                            </span>
                                        </Col>
                                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                                            <span className={cn('font-weight-light', 'text-1')}>
                                                Param {f.name}
                                            </span>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                        </div>
                    </React.Fragment>
                }

            </div>
        )
    }
}

