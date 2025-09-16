// **************************** Loops ****************************
// *************** 1). For loop ***************
// *************** Nested for loop ***************
// nested for loop = A nested for loop is when one loop runs inside another loop, and the inner loop executes fully for each iteration of the outer loop.
// Example =
// 1).
for (let i = 1; i <= 3; i++) {
    console.log("outer loop iteration", i);
    for (let j = 2; j <= 10; j += 2) {
        console.log(j);
    }
}

// 2).
console.log("Create a patern using nested for loop")

let n = 6;
for (let i = 1; i<=n; i++) {
    let row = "";
    for (let j = 1; j<=i; j++) {
        row += "*";
    }
    console.log(row);
}


// Practical way to printing this = 
// 1
// 12
// 123
// 1234
// 12345

let x = 5;
for ( let i = 1; i <= x; i++ ){
    console.log("outer loop iteration", i);
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}

// now code for this pattern 

for ( let i = 1; i <= x; i++) {
    let row = "";
    for ( let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}

// This means when the outer loop runs one time, the inner loop executes completely.
// After the inner loop finishes, the outer loop updates and moves to its next iteration
