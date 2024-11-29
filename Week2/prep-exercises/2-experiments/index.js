"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
  for(let ii = 0; ii < sampleSize; ii++){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    valueCounts[(randomNumber - 1)]++;
  }

  const results = [];
  let sum = valueCounts.reduce((accumulator, value) => accumulator + value, 0);

  for(let value of valueCounts){
    let percentage = (value / sum) * 100;
    results.push(percentage.toFixed(2));
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];
  for(let sample of sampleSizes){
    const results = runExperiment(sample);
    const formattedResults = `[ ${ results.map(result => `'${result}'`).join(', ') }] ${sample}`;
    console.log(formattedResults);
  }
}

main();
