import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react'

export default class MainView extends Component {
    render() {
        return (
            <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                        MAIN VIEW
                    </Col>
                </Row>
            </div>
        )
    }
}
