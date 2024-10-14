const score=400
//JAVASCRIPT ON ITS OWN DECIDING THAT THE SCORE IS A NUMBER
//TO EXPLICITLY DEFINE IT
const balance=new Number(100)
// console.log(score)//=>400
// console.log(balance)//=>[Number: 100]

// console.log(balance.toString())//=>CONVERT NUMBER TO STRING(100 AS OUTPUT)

// console.log(balance.length)//=>OUTPUT=>undefined
//CONVERT THE NUMBER TO STRING FOR CALCULATING THE LENGTH
// console.log(balance.toString().length)

// console.log(balance.toFixed(2))//FOR FIXING THE COUNT OF NUMBERS AFTER THE DECIMAL OUTPUT=>100.00

const otherNumber=23.8966
// console.log(otherNumber.toPrecision(3))//=>OUTPUT 23.9
//IF THE otherNumber IS 123.8966 ANS PRECISION VALUE IS SET TO 3 THEN THE OUTPUT IS 124
//PRCISION SETS THE NUMBER OF SPECIFIED DIGITS AND THEN ROUNDS OFF OTHER DIGITS

const testNumber=123.4321
// console.log(testNumber.toPrecision(4))//=>OUTPUT 123.4

const hundereds=1000000
// console.log(hundereds.toLocaleString('en-IN'))//=>OUTPUT 10,00,000
//SOMETIMES IT IS DIFFICULT TO SEE THE NUMBER OF ZEROS WE HAVE SO toLocaleString ADDS COMMA
//CAN SPECIFIED WHICH COUNTRIES NUMBER SYSTEM TO FOLLOW

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
//GIVES MAX VALUE AND MIN ALUE OF NUMBERS IN JAVASCRIPT

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
//GIVES THE MAXIMUM AND MINIMUM VALUE THAT CAN BE SAFELY AND ACCURATELY REPRESENTED 
//MEANING CALCULATIONS INVOLVING VALUES ABOVE MAX_SAFE WILL LEAD TO INACCURACIES


//+++++++++++MATHS++++++++++++++
//BY DEFAULT LIBRARY IN JAVASCRIPT
// console.log(Math)//=>IS AN OBJECT

// console.log(Math.abs(-4))//=>FOR CONVERTING NEGATIVE TO POSITIVE

// console.log(Math.ceil(4.1))//=>FOR GIVING THE SMALLEST LARGEST ELEMENT OUTPUT=>5

// console.log(Math.floor(4.9))//=>FOR GIVING THE LARGEST SMALLEST ELEMENT OUTPUT=>4

// console.log(Math.min(4,3,6,8))//=>OUTPUT=>3
// console.log(Math.max(4,3,6,8))//OUTPUT=>8
//FOR GIVING THE MINIMUM AND MAXIMUM VALUE IN AN ARRAY

console.log(Math.random())
//GIVES RANDOM VALUE BETWEEN 0(INCLUSIVE) AND 1(EXCLUSIVE)

console.log(Math.random()*10+1)
//GIVES A RANDOM NUMBER BETWEEN 1(INCLUSIVE) AND 11(EXCLUSIVE)
console.log(Math.floor(Math.random()*10+1))
//FOR ROUNDING OFF VALUES TO THEIR FLOOR

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
//GIVES VALUE BETWEEN MAX AND MIN