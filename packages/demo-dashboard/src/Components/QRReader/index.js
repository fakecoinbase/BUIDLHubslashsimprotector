import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import QrReader from 'react-qr-reader';
import {tryCall} from 'Utils';

export default class QRReader extends Component {
    
    handleScan = data => {
        tryCall(this.props.onScan, data);
    }

    handleError = err => {
        tryCall(this.props.onError, err);
    }

    render() {
        return (
            <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                        <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
