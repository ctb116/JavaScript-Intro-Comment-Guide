//JavaScript is a programming language
//JavaScript is a flexible language meaning it doesn't have too many strict rules for how you can use it.
//It might helpful to think of JavaScript as a whole like a tool kit and we'll be learning some tools you can add to your tool kit.

//Here are some of the tools we'll be learning

// ------- OPERATORS -------
//Special characters that indicate an action
//   + (add)
//   - (subtract)
//   * (multiply)
//   / (divide)
//   % (modulo: the remainder of dividing two numbers)
//   = (equals)


// ------- PRIMITIVES -------
//The building blocks of JavaScript
//Types of data you will use:

//Boolean type - allows values true or false;
true;
false;

//String type - used to represent textual data
//(ignore the parenthesis it is just my formatter)
("I am a string.");
("I am also a string. I can count: 1, 2, 3, 4");

//Number type - allows integers
1;
2;
45;
10243232532422;
NaN;
//NaN means "Not a Number" but oddly JavaScript still considers it a Numbers Type. Try 0/0; in your console log

//Undefined type
//Used if a variable has not been assigned a value
undefined;

//------- VARIABLES -------
//A container that stores any information you want
//Variables are declared using the keyword var
var
//Variables can be named whatever you want
var box;
var boxOfMyStuff;
var ICanNameThisWhateverIWant;
//assign the variable a value using an = operator
var name = "Cathy";
var age = 34;
var question = "Is that really your age?";
var myResponse = false;


// ------- EXPRESSIONS -------
//Evaluates a value
//You can take operators to make expressions
//Try writing these expressions on Number Types in your console log
1 + 2;
4 - 3;
10 / 2;
12 % 5;
//Expressions can be made using most Primitive Types and in combination.
//Try these in your console log
"Hello, I am " + "lost."
"I just turned " + 31 + " today!"
//Using an operator to make an expression using two different Primitive types is why JavaScript is considered a flexible language. Strict languages like C# do not allow this so easily.
//Expressions can be made using variables too:
name + age;
//Variables can store expressions
var twoPlusTwo = 2 + 2;
var myInfo = "Hello, my name is Cathy and I will randomly add a number to the end of this sentence " + 64;
//Variables can store other variables
var bigStorage = twoPlusTwo; 