var choice = prompt("Do you want to use the web app? Y or N")
if (choice.toUpperCase() === "Y"){
    
    // setting an empty array to be used as a roster
    var roster = [];

    // this function is used to add a new name to the roster and logs everything
    function addNew(name){
        roster.push(name.toUpperCase());
        console.log("!!! Added "+ name + " to roster");
        display();
    }

    // this function is used to remove a name from the roster IF that name is in the roster 
    // (indexOf will set the index to -1 if that name is not found) - I am using this for input validation:
    // if (loc !== -1){

    // in a normal scenario the loc (index) will correlate with the position that name is in the array
    // logs results for visibility

    function removeName(name){
        var loc = roster.indexOf(name.toUpperCase())
        if (loc !== -1){
            roster.splice(loc,1);
            console.log("!!! Removed "+ name + " from roster");
            display();
        }
    }

    // this function can be used to display the roster
    function display(){
        console.log(roster);
    }

    // while on = true the code will keep going
    var on = true;
    while (on){
        // action is set equal to the user input and used in if statements
        var action = prompt( "Please select an action (add (a), remove (r), display (d) or quit (q))");
        
        if (action.toUpperCase() === "ADD" || action.toUpperCase() === "A"){
            // if option (add) was chosen, the user will be prompted with - 
            // "Please provide a name to add" --> that name is sent to the add function so that the name can be added to the roster
            console.log("action (add) chosen:");
            var newname = prompt("Please provide a name to add");
            addNew(newname);

        }else if (action.toUpperCase() === "REMOVE" || action.toUpperCase() === "R"){
            // if option (remove) was chosen, the user will be prompted with - 
            // "Please provide a name to remove" --> that name is sent to the remove function so that the name can be removed from the roster
            console.log("action (remove) chosen:");
            var ridname = prompt("Please provide a name to remove");
            removeName(ridname);

        }else if (action.toUpperCase() === "DISPLAY" || action.toUpperCase() === "D"){
            // this can display the roster with the display function
            display();

        }else if (action.toUpperCase() === "QUIT" || action.toUpperCase() === "Q"){
            // this sets on to false, ending the while loop
            on = false;

        }else{
            alert("Command not recognized");
        }
    }
}