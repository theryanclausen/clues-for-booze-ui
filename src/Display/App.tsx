import React from 'react';
import { makeStyles } from "@material-ui/core"
import Background from './Background';
import Content from './Content';

const useStyles = makeStyles({ 
  content:{
    position:"absolute", 
    height:"100vh", 
    width:"100vw", 
    display:'flex', 
    justifyContent:'center',
    alignItems:'center'
  },
  wrapper:{
    position:'relative'
  }
  
})



function App() {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
      <Content />
      </div>
      <Background/>
    </div>
  );
}

export default App;
