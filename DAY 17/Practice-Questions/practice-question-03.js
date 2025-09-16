console.log("practice-question-03");
// Question = Print the multiplication table of 5
for (i = 5; i<=50; i+=5) {
    console.log(i);
}

// we can also print any number multiplication table take input by user like this 
console.log("print any number multiplication table");


let num = Number(prompt("Please enter the number for print theis multiplication table:"));
// here we can also using parseInt() method for convert string into number like this 
// num = parseInt(num);
for ( i = 1; i<=10; i++) {
    console.log(num * i);
}
// We can also write this program like this 
console.log("write the program like another way")
for (i = num; i <= num*10; i += num) {
    console.log(i);
}

// If we don't get a valid input in prompt (Cancel or empty input), 
// then "prompt()" returns either null (Cancel) or "" (empty string).
// Converting them to number gives 0.
// So, num = 0 → loop becomes for (i = 0; i <= 0; i += 0)
// At this point, i += 0 does not change the value of i (it stays 0).
// Condition i <= 0 is always true, so the loop never ends → Infinite loop → Browser hangs.
