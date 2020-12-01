// /jsnack 3
// //Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var arrayNumber = [numberStart, numberEnd];
var numberStart = 4;
var numberEnd = 12;

var result = counter(numberStart, numberEnd);

console.log(result);


function counter(start, end) {
  var listNumber = [];
  for (var i = start + 1; i <= end - 1; i++) {
  listNumber.push(i);
  }
  return listNumber;
}
