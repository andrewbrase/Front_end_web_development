function helloName(name){
    alert("hello " + name);
}

helloName(prompt("what is your name?"))

// 

first = parseInt(prompt("pick a number"))
second = parseInt(prompt("pick another number"))

function addNum(num1,num2){
    alert(num1+num2);
}

addNum(first,second)

// how to use arguments or param that are default values

function helloSomeone(name="default name"){
    alert("hello " + name);
}

helloSomeone()