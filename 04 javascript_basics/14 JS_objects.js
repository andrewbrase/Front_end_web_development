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

// for (key in carInfo){
//     // there is no order in objects --> sometimes the order might be different
//     alert(key)
for (k in carInfo){
// grabbing keys
console.log(k)
// grabbing values
console.log(carInfo[k])
}
// }
