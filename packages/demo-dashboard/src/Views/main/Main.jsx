import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import {tryCall} from 'Utils';

export default class MainView extends Component {
    static getDerivedStateFromProps(props, state) {
        if(state.requestedInit) {
            return {}
        }
    
        setTimeout(() => tryCall(props.runInit), 10);
        return {
            requestedInit: true
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            requestedInit: false 
        }
    }

    componentDidMount = () => {
        if(!this.state.requestedInit) {
            this.setState({
                requestedInit: true
            }, () => tryCall(this.props.runInit));
        }
    }

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
