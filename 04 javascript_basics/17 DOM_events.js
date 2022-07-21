var headOne = document.querySelector("#one");
var headTwo = document.querySelector("#two");
var headThree = document.querySelector("#three");
var headFour = document.querySelector("#test");

headOne.addEventListener("mouseover",function(){
    // this is where you can define the function - what will happen when you mouseover
    headOne.textContent = "Mouse currently over";
    headOne.style.color = "green";
})

// how to get the text to change back after you hover off of it
headOne.addEventListener("mouseout",function(){
    headOne.textContent = "Hover over me";
    headOne.style.color = "black";
})

// making the text change as well as color upon click
blueOrBlack = 0
headTwo.addEventListener("click",function(){

function changeBluOrBlack(){

    if (blueOrBlack === 0){
        headTwo.textContent = "Clicked on";
        headTwo.style.color = "blue";
        return 1
    }else if(blueOrBlack === 1){
        headTwo.textContent = "Click me";
        headTwo.style.color = "black";
        return 0
    }
}

blueOrBlack = changeBluOrBlack()

})

// double click
headThree.addEventListener('dblclick',function(){
    headThree.textContent = "This was double clicked"
})