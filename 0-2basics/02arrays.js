const marvelHeors=["thor","ironman","spiderman"]
const dcHeors=["flash","superman","batman"]

// marvelHeors.push(dcHeors)
//IT DOES NOT PUSH THE ARRAY ELEMENTS INTO THE MARVEL HEROS ARRAYS
//INSTEAD IT PUSHES THE WHOLE ARRAY MEANING CREATES AN ARRAY INSIDE AN ARRAY
//THE ARRAY(DCHEROS) WHICH IS INSIDE THE ANOTHER ARRAY(MARVELHEROS) IS CONSIDERED AS SINGLE ELEMENT

// console.log(marvelHeors)
// console.log(marvelHeors[3][1])//=>flash

// const newArr=marvelHeors.concat(dcHeors)//=>UNIQUE VALUE
//CONCAT RETURNA A NEW ARRAY AND DOES NOT MODIFY THE EXISTING ARRAY
//USE CONCAT AS IT ADDS THE ELEMENT OF THE 2nd ARRAY TO THE ELEMENTS OF THE 1st ARRAY
//DOES NOT ADDS THE WHOLE ARRAY
// console.log(newArr)//OUTPUT=>[ 'thor', 'ironman', 'spiderman', 'flash', 'superman', 'batman' ]


//INSTEAD OF USING CONCAT USE SPREAD OPERATOR
const allHeors=[...marvelHeors,...dcHeors]
console.log(allHeors)//OUTPUT=>[ 'thor', 'ironman', 'spiderman', 'flash', 'superman', 'batman' ]

//FLAT TO USE TO CREATE A NEW ARRAY WITH ALL THE SUB-ARRAY ELEMENTS CONCATENATED INTO IT
//BASICALLY FLAT REMOVES THE ARRAY INSIDE AN ARRAY AND PRESENTS IT AS A SINGLE ELEMENT
//HAS TO PASS DEPT AS ARGUMENTS(MEANING HOW MANY ARRAY INSIDE AN ARRAY NEEDS TO BE RESOLVED)
//CAN ALSO PASS INFINITY(REMOVES ALL THE ARRAY INSIDE AN ARRAY)
const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usableAnotherArr=anotherArr.flat(Infinity)
const uAnotehrArr=anotherArr.flat(1)
console.log(usableAnotherArr)//OUTPUT=>[1,2,3,4,5,6,7,6,7,4,5]
console.log(uAnotehrArr)//OUTPUT=>[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

//SUPPOSE WE ARE DOING WEB SCRAPPING AND THE DATA RETURNED CONTAINS ALL TYPE OF DATATYPES(LIKE STRING OR OBJECT)
//BUT LOOPS CAN ONLY BE APPLIED ON ARRAYS.SO WE USE isArray CHECK AND CONVERT IT TO ARRAY
console.log(Array.isArray("Hitesh"))//OUTPUT=>FALSE
console.log(Array.from("Hitesh"))//OUTPUT=>[ 'H', 'i', 't', 'e', 's', 'h' ]
//FROM CONVERTS ANY DATATYPE TO ARRAY
//Array.from() only takes one mandatory argument

console.log(Array.from([1, 2, 3], (x) => x + x));
//OUTPUT=> Array [2, 4, 6]

console.log(Array.from({name:"hitesh"}))//OUTPUT=>EMPTY ARRAY
//WE HAVE TO FIRST DEFINE THAT IF WE WANT TO MAKE AN ARRAY OF KEYS TOR OF VALUES

const keysArray = Object.keys({ name: "hitesh" });
console.log(keysArray);  // Output: ['name']

const valuesArray = Object.values({ name: "hitesh" });
console.log(valuesArray);  // Output: ['hitesh']

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//RETURNS A NEW ARRAY OF THE VALUES SPECIFIED
// Array.of() creates a new array instance with a variable number of arguments, regardless of the number or type of arguments
// Array.from() is used to create an array from an array-like or iterable object
