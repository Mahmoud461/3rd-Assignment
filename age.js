function ageToToday(day, month, year) {
  let birthDay = new Date(year, month, day);
  let array = ["", 0];
  var todayDate = new Date();
  let age = todayDate - birthDay;
  array[1] = age;
  getYear([...array]);
  array = ["or", age];
  getMonth([...array]);
  getWeek([...array]);
  getDay([...array]);
  getHour([...array]);
  getMinute([...array]);
  getSecond([...array]);
}
function getAGeByYear(array) {
  array = getYear(array);
}
function getAGeByMonth(array) {}
function getAGeByWeeks(array) {}
function getYear(array) {
  let year = array[1] / 31536000000;
  array[1] = array[1] % 31536000000;
  array[0] = `${parseInt(year)} years `;
  getMonth(array);
}
function getMonth(array) {
  let month = array[1] / 2592000000;
  array[1] = array[1] % 2592000000;
  array[0] = array[0] + " " + `${parseInt(month)} months `;

  getDay(array);
}
function getWeek(array) {
  let week = array[1] / 604800000;
  array[1] = array[1] % 604800000;
  array[0] = array[0] + ` ${parseInt(week)} weeks `;
  getDay(array);
}
function getDay(array) {
  let day = array[1] / 86400000;
  array[0] = array[0] + ` ${parseInt(day)} days`;
  console.log(array[0]);
}
function getHour(array) {
  let hours = array[1] / 3600000;

  array[0] = array[0] + ` ${parseInt(hours)} hours`;
  console.log(array[0]);
}
function getMinute(array) {
  let minutes = array[1] / 60000;

  array[0] = array[0] + ` ${parseInt(minutes)} minutes`;
  console.log(array[0]);
}
function getSecond(array) {
  let seconds = array[1] / 1000;

  array[0] = array[0] + ` ${parseInt(seconds)} seconds`;
  console.log(array[0]);
}
ageToToday("1", "1", "1995");
