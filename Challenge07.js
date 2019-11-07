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
