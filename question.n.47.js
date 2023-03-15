// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// bug --> used String inseated of array
myArray.unshift("['Paul',35]");

// Only change code below this line
console.log(myArray)


//Answer

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(['Paul',35]);

// Only change code below this line
