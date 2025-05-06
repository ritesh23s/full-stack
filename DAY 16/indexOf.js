// ***************** String Method *****************

// ************** String Methods With Arguments **************

// 1).IndexOf = Returns the "first index of occurrence" of some value in string. or gives -1 if not found.

// = infexOf method return index number if we want to search anything in the string where which is persents. indexOf method return their index. 

// Example = 
// 1).
let myStr = "ILoveCoding";
console.log(myStr.indexOf("Love")); 
//output = 1 (give first index of love)

console.log(myStr.indexOf("j")); 
//output = -1(not found)

console.log (myStr.indexOf("o"));
//output = 2(only 1 index)

console.log (myStr.indexOf("I")); 
//output =  0

// 2).

let msg = "ILovejavaScript";
console.log(msg.indexOf("Love"));
console.log(msg.indexOf("javaScript"));
console.log(msg.indexOf("q"));
console.log(msg.indexOf("S"));
console.log(msg.indexOf("a"));

