// Day 1 Solution
const doorToDoor = (volunteers, neighbourhoods) => {
  return neighbourhoods.length / volunteers.length;
};

// Day 2 Solution
const interviewAnswer = topic => {
  if (topic === "arts funding") {
    return "We'll have to get creative!";
  } else if (topic === "economy") {
    return "Time is money.";
  } else if (topic === "transportation") {
    return "It's going to be a long road, so we better get moving.";
  } else {
    return "QUACK ATTACK!!";
  }
};

// Day 3 Solution
// Remember, the possible candidates are: Tim, Sally, and Beth (in that order)
const castVote = (name, votes) => {
  if (name === "Tim") {
    votes[0]++;
  } else if (name === "Sally") {
    votes[1]++;
  } else {
    votes[2]++;
  }
  return votes;
};

// Day 4 Solution
const registerToVote = (name, unregisteredVoters) => {
  return unregisteredVoters.filter(x => x !== name);
};

// Day 5 Solution
const chooseStations = stations => {
  let arr = [];
  for (let i = 0; i < stations.length; i++) {
    if (
      (stations[i][1] >= 20 && stations[i][2] === "school") ||
      stations[i][2] === "community centre"
    ) {
      arr.push(stations[i][0]);
    }
  }
  return arr;
};

// Day 6 Solution
const voterTurnout = function(voter_signatures, voter_ids) {
  if (voter_signatures.length !== voter_ids.length) {
    return false;
  } else {
    for (let i = 0; i < voter_signatures.length; i++) {
      if (voter_signatures[i] !== voter_ids[i]) {
        return "FRAUD!";
      }
    }
    return "All clear, we can count the votes!";
  }
};

// Day 7 Solution
const termTopics = interviews => {
  let smartCity = 0;
  let artsFunding = 0;
  let transportation = 0;
  for (let i = 0; i < interviews.length; i++) {
    if (interviews[i] === "smart city") {
      smartCity++;
    } else if (interviews[i] === "arts funding") {
      artsFunding++;
    } else if (interviews[i] === "transportation") {
      transportation++;
    }
  }
  return [smartCity, artsFunding, transportation];
};

// Day 8 Solution
if (trash === "waste") {
  bins.waste++;
} else if (trash === "recycling") {
  bins.recycling++;
} else {
  bins.compost++;
}
return bins;

// Day 9 Solution
const carPassing = (cars, speed) => {
  let arr = cars;
  arr.push({ time: Date.now(), speed: speed });
  return arr;
};

// Day 10 Solution
const whereCanIPark = (spots, vehicle) => {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      const emptySpot = spots[y][x];
      if (vehicle === "motorcycle") {
        if (emptySpot === "M" || emptySpot === "S" || emptySpot === "R") {
          return [x, y];
        }
      } else if (vehicle === "small") {
        if (emptySpot === "S" || emptySpot === "R") {
          return [x, y];
        }
      } else if (vehicle === "regular") {
        if (emptySpot === "R") {
          return [x, y];
        }
      }
    }
  }
  return false;
};

// Day 11 Solution
const busTimes = buses => {
  let objectAnswer = {};
  for (let i in buses) {
    time = buses[i].distance / buses[i].speed;
    objectAnswer[i] = time;
  }
  return objectAnswer;
};

// Day 12 Solution
const checkAir = function(samples, threshold) {
  let totalLength = samples.length;
  let noOfDirty = samples.filter(noOfDirty => noOfDirty === "dirty").length;
  return noOfDirty / totalLength < threshold ? "Clean" : "Polluted";
};

// Day 13 Solution
const lightsOn = function(lights) {
  for (let i in lights) {
    lights[i].on = true;
  }
  return lights;
};

const lightsOff = function(lights) {
  for (let i in lights) {
    lights[i].on = false;
  }
  return lights;
};

const toggleLights = function(lights, lightsAreOn) {
  for (let i in lights) {
    if (lightsAreOn === true) {
      lightsOff(lights);
    } else lightsOn(lights);
  }
  return lights;
};

