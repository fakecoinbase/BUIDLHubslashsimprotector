import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import {tryCall} from 'Utils';

export default class StepIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.wizardRef = React.createRef();
  }

  render() {
    let { number, selected, light, onClick } = this.props;
    
    return (
         <div
            className={cn(
              align.full,
              align.allCenter,
              "clickable",
              {selected},
              {light},
              align.noMarginPad,
              "stepindicator",
              "mx-3"
            )}

            onClick={e=>{
              e.stopPropagation();
              e.preventDefault();
              tryCall(onClick)
            }}
          >
            <span className={cn("stepindicator-num ",  'font-weight-bold', 'text-1-5')}>
              {number}
            </span>
           
          </div>
        
    );
  }
}
