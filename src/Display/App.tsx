import React from 'react';
import { Card, CardHeader } from "@material-ui/core"
import Particles, { InteractivityDetect } from 'react-tsparticles'
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
      <Particles 
        width="100vw"
        height="100vh"
        style={{ overflow:'hidden', background:'red', position:"absolute", zIndex:'-1'}}
        params={{
          absorbers: [],
          background: {},
          backgroundMask: {
            // cover: { color: { value: "#fff" }, opacity: 1 },
            enable: false
          },
          detectRetina: true,
          emitters: [],
          fpsLimit: 60,
          infection: {
            cure: false,
            delay: 0,
            enable: false,
            infections: 0,
            stages: []
          },
          interactivity: {
            detectsOn:InteractivityDetect.window,
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 60, smooth: 10 }
              },
              resize: true
            },
            modes: {
              absorbers: [],
              bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
              connect: { distance: 80, lineLinked: { opacity: 0.5 }, radius: 60 },
              emitters: [],
              grab: { distance: 400, lineLinked: { opacity: 1 } },
              push: { quantity: 4 },
              remove: { quantity: 2 },
              repulse: { distance: 90, duration: 0.4, speed: 1 },
              slow: { factor: 3, radius: 200 }
            }
          },
          particles: {
            collisions: { enable: false },
            color: { value: "#ffffff" },
            lineLinked: {
              blink: false,
              color: { value: "#000" },
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              shadow: { blur: 5, color: { value: "lime" }, enable: false },
              width: 1
            },
            move: {
              attract: { enable: false, rotate: { x: 600, y: 1200 } },
              // direction: "none",
              enable: true,
              noise: {
                delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
                enable: false,
                factor: {
                  horizontal: { value: 50, offset: 0 },
                  vertical: { value: 10, offset: 40000 }
                }
              },
              // outMode: OutMode<Out>,
              random: false,
              speed: 2,
              straight: false,
              trail: { enable: false, length: 10, fillColor: { value: "#000000" } },
              vibrate: false
            },
            number: {
              density: { enable: true, area: 800, factor: 1000 },
              limit: 0,
              value: 80
            },
            opacity: {
              animation: { enable: true, minimumValue: 0.2, speed: 1, sync: false },
              random: true,
              value: 1
            },
            rotate: {
              animation: { enable: true, speed: 5, sync: false },
              // direction: "random",
              random: true,
              value: 0
            },
            shadow: {
              blur: 0,
              color: { value: "#000000" },
              enable: false,
              offset: { x: 0, y: 0 }
            },

            size: {
              animation: {
                // destroy: "none",
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                // startValue: "max",
                sync: false
              },
              random: { load:()=>{}, enable: false, minimumValue: 1 },
              value: 16
            },
            stroke: { color: { value: "#000000" }, width: 1, opacity: 1 },
            twinkle: {
              lines: { enable: false, frequency: 0.05, opacity: 1 },
              particles: { enable: false, frequency: 0.05, opacity: 1 }
            }
          },
          pauseOnBlur: false,
          polygon: {
            draw: {
              enable: true,
              stroke: { color: { value: "#ffffff" }, width: 0.5, opacity: 1 }
            },
            enable: true,
            // inline: { arrangement: "one-per-point" },
            move: { radius: 10, 
              // type: "path" 
            },
            scale: 1,
            // type: "none",
            url: ""
          }
        }
        //   {
        //   background:{
        //     color:'green'
        //   },
        //   fpsLimit:60,
        //   interactivity:{
        //     events:{
        //       onClick:{
        //         enable:true,
        //         mode:'push'
        //       },
        //       onHover:{
        //         enable:true,
        //         mode:'repulse'
        //       }
        //     },    
        //     modes: {
        //       absorbers: [],
        //       bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
        //       connect: { distance: 80, lineLinked: { opacity: 0.5 }, radius: 60 },
        //       emitters: [],
        //       grab: { distance: 400, lineLinked: { opacity: 1 } },
        //       push: { quantity: 4 },
        //       remove: { quantity: 2 },
        //       repulse: { distance: 200, duration: 0.4, speed: 1 },
        //       slow: { factor: 3, radius: 200 }
        //     }
        //   },
        //   backgroundMask:{
        //     cover:"red"
        //   },
        //   particles:{
        //     move:{
        //       attract:{
        //         enable:true,
        //         rotate:{
        //           x:1003,
        //           y:4003
        //         }
        //       },
        //       vibrate:true,
        //       speed:3332222
        //     }
        //   }
        // }
      }
       /> 
       </div>
  );
}

export default App;
