let showTime = (msg) => {
  let dt = new Data();
  console.log(
    '${msg} 현재시간: ${dt.getHoure()}시 ${dt.getMinutes()}분 ${dt.getSeconds()}초',
  );
};
console.log('<<시작>>');
setTimeout(() => {
  console.log('3초후');
}, 3000);
setTimeout(() => {
  console.log('5초후');
}, 5000);
setTimeout(() => {
  console.log('7초후');
}, 7000);
console.log('<<종료>>');
