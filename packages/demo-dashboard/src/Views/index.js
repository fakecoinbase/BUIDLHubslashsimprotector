// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Main styles for this application
import 'scss/style.scss'
import "react-toggle/style.css"
import "animate.css/animate.min.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route,Switch ,withRouter} from "react-router-dom";
import error from "Routes/error";
import MainRoute from "Routes/main";
import MfrRoute from 'Routes/manufacturer';
import {default as initOps} from 'Redux/init/operations';
import {tryCall} from 'Utils';

import cn from 'classnames';
import * as align from 'Constants/alignments';

import Loading from "Components/Loading"

const DEF_START = "/main"

class AppStart extends Component {

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
    const { location, match } = this.props;
    if (location.pathname === '/') {
      return (<Redirect to={DEF_START} />);
    }
/**
 *
              
 */
        
    return (
    
      <div className={cn( "main-view-container", align.topCenter, align.full, align.noMarginPad)}>
          <Loading loading={this.props.showing} />
          <Switch>
              <Route path={`${match.url}main`} component={MainRoute} />
              <Route path={`${match.url}manufacturer`} component={MfrRoute} />
              
              <Route path={`/error`} component={error} />
              <Redirect to="/error" />
          </Switch>
      </div>
    );
  }
}

const s2p = state => {
  return {
    
    loading: state.init.loading
  }
}

const d2p = dispatch => {
  return {
    runInit: () => {
      dispatch(initOps.start());
    }
  }
}

export default withRouter(connect(s2p, d2p)(AppStart));
