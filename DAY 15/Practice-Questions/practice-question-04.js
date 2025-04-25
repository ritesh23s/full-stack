// Question = Predict the output of following code:

let num = 12;
if ((num%3 === 0) && ( (num+1 === 15) || (num-1 === 11) ) ) {
    console.log("Safe");
}else{
    console.log("unsafe");
}


// Answer = We get output "Safe" because,

// (num%3 === 0) = T, (num+1 === 15) = F, (num-1 === 11)
// T && (F || T) =   = T

// thats means we have T || T = T (true)
// so , here we get Output = console.log("Safe"); which is inside of if statement
