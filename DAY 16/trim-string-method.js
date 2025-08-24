// ***************** String Method *****************

// 1). Trim method = Trim method is "trims" whitespaces(extra spaces) from string's "start and end of string" and returns a new one. 

// syntax = stringName.trim()

// Example = 

// 1).
let msg = "     hello     ";

msg.trim();
console.log(msg); 
// here we see output = .......hello....... ( actual value of this string lert str = "     hello     ")
console.log(msg.trim());
// here we see output =  hello (trimed string which trim method return new one)

// note = .trim method only remove start and end whitespaces of a string it's not remove middle whitespaces of string.

// 2).
let pass = prompt ("Set your password");
let newPass = pass.trim(); // here we trim pass for remove white spaces start & end 
console.log(newPass);
// if we print "newPass" then we get output without whitespaces

// console.log(pass);
// if here we print "pass" then we get output with whitspaces


// Special thing of .trim method = we see that .trim don't remove whitespaces from old string its always return a new string whith the new changes.  