var carInfo = {make:"Toyota", year:1990, model:"Camry"}
// // carInfo["make"]
// alert(carInfo["make"]);
// // vs python the keys have quotes around them
// // my_dict = {'name': 'John', 1: [2, 4, 3]}
// var my_dict = {name:"John",1:[2,4,3]};
// // still have to use quotes when indexing them
// alert(my_dict["name"]);

// // when creating the key --> no quotes
// // when calling/indexing --> use quotes

var newJsObj = {a:"hello",b:[1,2,3],c:{inside:['a','b']}}
// alert(newJsObj["a"]); --> hello
// alert(newJsObj["b"][1]) --> 2
// alert(newJsObj["c"]["inside"][0]) --> a

// if you want to change key
// carInfo['year'] = 2006
// alert(carInfo['year']) --> 2006

// console.dir(carInfo)

// -->
// Object
// make: "Toyota"
// model: "Camry"
// year: 1990
// [[Prototype]]: Object

// to iterate through an object
// use a for in

// // for (key in carInfo){
// //     // there is no order in objects --> sometimes the order might be different
// //     alert(key)
// for (k in carInfo){
// // grabbing keys
// console.log(k)
// // grabbing values
// console.log(carInfo[k])
// }
// // }

// Object methods - functions that are inside of an object
// var carInfo = {
//     make:"Toyota",
//     year:1990, 
//     model:"Camry", 
//     carAlert: function(){
//     alert("BEEP");
//     // key is car alert
//     // the value is a function call
//    }
// };

// you can call methods off of objects, they act as functions inside of an object
// use the this keyword
// For a JS Object, the this is set to the object the method is called on

// var myObj = {
//     prop:37,
//     reportProp: function() {
//         return this.prop;
//     }
// };
// console.log(myObj.reportProp()); // logs 37

// !!!
// var newJs = {
//     my_name : "Andrew",
//     conlog : function() {
//         return this.my_name;
//     }
// };
// alert(newJs.conlog()) --> Andrew
// console.log(newJs.conlog()); --> Andrew

// !!!
// var simple = {
//     prop : "Hello",
//     myMethod : function(){
//         alert("The myMethod was called")
//     }
// }

// console.dir(simple)
// simple.myMethod() --> "The myMethod was called"

// to show to use of the this keyword

var myObj_ = {
    name : "Jose",
    greet : function(){
        // this acts as a PY->self but for JS?
        // a method that uses properties of the object that it's in
        console.log("hello " + this.name)
    }
}

myObj_.greet()

// ???
// let allows you to declare variables that are limited to the scope of a block statement,
//  or expression on which it is used, unlike the var keyword, which declares a variable 
//  globally, or locally to an entire function regardless of block scope.

// OOP in JS

// let names = {
//     fname: "Dillion",
//     lname: "Megida"
// }
// console.log(names.fname);
// console.log(names.hasOwnProperty("mname"));
// // Expected Output
// // Dillion
// // false

// VS OOP in Python

// class Parrot:

//     # class attribute
//     species = "bird"

//     # instance attribute
//     def __init__(self, name, age):
//         self.name = name
//         self.age = age