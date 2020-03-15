import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white"
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
  hide: {
    display: "none"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' color='inherit' className={classes.title}>
            <Link
              to='/'
              style={{ textDecoration: "none" }}
              className={classes.menuButton}>
              Todolist-MERN
            </Link>
          </Typography>
          <Typography className={classes.menuButton} variant='h6'>
            <Link
              to='/'
              style={{ textDecoration: "none" }}
              className={classes.menuButton}>
              Todos
            </Link>
          </Typography>
          <Typography className={classes.menuButton} variant='h6'>
            <Link
              to='/create'
              style={{ textDecoration: "none" }}
              className={classes.menuButton}>
              Create a Todo
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
