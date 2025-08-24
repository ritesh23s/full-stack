// ******************************** Array ********************************
// ************************ Array Methods ************************
// ******** Array others Methods ********

// ******** 1). IndexOf array method ********
// indexOf = returns index of something.
// infexOf method returns the "first index of occurrence" of some value in string. or gives -1 if not found.

// infexOf method return (index number) if we want to search anything in the array where which is persents. indexOf method return their index. 

// syntax = arrayName.indexOf(value);
// Example = 
let cities = ["patna", "mumbai", "gorakhpur", "lucknow"];
console.log(cities.indexOf("gorakhpur"));
// output = 2 (returns 3rd element)

console.log(cities.indexOf("patna"));
// output = 0 (returns 1st element)

console.log(cities.indexOf("lucknow"));
// output = 3 (returns 4th element)

// Returns -1 if the element is not found.

console.log(cities.indexOf("delhi"));

