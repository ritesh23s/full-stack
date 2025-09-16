console.log("Mini game 01 (guess the favorite movie)");
// Question = Create a game for guess by the user of your favorite movie
const favMovie = "bahubali";
let guess = prompt("Please guess the movie");

while ((guess !== favMovie && guess !== "quit") && (guess !== "" && guess !== null)) {
    guess = prompt("You guess wrong movie please try again:");
}

if (guess === favMovie) {
    console.log("congratulations you guess right movie")
} else if (guess === "quit") {
    console.log("You quit the game");
} else {
    console.log("you clicked on cancel or gave an empty input:");
}


// This is professional code of this game
// const favMovie = "bahubali";
// let guess = prompt("Please guess the movie");

// while (guess !== null && guess.trim() !== "" && guess.trim().toLowerCase() !== favMovie && guess.trim().toLowerCase() !== "quit") {
//     guess = prompt("You guessed wrong movie, please try again:");
// }

// if (guess !== null) {
//     let normalizedGuess = guess.trim().toLowerCase();
//     if (normalizedGuess === favMovie) {
//         console.log("Congratulations! You guessed the right movie.");
//     } else if (normalizedGuess === "quit") {
//         console.log("You quit the game.");
//     } else {
//         console.log("You clicked on cancel or gave an empty input.");
//     }
// } else {
//     console.log("You clicked on cancel or gave an empty input.");
// }
