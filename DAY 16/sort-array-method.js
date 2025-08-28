// ******************************** Array ********************************
// ************************ Array Methods ************************
// ******** Array others Methods ********

// ****** 7). sort array method******
// sort(short an array) = whith the help of we can sort an array in the form of ascending or desending order. it's returns original array with sorted form.
// syntax = arrayName.sort();
// note = 1). sort method returns by-default in ascending order
//        2). sort method working - first of all it's conver the given valut to string then sort it.
// Example = 
// 1).
let subjects = ["math", "physics", "chemistry", "biology", "history", "computer"];
console.log(subjects);  // output = ['math', 'physics', 'chemistry', 'biology', 'history', 'computer']

// now sort the "subjects" array like this 
console.log(subjects.sort()); //['biology', 'chemistry', 'computer', 'history', 'math', 'physics']
// here we see that the sort method sort the array ascending order (a to z) 

// 2).
let marks = [55, 78, 77, 25, 14, 51, 54, 45, 101, 125];
console.log(marks);

// now we sort the "marks" array
console.log(marks.sort()); // here we see output = [101, 125, 14, 25, 45, 51, 54, 55, 77, 78]

// means this output not in ascending or descending order beaause of 
// 2). sort method working - first of all it's conver the given valut to string then sort it. 


// means = the sort method don't work properly on the number datatype it's work properly on the string datatype elements.

// conslusion = 
// we used the sort method when , 1). string persents inside an arary.
//                                2). character persents inside an array.  