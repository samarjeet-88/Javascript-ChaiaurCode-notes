"use strict"//treating this js file as newer version of javascript

// alert(3+3) NOT POSSIBLE IN NODEJS ENGINE.DIFFERENT SYNTAX IS THERE. CAN USE IN BROWSER JAVASCRIPT ENGINE
let name="samarjeet"//number
let age=18//age
let isLoggedIn=true//boolean

/*
Boolean=> true and false.
null=> A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)STANDALONE VALUE
undefined=> A top-level property whose value is not defined.
Number=> An integer or floating point number. For example: 42 or 3.14159.
BigInt=> An integer with arbitrary precision. For example: 9007199254740992n.
String=> A sequence of characters that represent a text value. For example: "Howdy".
Symbol=> A data type whose instances are unique and immutable.
*/

//null represents a value that has been intentionally defined as "blank", while undefined represents a lack of any assigned value

const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
console.log(Symbol("foo") === Symbol("foo")); // false

console.log(typeof name);//tells what is the data type of the variable
console.log(typeof null);//object
console.log(typeof undefined);//undefined



