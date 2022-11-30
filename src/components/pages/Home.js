import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import styled, { keyframes } from 'styled-components'

export default class Home extends Component {
  
  render() {
    const blinkingEffect = () => {
      return keyframes`
        50% {
          opacity: 0;
        }
      `;
    }

    const AnimatedComponent = styled.div`
      animation: ${blinkingEffect} 1s linear infinite;
    `

    return (
      <div>
        <Navbar />
          {/* top-left */}
          <AnimatedComponent>
            <img width={30} style={{position:"fixed", top: 170, left: 400}} src="https://cdn-01.media-brady.com/store/stus/media/catalog/product/i/n/international-symbols---warning-53688-lg.png" />
          </AnimatedComponent>

          
          {/* top-right */}
          <AnimatedComponent>
            <img width={30} style={{position:"fixed", top: 170, left: 900}} src="https://cdn-01.media-brady.com/store/stus/media/catalog/product/i/n/international-symbols---warning-53688-lg.png" />
          </AnimatedComponent>
          
        
          {/* bottom-right */}
          <AnimatedComponent>
            <img width={30} style={{position:"fixed", top: 560, left: 900}} src="https://cdn-01.media-brady.com/store/stus/media/catalog/product/i/n/international-symbols---warning-53688-lg.png" />
          </AnimatedComponent>
          
          
          {/* bottom-left */}
          <AnimatedComponent>
            <img width={30} style={{position:"fixed", top: 560, left: 400}} src="https://cdn-01.media-brady.com/store/stus/media/catalog/product/i/n/international-symbols---warning-53688-lg.png" />
          </AnimatedComponent>

          {/* car */}
          <div style={{position:"fixed", top: 200, left: 420}}>
            <img src="https://www.freecads.com/media/thumb/fit/501x353/5e7b4f47bc455.jpg" />
          </div>
      </div>
    );
  }
}