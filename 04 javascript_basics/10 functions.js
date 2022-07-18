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

// using return within a function to return that value provided to be assigned to a var and used in another func/method

function timesFive(numInput){
    var result = numInput * 5;
    //  the result variable is only defined within this function, the res variable is defining it globally
    return result;
}

var res = timesFive(prompt("choose a number to multiply by 5"));
alert(res);

// scope - how objects and variables are defined within JS - if a variable is only defined within a function - then its scope is only limited to that function