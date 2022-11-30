// vd: setTimeout(function () {
//   console.log(1);
// }, 1000);

// Sync(đồng bộ)
// Đồng bộ: (1) log ra xong mới log (2)

// Async (bất đồng bộ)
// setTimeout, setInterval, fetch, XMLHttpRequest, file reading, requestAnimationFrame

// console.log(2);
// Bất đồng bộ: (1) log ra sau (2)

// Example: var promise = new Promise(
//   Excutor
//   function (resolve, reject) {
//     resolve ( success)
//     reject ( fail)
//   }
// );

// promise.then(fuction() {
// }).then()

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return sleep(1000);
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  });
