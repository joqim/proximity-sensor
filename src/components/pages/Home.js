import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import styled, { keyframes } from 'styled-components'
import metrics from "../../metrics.json"
// import Visuals from "./Visuals";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topLeft: 0,
      topRight: 0,
      bottomLeft: 0,
      bottomRight: 0,
      index: 0
    }
  }

  componentDidMount() {
    this.iterate();
  }

  delay = ms => new Promise(res => setTimeout(res, ms));

  iterate = async() => {
    
    let values = metrics;
    console.log("values", values);

    // if(updatedIndex == values.length) return;

    for(let i=0; i<values.length; i++) {
      let index = this.state.index;
      console.log("index", index);
      let topLeft = values[index][1];
      let topRight = values[index][2];
      let bottomLeft = values[index][3];
      let bottomRight = values[index][4];

      let updatedIndex = index+1;

      await this.delay(1000);
      console.log("Waited 5s");

      this.setState({ 
        topLeft: topLeft,
        topRight: topRight,
        bottomLeft: bottomLeft,
        bottomRight: bottomRight,
        index: updatedIndex
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderVisuals = (AnimatedComponent) => {
    return (
      <div>
          {/* top-left */}
          {this.state.topLeft <= 100 && (
            <h2 style={{position:"fixed", top: 165, left: 330, color: "red"}}>
              {this.state.topLeft}
            </h2>
          )}
          {this.state.topLeft > 100 && (
            <h2 style={{position:"fixed", top: 165, left: 330, color: "green"}}>
              {this.state.topLeft}
            </h2>
          )}
          
          {this.state.topLeft <= 100 && (
            <AnimatedComponent>
              <img width={30} style={{position:"fixed", top: 170, left: 400}} src="https://cdn-01.media-brady.com/store/stus/media/catalog/product/i/n/international-symbols---warning-53688-lg.png" />
            </AnimatedComponent>
          )}

          {/* top-right */}
          {this.state.topRight <= 100 && (
            <AnimatedComponent>
              <img width={30} style={{position:"fixed", top: 170, left: 900}} src="https://cdn-01.media-brady.com/store/stus/media/catalog/product/i/n/international-symbols---warning-53688-lg.png" />
            </AnimatedComponent>
          )}
          {this.state.topRight <= 100 && (
            <h2 style={{position:"fixed", top: 165, left: 950, color: "red"}}>
              {this.state.topRight}
            </h2>
          )}
          {this.state.topRight > 100 && (
            <h2 style={{position:"fixed", top: 165, left: 950, color: "green"}}>
              {this.state.topRight}
            </h2>
          )}
        
          {this.state.bottomRight <= 100 && (
            <h2 style={{position:"fixed", top: 560, left: 950, color: "red"}}>
              {this.state.bottomRight}
            </h2>
          )}
          {this.state.bottomRight > 100 && (
            <h2 style={{position:"fixed", top: 560, left: 950, color: "green"}}>
              {this.state.bottomRight}
            </h2>
          )}
          {/* bottom-right */}
          {this.state.bottomRight <= 100 && (
            <AnimatedComponent>
              <img width={30} style={{position:"fixed", top: 560, left: 900}} src="https://cdn-01.media-brady.com/store/stus/media/catalog/product/i/n/international-symbols---warning-53688-lg.png" />
            </AnimatedComponent>
          )}
          
          {this.state.bottomLeft <= 100 && (
            <h2 style={{position:"fixed", top: 560, left: 350, color: "red"}}>
              {this.state.bottomLeft}
            </h2>
          )}
          {this.state.bottomLeft > 100 && (
            <h2 style={{position:"fixed", top: 560, left: 350, color: "green"}}>
              {this.state.bottomLeft}
            </h2>
          )}
          {/* bottom-left */}
          {this.state.bottomLeft <= 100 && (
            <AnimatedComponent>
              <img width={30} style={{position:"fixed", top: 560, left: 400}} src="https://cdn-01.media-brady.com/store/stus/media/catalog/product/i/n/international-symbols---warning-53688-lg.png" />
            </AnimatedComponent>
          )}

          {/* car */}
          <div style={{position:"fixed", top: 200, left: 420}}>
            <img src="https://www.freecads.com/media/thumb/fit/501x353/5e7b4f47bc455.jpg" />
          </div>
      </div>
    )
  }
  
  render() {
    const blinkingEffect = () => {
      return keyframes`
        60% {
          opacity: 0;
        }
      `;
    }

    const AnimatedComponent = styled.div`
      animation: ${blinkingEffect} 1s linear infinite;
    `

    console.log("state", this.state.topLeft, this.state.topRight)
    return (
      
      <div style={{marginBottom: "100px"}}>
        <Navbar />
        {this.renderVisuals(AnimatedComponent)}
      </div>
    );
  }
}