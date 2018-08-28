import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MyLocation from '@material-ui/icons/MyLocation';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const LocationButton = props => {
  const { classes, onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      className={classes.button}
      color="primary"
      aria-label="My location"
    >
      <MyLocation />
    </IconButton>
  );
};

export default withStyles(styles)(LocationButton);
