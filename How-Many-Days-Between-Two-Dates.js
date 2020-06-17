let printFullName = (firstName, lastName) => console.log(firstName + lastName);
printFullName("Mahmoud ", "Tohamy");

function getDays(date_2, date_1) {
  let days = date_2 - date_1;
  if (days < 0) {
    days = days * -1;
  }

  console.log(gitAgeByDays(days));
}
function gitAgeByDays(age) {
  let day = age / 86400000;
  return `${parseInt(day)} days`;
}
let date_1 = new Date("June 14, 2019");
let date_2 = new Date("June 20, 2019");
getDays(date_2, date_1);

// function ageToToday(day, month, year) {
//   let birthDay = new Date(year, month, day);

//   var todayDate = new Date();
//   let age = todayDate - birthDay;
//   gitAgeByYear(age);

//   console.log(
//     gitAgeByYear(age) +
//       " or " +
//       gitAgeByMonth(age) +
//       " or " +
//       gitAgeByWeek(age) +
//       " or " +
//       gitAgeByDays(age) +
//       " or " +
//       gitAgeByHours(age) +
//       " or " +
//       gitAgeByMinutes(age) +
//       " or " +
//       gitAgeBySeconds(age)
//   );
// }

// function gitAgeByYear(age) {
//   let year = age / 31536000000;
//   let reminder = age % 31536000000;
//   let month = reminder / 2592000000;
//   reminder = reminder % 2592000000;
//   let day = reminder / 86400000;
//   return `${parseInt(year)} years ${parseInt(month)} months ${parseInt(
//     day
//   )} days`;
// }
// function gitAgeByMonth(age) {
//   let month = age / 2592000000;
//   let reminder = age % 2592000000;
//   let day = reminder / 86400000;
//   return `${parseInt(month)} months ${parseInt(day)} days`;
// }
// function gitAgeByWeek(age) {
//   let week = age / 604800000;
//   let reminder = age % 604800000;
//   let day = reminder / 86400000;
//   return `${parseInt(week)} week ${parseInt(day)} days`;
// }
// function gitAgeByDays(age) {
//   let day = age / 86400000;
//   return `${parseInt(day)} days`;
// }
// function gitAgeByHours(age) {
//   let hours = age / 3600000;

//   return ` ${parseInt(hours)} hours`;
// }
// function gitAgeByMinutes(age) {
//   let minutes = age / 60000;

//   return ` ${parseInt(minutes)} minutes`;
// }
// function gitAgeBySeconds(age) {
//   let seconds = age / 1000;

//   return ` ${parseInt(seconds)} seconds`;
// }

// ageToToday("1", "1", "1995");

// How Many Days Between Two Dates
