// ******************************** Array ********************************
// ************************ Array Methods ************************
// ******** Array others Methods ********

// ****** 5). slice array method******
// slice = copies a portion of an array
// Returns a part of the original array as a new array. 
// = in the slice we pass two arguments (starting index and ending index+1)
// note - ending index is not included 
// syntax = arrayName.slice(starting index , ending index);
// Example = 
// 1).
let books = ["harry potter", "sherlock holmes", "inferno", "1984", "the alchemist"];
console.log(books); // output = ['harry potter', 'sherlock holmes', 'inferno', '1984', 'the alchemist']
let newBooks = books.slice();
console.log(newBooks); // output = ['harry potter', 'sherlock holmes', 'inferno', '1984', 'the alchemist'] 
// here we see that if we don't passing any arguments then it's return a copy of this array. means slice method always returs copies a parts of an array.

// if we pass two argument like this = 
let anotherBooks = books.slice(1, 5);
console.log(anotherBooks); // output = ['sherlock holmes', 'inferno', '1984', 'the alchemist']


// if we pass a single argument like this =
// in this format we can pass a (index) arguments after that slice method by default assumed that the ending index is array length.
console.log(books.slice(3));
// output = ['1984', 'the alchemist']


// if we pass a negative value in argument like this 
console.log(books.slice(-3)); // output = ['inferno', '1984', 'the alchemist']
// means slice is convert this -3 = (total lenght of array - 3) and return the converted index array. "books.slice(lenght - index)"
