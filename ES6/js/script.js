

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numberStart = 4;
const numberEnd = 12;


const counter = (array, start, end) => {
  const listNumber = [];
  for(let i = start; i <= end; i++) {
    listNumber.push(arrayNumber[i]);
  }
  return listNumber;
};

const result = counter(arrayNumber,numberStart, numberEnd);
console.log(result);
