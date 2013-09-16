"use strict";
// Just a file containg some javascript syntax help


/************
* Variables
*/

// String
var string = "hello world!";
console.log(string); // hello world!

// Integer
var number = 10;
number += 1;
console.log(number); // 11
console.log("Number: " + number); //Number: 11



/************
* If and equality
*/

// JavaScript features weak typing. This means that the equality operator coerces types in order to compare them.
if ("String" == "String") {
	console.log("true");
}

if (0 == "0") {
	console.log("true");
}

// The strict equality operator consists of three equal signs: ===.
// It works like the normal equality operator, except that strict equality operator does not perform type coercion between its operands.
if ("String1" !== "String2") {
	console.log("true");
}

if (0 === "0") {
	// false
} else {
	console.log("true");
}

var foobar = 4;
if (foobar >= 5) {
	// false
} else if (foobar > 2 && foobar < 4) {
	// false
} else if (foobar > 2 || foobar < 4) {
	console.log("true");
}





/*************
* Array and for loop
*/

var array = ["zero", "one", "two", "three", "four"];
console.log(array[1]); // one

// For loop
for (var i = 0; i < array.length; i++) {
	array[i] = i * 10;
}

console.log(array); // [0, 10, 20, 30, 40]




/***********
* Functions
*/

// function declaration
function foo() {
	return "foo";
}

// function expression
// Note: this example assigns the unnamed and anonymous function to the variable foo.
var bar = function() {
	return "bar";
};

console.log(foo() + bar()); // foobar





/***********
* JavaScript constructors, prototypes, and the `new` keyword
*/

function Foo() {
    this.value = 42;
}

Foo.prototype.getValue = function (){
	return this.value; //remember this keyword 
};

var fooInstance = new Foo();
console.log(fooInstance.getValue()); // 42

/**

When new Foo() is called, JavaScript does four things:

1. It creates a new object.
2. It sets the constructor property of the object to Foo.
3. It sets up the object to delegate to Foo.prototype.
4. It calls Foo() in the context of the new object.

Prototype:

When an object is constructed, it inherits all of the properties of its constructor’s prototype. 
So the Foo instance picked up the getValue function from Foo‘s prototype 

*/

