console.log("While loop");
// **************************** Loops ****************************
// *************** 2). While loop ***************
// While loop = it's same work like "for loop" we can perform any task which also performed with the help of "for loop" but it's syntax and usase is something diffrent.

// both loop "for loop & while loop" have diffrent usase in programming. like this =   
// 1). when ever we want to update any number then we preffer "for loop"
// 2). when we deal with another condition where most number is not involved then we preffer while loop. 

// syntax = 
// while (condition) {
    // do something

    // Updation     
// }

// note - in the while loop we have to create variable out side of while loop. 

// Example = 
// 1).
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// 2). we can also write table of any number like this 
let n = 3;
console.log("table of",n);
let j = n;
while (j <= n*10) {
    console.log(j);
    j+=n;
}

// 3). we can also write table of any number by take user input like this =  
let num = prompt("please enter the number for write their table:");
console.log(`Table of ${num} by user input`);
num = parseInt(num);
let k = num;
while(k <= num*10 ){
    console.log(k);
    k+=num;
}

// 4) Print all even number (2 to 20) using while loop.
console.log("Even numbers between 2 to 20:");
let l = 2;
while (l <= 20) {
    console.log(l);
    l+=2;
}

// We can also print this number in backward way
console.log("In backword way to print even number between 20 to 2");
let m = 20;
while (m >=2 ){
    console.log(m);
    m-=2;
}

// 5). Print all odd number between 1 to 25
console.log("Odd numbers between 1 to 25:");
let x = 1;
while (x <= 25) {
    console.log(x);
    x+=2;
}

// We can also print this number in backward way
console.log("In backword way to print odd number between 25 to 1");
let y = 25;
while (y >= 1) {
    console.log(y);
    y-=2;
}