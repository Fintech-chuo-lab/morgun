import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import MailIcon from '@material-ui/icons/Mail';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

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

class Profie extends React.Component {
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

    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <div>
            <ListItem>
              <Avatar
                alt="Adelle Charles"
                src="https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20160207%2F46%2F4633596%2F32%2F450x377x516876560962a59b409245da.jpg%2F300%2F600&twidth=300&theight=0&qlt=80&res_format=jpg&op=r"
                className={classNames(classes.avatar, classes.bigAvatar, classes.row)}
                />
            </ListItem>
            <ListItem>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                />
            </ListItem>
            <ListItem>
              <TextField
                id="university"
                label="University"
                className={classes.textField}
                value={this.state.university}
                onChange={this.handleChange('university')}
                margin="normal"
                />
            </ListItem>
            <ListItem>
              <TextField
                id="faculty"
                label="Faculty"
                className={classes.textField}
                value={this.state.faculty}
                onChange={this.handleChange('faculty')}
                margin="normal"
                />
            </ListItem>
          </div>
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('right', true)}>Open Profile</Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Profie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profie);
