import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import {VictoryChart, VictoryGroup, VictoryBar, VictoryTheme} from "victory"
import { Header } from "semantic-ui-react";

export default class Metrics extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{marginLeft: "130px", marginBottom: "-170px"}}>Average Time of Flight (in mm) VS Day</h1>
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={40}
            width={300}
            height={200}
          >
            <VictoryGroup offset={5}
              colorScale={"qualitative"}
            >
              <VictoryBar
                style={{ 
                  labels: {fontSize: 2, fontWeight: "bold"}
                }}
                labels='top-left'
                data={[{ x: "24th", y: 26 }, { x: "25th", y: 26 }, { x: "26th", y: 10 }, { x: "27th", y: 46 }]}
              />
              <VictoryBar
                style={{ 
                  labels: {fontSize: 2, fontWeight: "bold"}
                }}
                labels='top-right'
                data={[{ x: "24th", y: 176 }, { x: "25th", y: 180 }, { x: "26th", y: 196 }, { x: "27th", y: 176 }]}
              />
              <VictoryBar
                style={{ 
                  labels: {fontSize: 2, fontWeight: "bold"}
                }}
                labels='bottom-left'
                data={[{ x: "24th", y: 120 }, { x: "25th", y: 130 }, { x: "26th", y: 120 }, { x: "27th", y: 127 }]}
              />
              <VictoryBar
                style={{ 
                  labels: {fontSize: 2, fontWeight: "bold"}
                }}
                labels='bottom-right'
                data={[{ x: "24th", y: 146 }, { x: "25th", y: 296 }, { x: "26th", y: 182 }, { x: "27th", y: 276 }]}
              />
            </VictoryGroup>
          </VictoryChart>
      </div>
    );
  }
}