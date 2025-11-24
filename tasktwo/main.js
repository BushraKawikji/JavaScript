// Task One

function birthMonth() {
  let birthMonth = Number(
    prompt("Please Enter Your Birth Month as a number : ")
  );

  switch (birthMonth) {
    case 1:
      document.writeln("January");
      break;
    case 2:
      document.writeln("February");
      break;
    case 3:
      document.writeln("March");
      break;
    case 4:
      document.writeln("April");
      break;
    case 5:
      document.writeln("May");
      break;
    case 6:
      document.writeln("June");
      break;
    case 7:
      document.writeln("July");
      break;
    case 8:
      document.writeln("Augest");
      break;
    case 9:
      document.writeln("September");
      break;
    case 10:
      document.writeln("October");
      break;
    case 11:
      document.writeln("November");
      break;
    case 12:
      document.writeln("December");
      break;
    default:
      document.writeln("Not a valid month");
  }
}
// let one = birthMonth();

// Task Two
function pattern() {
  let number = 0;
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
      number++;
      document.writeln(`${number}`);
    }
    document.writeln("<br>");
  }
}
// let two = pattern();

// Task Three
function divideBy_13() {
  let number = 13;
  document.writeln("Numbers that can be devided on 13 is :");
  while (number <= 1000) {
    if (number % 13 === 0) {
      document.writeln(`${number}  `);
    }
    number++;
  }
}
// let three = divideBy_13();

// Task Four
function multiplication2(first, second) {
  let result = 0;
  for (let i = 1; i <= first; i++) {
    result += second;
  }
  return result;
}
// document.writeln(multiplication2(7, 2));

// Task Five
function triangleArea(base, height) {
  let result = 0.5 * base * height;
  return result;
}
// document.writeln(triangleArea(4, 6));

// Task Six
function isPandigital(number) {
  let numberStr = number.toString();
  let result = 0;
  numberStr = [...new Set(numberStr)].join("");
  for (let i = 0; i < numberStr.length; i++) {
    result += parseInt(numberStr.charAt(i));
  }
  if (result === 45) return true;
  return false;
}
// document.writeln(isPandigital(90864523148909));  //98140723568910

// Task Seven
function favoriteDrink(drink) {
  switch (drink) {
    case "Banana":
      document.writeln(`The price of a ${drink} drink is 20 dollars`);
      break;
    case "Strawberry":
      document.writeln(`The price of a ${drink} drink is 25 dollars`);
      break;
    case "Blueberry":
      document.writeln(`The price of a ${drink} drink is 40 dollars`);
      break;
    case "Avocado":
      document.writeln(`The price of a ${drink} drink is 40 dollars`);
      break;
    case "Coffee":
      document.writeln(`The price of a ${drink} drink is 15 dollars`);
      break;
    case "Tea":
      document.writeln(`The price of a ${drink} drink is 10 dollars`);
      break;
    case "Hot Chocolate":
      document.writeln(`The price of a ${drink} drink is 10 dollars`);
      break;
    case "Spanish Latte":
      document.writeln(`The price of a ${drink} drink is 30 dollars`);
      break;
    default:
      document.writeln(`Not Available :(`);
  }
}
// favoriteDrink(
//   prompt(
//     "Enter Your Favorite Drink (Banana, Strawberry, Blueberry, Avocado, Coffee, Tea, Hot Chocolate, Spanish Latte)"
//   )
// );

// Task Eight
function fullName (firstName, lastName) {
  return `${firstName} ${lastName}`;
}
document.writeln(fullName('Bushra','Qaweqji'));


