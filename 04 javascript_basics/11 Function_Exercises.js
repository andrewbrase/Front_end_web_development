// FUNCTION EXERCISES - SOLUTIONS

// Functions are an extremely important part of understanding how to program
// and they also allow for an ideal way of testing out your general JavaScript
// knowledge.

// These problem statements are sourced from codingbat.com,
// a great website to practice your code!

// The problems will gradually get harder and harder.

//
// PROBLEM 1: SLEEPING IN
//
// Write a function called sleepIn that takes in two boolean parameters: weekday
// and vacation.
//
// The parameter weekday is true if it is a weekday, and the parameter vacation is
// true if we are on vacation. We sleep in if it is not a weekday or
// we're on vacation. Return true if we sleep in. So some example input and output:
//
// sleepIn(false, false) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

var week_day = true;
var on_vac = false;

function sleepIn(weekday,vacation){

  // if it's the weekend or you're on vacation - you can sleep in
  if (weekday === false || vacation === true){
    // 
    // alert is only for me to visually see, not part of problem
    alert("sleep in");
    return true;
  }
  
  // if it is a weekday (and the previous if statement didn't execute due to vacation being false) - you have to work
  if (weekday === true){
    alert("work");
    return false;
  }

  // if your vacation is on a weekday you can still sleep in
}

sleepIn(week_day,on_vac);

//
// PROBLEM 2: MONKEY TROUBLE
//
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.
//
// Example Input and Output
//
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false


var monkey_A=true;
var monkey_B=false;

function monkeyTrouble(aSmile,bSmile){

if ((aSmile === true && bSmile === true) || (aSmile === false && bSmile === false)){
  alert("monkey trouble");
  return true;
}else{
  alert("no monkey trouble");
}

}

monkeyTrouble(monkey_A,monkey_B);

//
// PROBLEM 3: STRING TIMES
//
// Given a string and a non-negative int n, return a larger
// string that is n copies of the original string.
//
// Example input and output:
//
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

var str = "Hi";
var num = 2;

function stringTimes(word,number){
  alert(word.repeat(number));
  return (word.repeat(number));
}

stringTimes(str,num)

// PROBLEM 4: LUCKY SUM

// Given 3 numerical values, a b c, return their sum. However, if one of the values is
// 13 then it does not count towards the sum and values to its right do not count.
// So for example, if b is 13, then both b and c do not count.
//
// Hint (Explore using multiple return statements inside a single function!)
//
// Example input and output
//
// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

// help

// var a = 1;
// var b = 2;
// var c = 13;

// function luckySum(num_one,num_two,num_three){

// if (num_one !== 13 && num_two !== 13 && num_three !== 13){
//   alert(num_one+ num_two+ num_three);
//   return (num_one+ num_two+ num_three);
// }

// }

// luckySum(a,b,c);


// PROBLEM 5:
//
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//
// Here are some example inputs and outputs:
//
// caught_speeding(60, false) → 0
// caught_speeding(65, false) → 1
// caught_speeding(65, true) → 0





// BONUS: MAKE BRICKS
//
// We want to make a row of bricks that is goal inches long. We have a number of
// small bricks (1 inch each) and big bricks (5 inches each). Return true if it
// is possible to make the goal by choosing from the given bricks. This is a
// little harder than it looks and can be done without any loops in a single line!
//
// If you can't figue this one out, don't worry, that's why its a bonus!
//
// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

