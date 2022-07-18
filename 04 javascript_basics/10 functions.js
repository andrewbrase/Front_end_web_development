// function helloName(name){
//     alert("hello " + name);
// }

// helloName(prompt("what is your name?"))

// // 

// first = parseInt(prompt("pick a number"))
// second = parseInt(prompt("pick another number"))

// function addNum(num1,num2){
//     alert(num1+num2);
// }

// addNum(first,second)

// // how to use arguments or param that are default values

// function helloSomeone(name="default name"){
//     alert("hello " + name);
// }

// helloSomeone()

// // returning values

// function formal(name="andrew",title="sir"){
//     alert(title + " " + name)
// }

// formal()

// // "welcome" + formal() --> undefined
// // the function isn't actually returning anything - 
// // it needs to return something if you want to assign 
// // it to a variable

// // all the function was doing before was alerting -
// //  not returning a value to be used again

// function returnFormal(name="andrew",title="sir"){
//     return(title + " " + name)
// }

// alert("welcome " + returnFormal())


// 
// 
// 

// function timesFive(numInput){
//     var result = numInput * 5
//     return result
// }

// res = timesFive(prompt("choose a number to multiply by 5"))
// alert(res)

// test if typeof

val1 = prompt("enter a number")
val2 = prompt("enter another number")

new1 = parseInt(val1)
new2 = parseInt(val2)

alert(new1)
alert(new2)

function testtype(first,second){
    if (typeof(first) !== "NaN" && typeof(second)!== "NaN"){
        alert(first+second)
    }else{
        alert("sorry, those were not numbers")
    }
}

testtype(new1,new2)