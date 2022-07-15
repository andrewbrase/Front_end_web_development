var hot = false;
var temp = prompt("what temp is it outside?")

if (temp>=80) {
    alert("it is hot")
    hot = true
    console.log("temp is hot")
}else if (temp<80 && temp>=50){
    alert("it is normal")
    console.log("temp is normal")
}else if (temp<80 && temp>32){
    alert("it is cold")
    console.log("temp is cold")
}else{
    alert("it is freezing")
    console.log("it is freezing")
}

if (hot == true){
    alert("var hot is true")
    console.log("var hot is true")
}