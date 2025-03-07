// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(feet) {
  if (feet > 0) {
    return Math.abs(feet - 42) * 264;
  }
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start * 264 - destination * 264);
}

function calculatesFarePrice(start, destination) {
  let distance = Math.abs((start * 264) - (destination * 264));
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

console.log(calculatesFarePrice(43, 44));

