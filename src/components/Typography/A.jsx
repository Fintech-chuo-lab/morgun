import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import TypographyStyle from "assets/jss/components/TypographyStyle.jsx";

function A({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <a {...rest} className={classes.defaultFontStyle + " " + classes.aStyle}>
      {children}
    </a>
  );
}

A.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(TypographyStyle)(A);
