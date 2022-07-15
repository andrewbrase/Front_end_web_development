var hot = false;
var temp = prompt("what temp is it outside?")

if (temp>80) {
    alert("it is hot")
    hot = true
    console.log("temp is greater than 80")
}else if (temp<80){
    alert("it is not hot")
    console.log("temp is less than 80")
}else{
    alert("no info")
    console.log("no info")
}

if (hot == true){
    alert("var hot is true")
}else{

}