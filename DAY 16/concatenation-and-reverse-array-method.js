// ******************************** Array ********************************
// ************************ Array Methods ************************
// ******** Array others Methods ********

// ****** 3). comcatenation array method******
// concat = it's merge or add two arrays linearly.
// note = it's returns an new array after merge or add.
// syntax = firsArray.concat(secondArray);
// Example = 
let names = ["shubham", "manisha", "anshu", "riya", "amit"];
let codes = ["js101", "html202", "css303", "py404", "sql505"];
let nameAndCodes = names.concat(codes);
console.log(nameAndCodes);
// output = ['shubham', 'manisha', 'anshu', 'riya', 'amit', 'js101', 'html202', 'css303', 'py404', 'sql505']

// ****** 4). reverse array method******
// reverse = it's reverse an array with same sequence
// note = it's reverse the original array
// Example = 
let animals = ["dog", "cat", "elephant", "tiger", "lion"];
console.log(animals);
// output = ['dog', 'cat', 'elephant', 'tiger', 'lion']
console.log(animals.reverse());
// output = ['lion', 'tiger', 'elephant', 'cat', 'dog']

// it's reverse the original array = now if we print "animals" then 
console.log(animals); // output = ['lion', 'tiger', 'elephant', 'cat', 'dog']
