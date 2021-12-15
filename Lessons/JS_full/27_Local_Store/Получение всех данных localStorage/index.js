// function getDiff(startDate, endDate) {
//   const start = Date(endDate).getTime();
//   const end = Date(startDate).getTime();
//   const resDate = Math.abs(start - end);

//   // const years = Math.floor(resDate / 31104000000);
//   // const months = Math.floor((resDate / 2592000000) % 12);
//   const days = Math.floor((resDate / 86400000) % 30);
//   const hours = Math.floor((resDate / 3600000) % 24);
//   const minutes = Math.floor((resDate / 60000) % 60);
//   const seconds = Math.floor((resDate / 1000) % 60);

//   console.log(days);
//   console.log(hours);
//   console.log(minutes);
//   console.log(seconds);

//   return `${days}d ${hours}h ${minutes}m ${seconds}s`;
// }

// const date1 = new Date('December 4, 2021 03:24:00');
// const date2 = new Date('December 4, 2021 03:24:00');

// console.log(getDiff(date1, date2));

function getDiff(startDate, endDate) {
  const daysMs = 86400000;
  const hoursMs = 3600000;
  const minutesMs = 60000;
  const secondsMs = 1000;

  // const start = Date(endDate).getTime();
  // const end = Date(startDate).getTime();
  let res = Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime());

  const days = Math.floor(res / daysMs);
  res -= days * daysMs;
  const hours = Math.floor(res / hoursMs);
  res -= hours * hoursMs;
  const minutes = Math.floor(res / minutesMs);
  res -= minutes * minutesMs;
  const seconds = Math.floor(res / secondsMs);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const date1 = new Date('December 4, 2021 03:24:00');
const date2 = new Date('December 4, 2021 02:24:00');

console.log(getDiff(date1, date2));
