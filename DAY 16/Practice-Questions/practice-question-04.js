// Question = For the given start state of an array, change it to final from using methods.
// start: ['january', 'july', 'march', 'august'];
// final: ['july', 'june', 'march', 'august'];

let months = ["january", "july", "march", "august"];
console.log(months);
months.shift(); // for delete "january"
months.shift(); // for delete "july"
months.unshift("july", "june");
console.log(months);
