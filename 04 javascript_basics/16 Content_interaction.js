// myvariable.textContent - This returns just the text
var p = document.querySelector('p')
p.textContent = "new text";
// if you want to use tags instead of just changing the text to actual brackets
// ex. <strong>
p.innerHTML = "<strong> this is bold </strong>"

// grab everything with the special id
var special = document.querySelector("#special")
// kind of like doing a double index["#special"]["a"]
var specialA = special.querySelector("a")

// gets the fb link
specialA.getAttribute("href")

// if you want to change the attribute you need to use the 
// set attribute

//                     value you want to change, what you want to change it to
specialA.setAttribute("href","https://www.amazon.com")
