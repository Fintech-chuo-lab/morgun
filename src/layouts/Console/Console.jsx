import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import { withStyles } from "@material-ui/core";

import { Header } from "components";

import AppStyle from "assets/jss/components/AppStyle.jsx";

import consoleRoutes from "routes/console.jsx";

const switchRoutes = (
  <Switch>
    {consoleRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  state = {
    mobileOpen: false
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  // componentDidMount() {
  //   if(navigator.platform.indexOf('Win') > -1){
  //     // eslint-disable-next-line
  //     const ps = new PerfectScrollbar(this.refs.mainPanel);
  //   }
  // }
  // componentDidUpdate() {
  //   this.refs.mainPanel.scrollTop = 0;
  // }
  render() {
    const { classes, } = this.props;
    return (
      <div className={classes.wrapper}>
        <Header />
        {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(AppStyle)(App);
