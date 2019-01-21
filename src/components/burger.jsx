import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { goToAnchor } from 'react-scrollable-anchor';

const styles = {
  menuItem: {
    minWidth: '150px',
  },
};

class Burger extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = goTo => {
    goToAnchor(goTo);
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { items, classes } = this.props;

    return (
      <React.Fragment>
        <IconButton
          color="inherit"
          aria-label="Menu"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          {items.map(item => (
            <MenuItem key={item.name} onClick={() => this.handleClose(item.anchor)} className={classes.menuItem}>
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </React.Fragment>
    );
  }
}

Burger.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Burger);
