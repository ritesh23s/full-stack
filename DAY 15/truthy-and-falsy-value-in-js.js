// Truthy and Falsy valuein javaScript
// = Everything in JS is true and false (in boolean context).
// = This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.
// = In the javaScript everything has their won boolean value 

// Here Falsy value in javaScript =
// false, 0, -0, on(Bight value), ""(empty string), null, undefined, NaN.

// Truthy values in javaScript = 
// Everything else have truthy value except this = false, 0, -0, on(Bight value), ""(empty string), null, undefined, NaN 

// true
if (true){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// false
if (false){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// 0
if (0){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// -0
if (0){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// 1
if (1){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// -1
if (-1){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// ""(Empty String)
if (""){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// " " (Not an empty string)
if (" "){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// null
if (null){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// NaN
if (null){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// undefined
if (undefined){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// shubh
if ("shubh"){
    console.log("It has true value");
} else{
    console.log("It has false value");
}

// We can check easily is our variable empty or not with the help of these codes 
// check with ""(Empty) and " "(Not empty)

let str = ""; // we can use both ""(Empty) and " "(Not empty)
if (str){
    console.log("Not an empty string");
} else{
    console.log("Empty string");
}

// We can also check our number truthy and falsy value

let num = 0; // we can use 0,-0,1,-1
if (num){
    console.log("num is not equal to 0");
} else{
    console.log("num is equal to 0");
}
