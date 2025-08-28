// ******************************** Array ********************************
// ************************ Array Methods ************************
// ******** Array others Methods ********

// ****** 6). splice array method******
// splice(remove/replace/add elements in place) = with the help of splice we can perform multiple things on an array like - remove the elements, replace the elements and add the elements in place.
// means splice is all in one tools for remove, replace, and add elements in place
// format to used splice = we have three parameters inside splice method. 
// Syntax = array.splice(start, deleteCount, item0, item1, ...itemN)
// Where we passing these Parameters:
// 1) start        -> index where changes start
// 2) deleteCount  -> (optional) how many elements to delete from 'start' index
// 3) item0...itemN -> (optional) elements to add at 'start' index
//
// Note:
// - splice() changes the original array
// - splice() returns an array of removed elements (very useful)
// - splice() does not return added or replaced elements (only removed ones)

// Example = 
// 1).
let brands = ["nike", "adidas", "apple", "samsung", "sony", "vivo", "oppo", "realme", "motorola"];
console.log(brands);

// removing
let returnsElementsBySplice = brands.splice(0,4); // to store returns elements after splice.
console.log(returnsElementsBySplice); //output = ['nike', 'adidas', 'apple', 'samsung']
// and if now print the "brands" then we see remain elements of "brands" array after spliced (brands.splice(0,4)). 
console.log(brands); // output = ['sony', 'vivo', 'oppo', 'realme', 'motorola']

// adding
console.log(brands.splice(0, 0, "infnix")); // output = [] empty element because it's don't returns added element it's only returns deleted or removed elements.

// now if we print "brands" array after spliced (brands.splice(0, 0, "infnix")) then we see that = element "infnix" was added in "brands" array.
console.log(brands); // output =  ['infnix', 'sony', 'vivo', 'oppo', 'realme', 'motorola']


// replacing
// Here we want to replace "onepluse" at the index of "oppo" then replace like this 
console.log(brands.splice(3, 1, "onepluse")); //here deleteCount = 1 and output = ['oppo'] which is deleted element.

// and now we print the "brands" array then we see 
console.log(brands); // output = ['infnix', 'sony', 'vivo', 'onepluse', 'realme', 'motorola']

// we can also passed a single agrument in splice
console.log(brands.splice(4)); // here its returns output =  ['realme', 'motorola'] beacause it's deleted ('realme', 'motorola') from the 4th index of "brands" array. 

// now if we print the "brand" array then we see that 
console.log(brands); // output = ['infnix', 'sony', 'vivo', 'onepluse']

