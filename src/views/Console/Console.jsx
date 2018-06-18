import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { P } from "components"

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 160,
    height: 160,
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 200,
  },
};

class Console extends React.Component {
  state = {
    name: '',
    university: '',
    faculty: '',
    right: false,
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {

    return (
      <div>
        <P>
          Console
        </P>
      </div>
    );
  }
}

Console.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Console);
