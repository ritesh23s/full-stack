// ***************** String Method *****************
// ************** String Methods With Arguments **************

// 3).slice = Returns a part of the original string as a new string. 
// = in the slice we pass two arguments (starting index and ending index+1)
// note - ending index is not included 
// Example = 

// 1).
let str = "ILoveNodejs";
let newStr = str.slice(5,11);
console.log(newStr);
// we get output = Nodejs

// There is an  another form of slice = 
// in this format we can pass a index arguments after that slice method by default assumed that the ending index is string length.
let anotherNewStr = str.slice(5);
console.log(anotherNewStr);
// we get output = Nodejs

console.log(str.slice(1, 5));
// we get output  = Love

console.log(str. slice(1,12));
// we get output = LoveNodejs


// there are another diffrent way to passing arguments in slice method 
// 1). we can also pass a single argument like this 

console.log(str.slice(5)); // we give only starting index
// we get output = Nodejs // its assumed string ending index is string length

// 2). In the slice is a special thing we can pass the negative value like this =  
console.log(str.slice(-6)); 
// we get output = Nodejs
// slice is convert this -6 = (total lenght of string - 6) and return the converted index string. "str.slice(lenght - index)"

// 11 - 6 = 5(here assumed that passed 5 index so its slice "ILove" and return Node js)

