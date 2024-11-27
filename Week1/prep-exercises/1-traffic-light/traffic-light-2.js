"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};
const numOfPossibleStates = trafficLight.possibleStates.length;
let cycle = 0;
do  {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);
  
  if(currentState === "red"){
    cycle += 1;
  }
  trafficLight.stateIndex = (trafficLight.stateIndex + 1) % numOfPossibleStates;
  //trafficLight.stateIndex = (trafficLight.stateIndex < numOfPossibleStates - 1) ? trafficLight.stateIndex + 1 : 0;

}while (cycle < 2);

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
