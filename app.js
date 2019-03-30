// MODERN JS

/*
what is the difference between "var" and "let" keywords? 1:15
what is the difference between "==" and "===" signs? 3:54
what is the difference between "let" and "const" keywords? 6:02
what is the difference between "undefined" and "null" keywords? 9:06
what is use of Arrow function?
 what is prototypal inheritance
what is the difference between function declaration & function expression
what is promises and why do we use it
setTimeout()
what is closure and how do we use it

2 fizz buzz
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}


//  Joshua Fluke top 5 int ?s

//how do you add something to the beginning and the end of an array?
// push unshift spread operator es6
/*var myArray = ['a','b','c','d'];
myArray.push('end')
myArray.unshift(' start ')

console.log(myArray);

var myArray = ['a','b','c','d'];
myArray = ['start',...myArray]
myArray = [...myArray, "end"]
myArray = ['start',...myArray, "end"]

console.log(myArray)*/
//how do you create a private variable in js? ans scope

/*
function secretVariable() {
  var pPrivate = 'super secret code';
  return function(){
    return pPrivate
  }
}

var getpPrivateVariable = secretVariable()
console.log(getpPrivateVariable())


// what is the output? ans closures
var num = 4;
function outer(){
  var num = 2
  function inner(){
    num++;
    var num = 3;
    console.log(num)
    
  }
  inner();
}
outer();

//what is the output? 
 
console.log(typeof (typeof 1));
// or console.log(typeof typeof 1);

// what is the output?

var hero = {
  _name: 'John Doe',
  getSecretIdentity: function (){
    return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity; 
//var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity());  //undefined
console.log(hero.getSecretIdentity());  //John Doe



*/

// more common js ?s JavaScript Mock Interview | Online Interview Questions and Answers
//
//techsith
//Published on Jun 13, 2018

/*
get values only in object and return them in an array

const object1 = {
  a: "somestring",
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
*/

//reversing a string
/*
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
console.log(reverseString("hellodude"));
*/

//im not sure what this is an example of;

const obj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this; // <= this is why this whole thing works
  },
  getB() {
    console.log(this.b);
  }
};
obj.getA().getB();
