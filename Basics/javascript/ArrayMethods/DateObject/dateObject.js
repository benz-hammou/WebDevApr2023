// Date Object

const date = new Date();

let result = date;
result = date.getTime(); // convert to unix timestamp format

result = date.getDay(); // return the day as number 0 => sunday
result = date.getFullYear(); // return current year
result = date.getHours(); // return current year
result = date.getMinutes(); // pm format hour
result = date.getSeconds(); // get minutes

function printDay(day) {
  switch (day) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    default:
      return "What day do you want ?";
  }
}

function printMonth(month) {
  switch (month) {
    case 0:
      return "January";

    case 1:
      return "February";

    case 2:
      return "March";

    case 3:
      return "April";

    case 4:
      return "May";

    case 5:
      return "June";

    case 6:
      return "July";

    case 7:
      return "August";

    case 8:
      return "September";

    case 9:
      return "October";

    case 10:
      return "November";

    case 11:
      return "December";

    default:
      return "What month do you want ?";
  }
}
// console.log(printDay(date.getDay()));
// console.log(printMonth(date.getMonth()));

// Or like this

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thensday",
  "Friday",
  "Saturday",
];

let month = months[date.getMonth()];
let day = days[date.getDay()];
let n_day = date.getDate()
let current_year = date.getFullYear()

console.log(`Today is ${day} the ${n_day}, ${month} ${current_year} !`);


