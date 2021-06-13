import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(1),
      height: theme.spacing(1),
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "lightblue",
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
      color: "grey",
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
      async function getData() {
        const response = await fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "6cf29c4049mshfed0dd82ce3d9cbp19b4acjsn35a7470a684b",
                    "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com"
                }
            })
            // .then(response => {
            //     console.log(response);
            // })
            // .catch(err => {
            //     console.error(err);
            // });
            
            let Data = await response.json();
            setGlobalData(Data[0]);
            console.log(Data[0]);
      }

      getData();
  }, [])

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
            <main className={classes.content}>
                {Object.keys(globalData).map((key, ind) => {
                return (
                    <Paper elevation={3} key={ind}>
                        <h3 className={classes.title}>{key.replace('_text', ' ').toUpperCase()}</h3>
                        <h3>{globalData[key]}</h3>
                    </Paper>
                )
                })}
            </main>
        </div>
      </Drawer>
    </div>
  );
}
