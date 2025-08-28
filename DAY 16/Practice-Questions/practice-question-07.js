// Question = Create a nested array to show the tic-tac-toe game state.
let firstArray = ['X', null, 'O'];
let secondArray = [null, 'X', null];
let thirdArray = ['O', null, 'X'];
let gameArray = [firstArray, secondArray, thirdArray];
console.log(gameArray);


// We can also change the arrays value like this  = 
secondArray.splice(0,1, 'X');
thirdArray.splice(1,1,'X');
firstArray.splice(1,1,'O');

// we can perform this task in diffrent way like this 
// gameArray[1].splice(0,1,'X');
// gameArray[2].splice(1,1,'O');
// gameArray[0].splice(1,1,'O');


