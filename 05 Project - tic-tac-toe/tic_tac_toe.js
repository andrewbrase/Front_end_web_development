var boxone = document.querySelector("#b1");
var boxtwo = document.querySelector("#b2");
var boxthree = document.querySelector("#b3");
var boxfour = document.querySelector("#b4");
var boxfive = document.querySelector("#b5");
var boxsix = document.querySelector("#b6");
var boxseven = document.querySelector("#b7");
var boxeight = document.querySelector("#b8");
var boxnine = document.querySelector("#b9");
var playerTurnH2 = document.querySelector("#currentplayer")

var resBut = document.querySelector("#reset")
var allBox = document.getElementsByTagName("td")

var markValue = 2;

function mark(){
    if (markValue % 2 == 0){
        markValue += 1;
        playerTurnH2.textContent = "It's player 2's turn (O)"
        return "X"
    }else{
        markValue += 1;
        playerTurnH2.textContent = "It's player 1's turn (X)"
        return "O"
    }
}

// SQUARE ONE
boxone.addEventListener("mouseover",function(){
    boxone.style.backgroundColor = "green";
    boxone.addEventListener("click",function(){
        if (boxone.textContent === " "){
        boxone.textContent = mark()
        }
    })
})
boxone.addEventListener("mouseout",function(){
    boxone.style.backgroundColor = "#d4d4d4";
})
//
// SQUARE TWO
boxtwo.addEventListener("mouseover",function(){
    boxtwo.style.backgroundColor = "green";
        boxtwo.addEventListener("click",function(){
            if (boxtwo.textContent === " "){
            boxtwo.textContent = mark()
        }
    })
})
boxtwo.addEventListener("mouseout",function(){
    boxtwo.style.backgroundColor = "#d4d4d4";
})

//
// SQUARE THREE
boxthree.addEventListener("mouseover",function(){
    boxthree.style.backgroundColor = "green";
    boxthree.addEventListener("click",function(){
            if (boxthree.textContent === " "){
            boxthree.textContent = mark()
        }
    })
})
boxthree.addEventListener("mouseout",function(){
    boxthree.style.backgroundColor = "#d4d4d4";
})

//
// SQUARE FOUR
boxfour.addEventListener("mouseover",function(){
    boxfour.style.backgroundColor = "green";
    boxfour.addEventListener("click",function(){
        if (boxfour.textContent === " "){
        boxfour.textContent = mark()
        }
    })
})
boxfour.addEventListener("mouseout",function(){
    boxfour.style.backgroundColor = "#d4d4d4";
})

// 
// SQUARE FIVE
boxfive.addEventListener("mouseover",function(){
    boxfive.style.backgroundColor = "green";
    boxfive.addEventListener("click",function(){
        if (boxfive.textContent === " "){
        boxfive.textContent = mark()
        }
    })
})
boxfive.addEventListener("mouseout",function(){
    boxfive.style.backgroundColor = "#d4d4d4";
})

// 
// SQUARE SIX
boxsix.addEventListener("mouseover",function(){
    boxsix.style.backgroundColor = "green";
    boxsix.addEventListener("click",function(){
        if (boxsix.textContent === " "){
        boxsix.textContent = mark()
        }
    })
})
boxsix.addEventListener("mouseout",function(){
    boxsix.style.backgroundColor = "#d4d4d4";
})

// 
// SQUARE SEVEN
boxseven.addEventListener("mouseover",function(){
    boxseven.style.backgroundColor = "green";
    boxseven.addEventListener("click",function(){
        if (boxseven.textContent === " "){
        boxseven.textContent = mark()
        }
    })
})
boxseven.addEventListener("mouseout",function(){
    boxseven.style.backgroundColor = "#d4d4d4";
})

// 
// SQUARE EIGHT
boxeight.addEventListener("mouseover",function(){
    boxeight.style.backgroundColor = "green";
    boxeight.addEventListener("click",function(){
        if (boxeight.textContent === " "){
        boxeight.textContent = mark()
        }
    })
})
boxeight.addEventListener("mouseout",function(){
    boxeight.style.backgroundColor = "#d4d4d4";
})

// 
// SQUARE NINE
boxnine.addEventListener("mouseover",function(){
    boxnine.style.backgroundColor = "green";
    boxnine.addEventListener("click",function(){
        if (boxnine.textContent === " "){
        boxnine.textContent = mark()
        }
    })
})
boxnine.addEventListener("mouseout",function(){
    boxnine.style.backgroundColor = "#d4d4d4";
})

// RESET BUTTON
resBut.addEventListener("mouseover",function(){
    resBut.style.backgroundColor = "green";
    resBut.addEventListener("click",function(){
        for (var item in resBut){
        item.textContent = " "
        }
    })
})

resBut.addEventListener("mouseout",function(){
    resBut.style.backgroundColor = "#d4d4d4";
})