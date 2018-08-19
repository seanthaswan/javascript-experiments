///////////////////////////////////////
// Lecture: Hoisting

// functions
calculateAge(1994);

function calculateAge(year) {
  console.log(2018 - year);
}

var retirement = function(year) {
  console.log(65 - (2016 - year));
}

retirement(1994);

// variables

var age = 23;
console.log(age);

function foo() {
  var age = 24;
  console.log(age, 'will be different');
}
foo();
console.log(age);






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
