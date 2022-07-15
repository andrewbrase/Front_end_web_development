alert("while loops")

var x = 0;

while (x < 5){
    console.log("x is currently " + x);

    if (x===3){
        console.log("x is equal to three");
        break
        // this will break out of the top level loop that it is in
    }
    console.log("x is still less than 5, adding 1 to x");
    x = x+1;
}

console.log("x is now " + x)

var num = 1;

while(num < 11){
    if (num % 2 == 0){
        console.log(num);
    }
    num = num + 1
}