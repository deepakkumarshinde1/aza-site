let stdTrainedEveryMonth = document.getElementById(
  "aka-std-trained-every-month"
);

let certicateTrainingCount = document.getElementById(
  "aka-certificate-training"
);

let courcesAdded = document.getElementById("aka-cources-add");

let stdTrained = 5000;
let stdcount = setInterval(function () {
  stdTrained = stdTrained + 50;
  if (stdTrained <= 10000) {
    stdTrainedEveryMonth.innerHTML = stdTrained + "+";
  } else {
    clearInterval(stdcount);
  }
  console.log(stdTrained);
}, 100);

let certified = 0;
let certificatecount = setInterval(function () {
  certified = certified + 2;
  if (certified <= 200) {
    certicateTrainingCount.innerHTML = certified + "+";
  } else {
    clearInterval(certificatecount);
  }
  console.log(certified);
}, 100);


let courceAdd = 0;
let courcesAddCount = setInterval(function () {
    courceAdd = courceAdd + 200;
  if (courceAdd <= 15000) {
    courcesAdded.innerHTML = courceAdd + "+";
  } else {
    clearInterval(courcesAddCount);
  }
  console.log(courceAdd);
}, 100);