import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PlaceIcon from '@material-ui/icons/Place';
import Input from '@material-ui/core/Input';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MapContainer from './MapContainer';
import { FlyToInterpolator } from 'react-map-gl';
import { updateViewport } from '../store/map/actions';

const drawerWidth = 320;
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    height: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    marginRight: theme.spacing.unit * 3,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: theme.mixins.toolbar,
  mapWrapper: {
    flexGrow: 1,
  },
});

// test content
const flatstackPlace = {
  latitude: 55.793719,
  longitude: 49.1253406,
  zoom: 16,
  transitionDuration: 5000,
  transitionInterpolator: new FlyToInterpolator(),
};

class Main extends Component {
  mapWrapperRef = React.createRef();

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const viewport = {
      width: this.mapWrapperRef.current.offsetWidth,
      height: this.mapWrapperRef.current.offsetHeight,
    };
    this.props.onUpdateViewport(viewport);
  };

  handleClick = place => {
    const viewport = {
      ...this.props.viewport,
      ...place,
    };
    this.props.onUpdateViewport(viewport);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.title} variant="title" color="inherit" noWrap>
              Map Menu
            </Typography>
            <MuiThemeProvider theme={darkTheme}>
              <Input
                placeholder="Cafe, restaurants..."
                type="search"
                inputProps={{
                  'aria-label': 'Search',
                }}
              />
            </MuiThemeProvider>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem button onClick={() => this.handleClick(flatstackPlace)}>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary="Flatstack" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.mapWrapper} ref={this.mapWrapperRef}>
            <MapContainer />
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    viewport: state.map.viewport,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateViewport: viewport => dispatch(updateViewport(viewport)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Main));