// Day 14 Solution
const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  totalCost = 1;
  costByDistance = distanceTraveled * 0.25;
  totalCost += costByDistance;
  if (numberOfPeople >= 30) {
    totalCost += 0.25;
  }
  return `$${totalCost.toFixed(2)}`;
};

// Day 15 Solution
const finalPosition = moves => {
  let x = 0;
  let y = 0;
  moves.map(direction =>
    direction === "north"
      ? (y += 1)
      : direction === "south"
      ? (y -= 1)
      : direction === "east"
      ? (x += 1)
      : direction === "west"
      ? (x -= 1)
      : null
  );
  return [x, y];
};

// Day 16 Solution
const festivalColours = color1 => {
  let complementaryColor1 = color1 + 150;
  let complementaryColor2 = color1 + 210;

  return [complementaryColor1, complementaryColor2];
};

// Day 17 Solution
const judgeVegetable = (vegetables, metric) => {
  let highest = 0;
  let index = 0;

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highest) {
      highest = vegetables[i][metric];
      index = i;
    }
  }
  return vegetables[index].submitter;
};

// Day 18 Solution
const countTickets = tickets => {
  let redColor = 0;
  let greenColor = 0;
  let blueColor = 0;

  tickets.forEach(color =>
    color === "red"
      ? redColor++
      : color === "green"
      ? greenColor++
      : blueColor++
  );

  return {
    red: redColor,
    green: greenColor,
    blue: blueColor
  };
};

const bestOdds = (tickets, raffleEntries) => {
  let redPC = (countTickets(tickets).red / raffleEntries.red) * 100;
  let greenPC = Math.floor(
    (countTickets(tickets).green / raffleEntries.green) * 100
  );
  let bluePC = Math.floor(
    (countTickets(tickets).blue / raffleEntries.blue) * 100
  );

  if (redPC > greenPC && redPC > bluePC) {
    return `You have the best odds of winning the red raffle.`;
  } else if (greenPC > redPC && greenPC > bluePC) {
    return `You have the best odds of winning the green raffle.`;
  } else if (bluePC > redPC && bluePC > greenPC) {
    return `You have the best odds of winning the blue raffle.`;
  }
};

// Day 19 Solution
const pumpkinSpice = money => {
  let noOfPumpkinPie = Math.floor(money / 5);
  let noOfPumpkinLatte = Math.floor((money - 5 * noOfPumpkinPie) / 3);
  let noOfPumpkinMacarons = Math.floor(
    (money - 5 * noOfPumpkinPie - 3 * noOfPumpkinLatte) / 1
  );

  let pumpkinSpice = 0;
  pumpkinSpice += noOfPumpkinPie * 30;
  pumpkinSpice += noOfPumpkinLatte * 15;
  pumpkinSpice += noOfPumpkinMacarons * 3;

  return [noOfPumpkinPie, noOfPumpkinLatte, noOfPumpkinMacarons, pumpkinSpice];
};

// Day 20 Solution
const PI = 3.14159;
const sphereVolume = function(radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
};
const coneVolume = function(radius, height) {
  return (1 / 3) * PI * Math.pow(radius, 2) * height;
};
const prismVolume = function(height, width, depth) {
  return height * width * depth;
};
const totalVolume = function(solids) {
  let total = 0;
  for (let shape of solids) {
    if (shape.type === "sphere") {
      total += sphereVolume(shape.radius);
    } else if (shape.type === "cone") {
      total += coneVolume(shape.radius, shape.height);
    } else if (shape.type === "prism") {
      total += prismVolume(shape.height, shape.width, shape.depth);
    }
  }
  return total;
};

// Day 21 Solution
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let i of recipes) {
    if (
      bakeryA.includes(i.ingredients[0]) &&
      bakeryB.includes(i.ingredients[1])
    ) {
      return i.name;
    } else if (
      bakeryB.includes(i.ingredients[0]) &&
      bakeryA.includes(i.ingredients[1])
    ) {
      return i.name;
    }
  }
};
