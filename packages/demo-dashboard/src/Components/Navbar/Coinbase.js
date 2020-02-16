import cn from "classnames";
import * as align from "Constants/alignments";
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import React, { Component } from "react";
import LogoBlock from "./LogoBlock/Coinbase";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className={cn("navbar_container", align.full, "top")}>
        <Navbar
          className={cn(
            "logo_positioned",
            "nav_style",
            "nav-margin-fix",
            "py-3",
            "nav_collapse_style"
          )}
          dark
          expand="md"
        >
          <NavbarBrand className={cn("pl-0", "pl-md-5", align.noMarginPad)}>
            {/* <LogoBlockLanding goHome={this.props.goHome} light /> */}
            <LogoBlock />
          </NavbarBrand>

          <NavbarToggler
            className={cn(
              // 'd-none',
              "ml-xs-2",
              "ml-md-0",
              "mr-md-3"
            )}
            onClick={this.toggle}
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav
              className={cn(
                "ml-auto",
                "mr-md-5",
                "nav_toggler_collapse_style",
                "nav-right-margin-fix"
              )}
              navbar
            >
              <NavItem
                className={cn(
                  "nav-link-placement",
                  "mr-md-4",
                  "nav_items_collapse_style"
                )}
              >
                <a
                  className={cn("nav_link_coinbase")}
                  href="/safenet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1. Telco Trusted Customer
                </a>
              </NavItem>
              <NavItem
                className={cn(
                  "nav-link-placement",
                  "mr-md-4",
                  "nav_items_collapse_style"
                )}
              >
                <a className={cn("nav_link_coinbase")} href="/coinbase">
                  2. Custodian Wallet
                </a>
              </NavItem>
              <NavItem
                className={cn(
                  "nav-link-placement",
                  "mr-md-4",
                  "nav_items_collapse_style"
                )}
              >
                <a className={cn("nav_link_coinbase")} href="/deactivate">
                  3. Deactivate
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// target="_blank"
//     rel="noopener noreferrer"

// <NavItem className={cn("nav_items_collapse_style")}>
//   <ButtonRoundGold onClick={this.props.goToEventFlow}>Login</ButtonRoundGold>
// </NavItem>;

//  <div
//     className={cn(
//     'py-3',
//     align.full,
//     // align.allCenter,
//     'nav_collapse_style',
//     align.noMarginPad
//     )}
//     ></div>
