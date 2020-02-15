import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import QRReader from 'Components/QRReader';

export default class MainView extends Component {
    

    /***
     * <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                            <QRReader onScan={console.log} onError={console.log} />
                        </Col>
                    </Row>
     */
    render() {
        return (
            <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                        MAIN VIEW
                    </Col>
                </Row>

                
            </div>
        )
    }
}
