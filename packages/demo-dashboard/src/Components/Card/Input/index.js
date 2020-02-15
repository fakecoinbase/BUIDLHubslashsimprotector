import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class InputField extends React.Component {
  render() {
    let { label, placeholder, id } = this.props;

    return (
      <React.Fragment>
        <FormGroup>
          <Label for="exampleInput">{this.props.label}</Label>
          <Input
            type="input"
            name="text"
            id={this.props.id}
            placeholder={this.props.placeholder}
          >
            {this.props.children}
          </Input>
        </FormGroup>
      </React.Fragment>
    );
  }
}