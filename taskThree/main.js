// Task One
function tellFortune({ numOfChildren, location, partnerName, posoition }) {
  return `You will be a ${posoition} in ${location} ,
    and married to ${partnerName} with ${numOfChildren} kids`;
}
// document.writeln(
//   tellFortune({
//     numOfChildren: 4,
//     location: "U.S",
//     partnerName: "XXX",
//     posoition: "Professor",
//   })
// );

// Task Two
function calculateDogAge(age) {
  return `Your doggie is ${age * 7} years old in dog years!`;
}
document.writeln(calculateDogAge(1));
