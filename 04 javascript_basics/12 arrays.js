// // var country1 = "USA";
// // var country2 = "Germany";
// // var country3 = "China";

// var countries = ["USA",
//                 "Germany",
//                 "China"]

// // accessing elements in an array - the elements are in
// // a sequence that can be indexed

// alert(countries[0]);

// countries[2] = "France";

// alert(countries[2]);

// var word = "andrew"

// word[0] = "A"

// alert(word)
// WORD WILL STILL BE andrew without uppercase A - 
// because a string is immutable in this situation

// the array is mutable - string is immutable

// mixed data types - arrays can have booleans, ints, 
// strings etc differtent data types

// var mixed = [1,"a",false];
// alert(mixed.length) ---> 3

// array methods in JS

var myArr = ['one','two',"three"];

// to add and remove elements in an array
// use the push and pop methods

// var lastItem = myArr.pop()
// alert(lastItem) ---> "three"

myArr.push("four");
// alert(myArr);
// ---> "one" "two" "three" "four"

// how to index last item in array
var lastItemIn= myArr[myArr.length - 1];
alert(lastItemIn);
// ---> "four"

// array iteration
// could use a for loop
// for(var i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }

// also the for of statement
// For Of
for(letter of myArr){
    console.log(letter);
}
// VS PYTHON
// for x in cars:
//   print(x)

// how to pass each item in an array into a function

// for (letter of myArr){
//     alert(letter);

// }

// For Each method
// do not call function alert() -> just alert
myArr.forEach(alert);

// like pythons map() method
// calling a function for every element in the array



// JS
// The push() method adds a new element to an array (at the end):
// The pop() method removes the last element from an array:

// PY 
// append (item): This method is used to add new element at the end of the list.
// pop (index): The method is used to remove item from the list based on index value.
