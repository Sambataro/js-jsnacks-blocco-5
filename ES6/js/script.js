

const arrayNumber = [numberStart, numberEnd];
var numberStart = 4;
var numberEnd = 12;


const counter = (array, start, end) => {
  var listNumber = [];
  for(let i = start + 1; i <= end - 1; i++) {
    listNumber.push(i);
  }
  return listNumber;
};

var result = counter(arrayNumber,numberStart, numberEnd);
console.log(result);
