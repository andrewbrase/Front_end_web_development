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

// this asks the user if they want to use the web app, if anything but y/Y is chosen, the code will not continue
var choice = prompt("Do you want to use the web app? Y or N")
if (choice.toUpperCase() === "Y"){
    
    // setting an empty array to be used as a roster
    var roster = []

    // this function is used to add a new name to the roster and logs everything
    function addNew(name){
        roster.push(name.toUpperCase())
        console.log("!!! Added "+ name + " to roster")
        display()
    }

    // this function is used to remove a name from the roster IF that name is in the roster 
    // (indexOf will set the index to -1 if that name is not found) - I am using this for input validation,
    // before I did this it was possible to type ex. 7 in an array of 3 items and it would remove the last item in the array
    // in a normal scenario the loc (index) will correlate with the position that name is in the array
    // logs results for visibility

    function removeName(name){
        var loc = roster.indexOf(name.toUpperCase())
        if (loc !== -1){
            roster.splice(loc,1);
            console.log("!!! Removed "+ name + " from roster")
            display()
        }
        
    }

    // this function can be used to display the roster
    function display(){
        console.log(roster)
    }

    // while on = true the code will keep going
    var on = true;
    while (on){
        // action is set equal to the user input and used in if statements
        var action = prompt( "Please select an action (add (a), remove (r), display (d) or quit (q))")
        // if option (add) was chosen, the user will be prompted with - 
        // "Please provide a name to add" --> that name is sent to the add function so that the name can be added to the roster
        if (action.toUpperCase() === "ADD" || action.toUpperCase() === "A"){
            console.log("action (add) chosen:")
            var newname = prompt("Please provide a name to add")
            addNew(newname)
        }
        // if option (remove) was chosen, the user will be prompted with - 
        // "Please provide a name to remove" --> that name is sent to the remove function so that the name can be removed from the roster
        if (action.toUpperCase() === "REMOVE" || action.toUpperCase() === "R"){
            console.log("action (remove) chosen:")
            var ridname = prompt("Please provide a name to remove")
            removeName(ridname)
        }
        // this can display the roster with the display function
        if (action.toUpperCase() === "DISPLAY" || action.toUpperCase() === "D"){
            display()
        }
        // this sets on to false, ending the while loop
        if (action.toUpperCase() === "QUIT" || action.toUpperCase() === "Q"){
            on = false
        }
    }
}