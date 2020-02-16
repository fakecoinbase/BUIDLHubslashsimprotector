import React, { Fragment } from "react";
import { Button } from "reactstrap";
import cn from "classnames";

export default class ButtonConfirm extends React.Component {
  render() {
    let { className, small, tiny, size } = this.props;

    if (small) {
      size = "sm";
    }
    if (tiny) {
      size = "xs";
    }
    if (!size) {
      size = "md";
    }

    return (
      <Fragment>
        <Button
          size={size}
          color="primary"
          onClick={this.props.onClick}
          className={className}
        >
          {this.props.children}
        </Button>
      </Fragment>
    );
  }
}
