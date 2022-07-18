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

// returning values

function formal(name="andrew",title="sir"){
    alert(title + " " + name)
}

formal()

// "welcome" + formal() --> undefined
// the function isn't actually returning anything - 
// it needs to return something if you want to assign 
// it to a variable

function returnFormal(name="andrew",title="sir"){
    return(title + " " + name)
}

alert("welcome " + returnFormal())