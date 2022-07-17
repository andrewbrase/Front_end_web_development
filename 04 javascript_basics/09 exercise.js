var firstName= prompt("what is your first name").toUpperCase()
var lastName= prompt("what is your last name").toUpperCase()
var age= prompt("what is your age")
var tall= prompt ("how tall are you in cm?")
var petName= prompt("what is the name of your pet").toUpperCase()
var lenval = petName.length

// JavaScript's toUpperCase() method converts a string 
// object into a new string consisting of the contents 
// of the first string

if (firstName[0] === lastName[0]){
    if (age > 20 && age < 30){
        if (tall > 169){
            if (petName[lenval - 1] === "Y"){
                console.log("secret message");
            }
        }
    }
}