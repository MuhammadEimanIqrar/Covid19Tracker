import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(36),
      height: theme.spacing(26),
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function InfoPanel() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
    </div>
  );
}