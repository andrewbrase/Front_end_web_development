// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

// decided to display console.log with every action for visibility
var choice = prompt("Do you want to use the web app? Y or N")
if (choice.toUpperCase() === "Y"){
    
    var roster = []

    function addNew(name){
        roster.push(name.toUpperCase())
        display()
    }

    function removeName(name){
        var loc = roster.indexOf(name.toUpperCase())
        if (loc !== -1){
            roster.splice(loc,1);
            display()
        }
        
    }

    function display(){
        console.log(roster)
    }

    var on = true;
    while (on){
        var action = prompt( "please select an action (add, remove, display or quit)")
        if (action.toUpperCase() === "ADD" || action.toUpperCase() === "A"){
            var newname = prompt("please provide a name to add")
            addNew(newname)
        }
        if (action.toUpperCase() === "REMOVE" || action.toUpperCase() === "R"){
            var ridname = prompt("please provide a name to remove")
            removeName(ridname)
        }
        if (action.toUpperCase() === "DISPLAY" || action.toUpperCase() === "D"){
            display()
        }
        if (action.toUpperCase() === "QUIT" || action.toUpperCase() === "Q"){
            on = false
        }
    }
}