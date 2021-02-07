import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
      marginLeft: '8px'
    },
  }),
);

interface AlertType {
  severity: string;
  text: string;
}

export default function Alerts({ severity, text}: AlertType ): any {
  const classes = useStyles();

       switch(severity) {
          case "error":
              return <div className={classes.root}><Alert variant="outlined" severity="error">{text}</Alert></div>
          case "warning": 
              return <div className={classes.root}><Alert variant="outlined" severity="warning">{text}</Alert></div>
          case "info":
              return <div className={classes.root}><Alert variant="outlined" severity="info">{text}</Alert></div>
          case "success":
              return <div className={classes.root}><Alert variant="outlined" severity="success">{text}</Alert></div>
          default:
            return "";    
       }

}