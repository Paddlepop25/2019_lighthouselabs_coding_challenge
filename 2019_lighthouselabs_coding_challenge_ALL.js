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
  // Code here!
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
