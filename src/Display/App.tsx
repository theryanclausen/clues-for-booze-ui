import React from 'react';
import { Card, CardHeader } from "@material-ui/core"
import Background from './Background';

function App() {
  return (
    <div style={{position:"relative"}}>
      <div style={{ 
        position:"absolute", 
        height:"100vh", 
        width:"100vw", 
        display:'flex', 
        justifyContent:'center',
        alignItems:'center'
        }}>
      <Card>
        <CardHeader title="I'm a dumb old title or whatever">
          
        </CardHeader>
        heres something
      </Card>
      </div>
      <Background/>
    </div>
  );
}

export default App;
