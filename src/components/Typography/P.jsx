import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import TypographyStyle from "assets/jss/components/TypographyStyle.jsx";

function P({ ...props }) {
  const { classes, children } = props;
  return (
    <p className={classes.defaultFontStyle + " " + classes.pStyle}>
      {children}
    </p>
  );
}

P.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(TypographyStyle)(P);
