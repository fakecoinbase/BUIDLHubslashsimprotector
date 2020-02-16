import React from "react";
import cn from 'classnames';
import * as align from 'Constants/alignments';

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class InputField extends React.Component {
  render() {
    let { label, placeholder, id, className} = this.props;

    return (
      <React.Fragment>
        <FormGroup className={cn(className, align.noMarginPad)}>
          <Label for="exampleInput">{this.props.label}</Label>
          <Input
            className={className}
            type="input"
            name="text"
            id={this.props.id}
            onChange={this.props.onChange}
            value={this.props.value}
            placeholder={this.props.placeholder}
          />
        </FormGroup>
      </React.Fragment>
    );
  }
}
