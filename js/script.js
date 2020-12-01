// /jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var numberStart = 4;
var numberEnd = 12;

var result = counter(numberStart, numberEnd);

console.log(result);


function counter(start, end) {
  var listNumber = [];
  for (var i = start; i <= end; i++) {
    listNumber.push(arrayNumber[i]);
  }
  return listNumber;
}
