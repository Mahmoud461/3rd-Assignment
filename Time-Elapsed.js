function elapsed(time1, time2) {
  let timeDiff = time1 - time2;
  let reminder = 0;
  if (timeDiff < 0) {
    timeDiff = timeDiff * -1;
  }
  reminder = gitDays(timeDiff);

  console.log(reminder);
}

function gitDays(timeDiff) {
  let day = timeDiff / 86400;
  let msg = "";
  msg = `${parseInt(day)} days `;
  let reminder = timeDiff % 86400;

  if (reminder == 0) {
    return msg;
  }
  let hours = reminder / 3600;
  reminder = reminder % 3600;
  msg = msg + ` , ${parseInt(hours)} hours `;
  if (reminder == 0) {
    return msg;
  }
  let minutes = reminder / 60;
  reminder = reminder % 60;
  msg = msg + ` , ${parseInt(minutes)} minutes `;
  if (reminder == 0) {
    return msg;
  }
  msg = msg + ` , ${parseInt(reminder)} seconds `;
  return msg;
}
// elapsed(1559813526, 1559899926);
// elapsed(1559681004, 1559899926);
// elapsed(1558773066, 1559899926);
