let stdTrainedEveryMonth = document.getElementById(
  "aka-std-trained-every-month"
);

let certicateTrainingCount = document.getElementById(
  "aka-certificate-training"
);

let courcesAdded = document.getElementById("aka-cources-add");

let stdTrained = 10000;
let stdcount = setInterval(function () {
  stdTrained = stdTrained + 50;
  if (stdTrained <= 30000) {
    stdTrainedEveryMonth.innerHTML = stdTrained + "+";
  } else {
    clearInterval(stdcount);
  }
  console.log(stdTrained);
}, 1);

let certified = 0;
let certificatecount = setInterval(function () {
  certified = certified + 10;
  if (certified <= 200) {
    certicateTrainingCount.innerHTML = certified + "+";
  } else {
    clearInterval(certificatecount);
  }
  console.log(certified);
}, 100);


let courceAdd = 0;
let courcesAddCount = setInterval(function () {
    courceAdd = courceAdd + 150;
  if (courceAdd <= 3400) {
    courcesAdded.innerHTML = courceAdd + "+";
  } else {
    clearInterval(courcesAddCount);
  }
  console.log(courceAdd);
}, 100);