import {
  Row,
  Col,
  // Modal,
  // ModalHeader,
  // ModalBody,
  // ModalFooter,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import cn from "classnames";
import * as align from "Constants/alignments";
import React, { Component } from "react";
import Loading from "Components/Loading";
import _ from "lodash";
import ButtonProgress from "Components/Button/Progress";

export default class CardView extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.form = React.createRef();
  //     this.state = {
  //       errors: {},
  //       data: props.paramValues || {},
  //       loading: false
  //     };
  //   }

  render() {
    const { header, text, progressText, footer } = this.props;

    return (
      <Col
        xs="10"
        className={cn(align.allCenter, align.noMarginPad, "param-modal")}
      >
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Card className={cn("param-modal-body", "card-dimensions")}>
            <CardHeader className={cn(align.vCenter, "card-header")}>
              {header}
            </CardHeader>
            <CardBody>
              <Row
                className={cn(align.full, align.noMarginPad, align.allCenter)}
              >
                <Col xs="9" className={cn(align.noMarginPad)}>
                  <CardText className={cn(align.topLeft, "my-5")}>
                    {text}
                  </CardText>
                </Col>
                <Col
                  xs="9"
                  className={cn(align.allCenter, align.noMarginPad, "my-3")}
                >
                  <ButtonProgress>{progressText}</ButtonProgress>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className={cn(align.vCenter, "param-modal-footer")}>
              {footer}
            </CardFooter>
          </Card>
        </Row>
      </Col>
    );
  }
}
