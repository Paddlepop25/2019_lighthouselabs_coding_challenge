// Challenge #14 - Ticket to Ride
// The local transit system has been too expensive for too long! To encourage more people to use the bus, you are restructuring ticket pricing. From now on, passengers will be charged a dynamic price, which will depend on the number of people on the bus (peak times have higher fare!) and the distance that the passenger travels.

// Instructions
// We'll be implementing a function called dynamicPricing(), which will return the cost of a particular trip given the number of people on the bus, and the distance traveled by the passenger. This function receives two numbers: numberOfPeople and distanceTraveled.

// The base ticket price is $1. Passengers will be charged $0.25 per kilometer. If there are 30 or more people on the bus, there should be $0.25 added to the total.

// The value that your functions returns must be a string, formatted as such: $4.25. Your values must be shown to two decimal points of precision.

// Examples
// Input:

//     const numberOfPeople = 15
//     const distanceTraveled = 10

// Output:
// $3.50
// Input:

//     const numberOfPeople = 35
//     const distanceTraveled = 5

// Output:
// $2.50

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
