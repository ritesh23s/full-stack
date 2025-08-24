// ******************************** Array ********************************
// ************************ Array Methods ************************
// ******** Array Popular Methods ********
// There are some special and popular method of array method.
// 1). Push: add to end.
// 2). Pop = delete from end & returns it.
// 3). Unshift: add to start.
// 4). Shift: delete from start & returns it.

// ******** 1). Push(add to end) ********
// 1). Push(add to end): with the help of push method we can add the element inside an array at the last index.
// Syntax = arrayName.push(element);
// Example = ]
// 1).
let cars = ["aulto", "Scorpio", "BMW"];
console.log(cars); // output = ['aulto', 'Scorpio', 'BMW']
// here we add "xuv" inside cars array like this 
cars.push("xuv");
console.log(cars); // output = ['aulto', 'Scorpio', 'BMW', 'xuv'] 

// here we also adding "maruti" inside cars array like this  
cars.push("maruti");
console.log(cars); // output = ['aulto', 'Scorpio', 'BMW', 'xuv', 'maruti']

// We can also add multiple elements with the help of push method inside an array at the last index lenearly like this = 
cars.push("toyota", "audi", "KIA");
console.log(cars); // output = ['aulto', 'Scorpio', 'BMW', 'xuv', 'maruti', 'toyota', 'audi', 'KIA']


// ******** 2). Pop(delete from end & returns it) ********
// 2). Pop(delete from end & returns it) = with the help of pop method we can delete element inside an array from the last index and it's also returns deleted elements.
// syntax = arrayName.pop();
// Example = 
// 1). use like this pop method
let toys = ["drone", "robot dog", "teddy bear", "cube", "RC car"];
console.log(toys); // output = ['drone', 'robot dog', 'teddy bear', 'cube', 'RC car']
// we can delete end element of "toys" array using pop method like this = 
toys.pop();
// output = delet the last index of array and returns the deleted elemtnts = "RC car"
// then print the toys 
console.log(toys); // output = ['drone', 'robot dog', 'teddy bear', 'cube']

// if we want to also store deleted value then we can store deleted (returns) value inside an variable like this = 
// deletedVaueOftoys = toys.pop(); //
// // output = delet the last index of array and returns the deleted elemtnts = "RC car"
// console.log(deletedVaueOftoys);
// // output = RC car
// console.log(toys); // after that we see output = ['drone', 'robot dog', 'teddy bear', 'cube']



// ******** 3). Unshift(add to start) ********
// 3). Unshift(add to start) = with the help of unshift method we can add the element inside an array at the first index.
// Syntax = arrayName.unshift(element);
// Example = 
// 1).
let bikes = ["BMW", "yamaha", "kawasaki", "bajaj"];
console.log(bikes); // output = ['BMW', 'yamaha', 'kawasaki', 'bajaj']
// here we add the "hero" inside bikes array like this = 
bikes.unshift("hero");
console.log(bikes); // output = ['hero', 'BMW', 'yamaha', 'kawasaki', 'bajaj']

// We can also add multiple elements with the help of unshift method inside an array at the first index lenearly like this = 
bikes.unshift("Royal Enfield", "TVS");
console.log(bikes); // output = ['Royal Enfield', 'TVS', 'hero', 'BMW', 'yamaha', 'kawasaki', 'bajaj']



//  ******** 4). Shift(delete from last & returns it) ********
// 4). Shift(delete from last & returns it) = with the help of pop method we can delete element inside an array from the first index and it's also returns deleted elements.
// Syntax = arrayName.shift();
// Example = 
// 1). use like this pop method
let fruits = ["apple","mango", "banana", "orange", "grapes"];
console.log(fruits); // output = ['apple', 'mango', 'banana', 'orange', 'grapes']
// we can delete first element of "fruits" array using pop method like this = 
fruits.shift(); 
// output = delet the first index of array and returns the deleted elemtnts = "apple"
// then print the toys 
console.log(fruits); // output = ['mango', 'banana', 'orange', 'grapes']

// // if we want to also store deleted value then we can store deleted (returns) value inside an variable like this = 
// deletedVaueOfFruits = fruits.shift();
// // output = delet the first index of array and returns the deleted elemtnts = "apple"
// console.log(deletedVaueOfFruits);
// // output = apple
// console.log(fruits); // after that we see output = ['mango', 'banana', 'orange', 'grapes']

// quistion depend on shift method
console.log("Question 01");
// question - 01). write a program for block a follower and store delete follower username.
let followersUrername = ["anam_023", "amit_234", "anil_54", "chandan_005"];
console.log(followersUrername);
blockedFollowers = followersUrername.shift();
console.log(`Blocked account: ${blockedFollowers}`);
console.log(followersUrername);