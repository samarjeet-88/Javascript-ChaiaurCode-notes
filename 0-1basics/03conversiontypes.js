// let age="33"
// console.log(typeof age);//small case number or string
// console.log(typeof(age));

// let valueInNumber=Number(age)//Number in capital
// console.log(typeof valueInNumber);

// let score="33abc"
// let scoreInNumber=Number(score)
// console.log(typeof scoreInNumber);//giving output as number 
// console.log(scoreInNumber);//JAVASCRIPT CONVERTS IT TO NaN=>nOT A NUMBER IS ALSO A TYPE OF NUMBER THEREFORE IT WAS GIVING A TYPE NUMBER

// //WE SHOULD ALWAYS CHECK IF IT IS NaN OR NOT

// let scoreNull=null
// let scoreNullInNumber=Number(scoreNull)
// console.log(typeof scoreNullInNumber);//WIIL GIVE OUTPUT AS NUMBER 
// console.log(scoreNullInNumber);//JAVASCRIPT CONVERTS NULL TO 0 ON Number PARSING

// let scoreUndefined=undefined
// let scoreUndefinedInNumber=Number(scoreUndefined)
// console.log(typeof scoreUndefinedInNumber);//WILL GIVE OUTPUT AS NUMBER 
// console.log(scoreUndefinedInNumber);//JAVASCRIPT CONVERTS UNDEFINED TO NaN (NOT A NUMBER) WHICH IS ALSO A NUMBER

// let scoreBool=true
// let scoreBoolInNumber=Number(scoreBool)
// console.log(typeof scoreBoolInNumber);//WILL GIVE OUTPUT AS NUMBER
// console.log(scoreBoolInNumber);//JAVASCRIPT CONVERTS TRUE VALUE TO 1 AND FALSE VALUE TO 0

// let scoreStr="samar"
// let scoreStrInNumber=Number(scoreStr)
// console.log(typeof scoreStrInNumber);//WILL GIVE OUTPUT AS NUMBER
// console.log(scoreStrInNumber);//CONVERTS STRING TO NaN


// let isLoggedIn=1
// let booleanisLoggedIn=Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);//TRUE

// let isLoggedInEmpty="";
// let booleanisLoggedInEmpty=Boolean(isLoggedInEmpty)
// console.log(booleanisLoggedInEmpty);//FALSE

// let isLoggedInStr="samarjeet"
// let booleanisLoggedInStr=Boolean(isLoggedInStr)
// console.log(booleanisLoggedInStr);//TRUE

//1=>TRUE 0=>FALSE
//""=>FALSE
//"HITESH"=>TRUE

// let someNumber=33
// let stringNumber=String(someNumber)
// console.log(typeof stringNumber);//CONVERTS TO STRING
// console.log(stringNumber);//33



//*****OPERATIONS****//

let value=3
let negValue=-value
// console.log(negValue);//-3

// console.log(2+2);//4
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1="hello"
let str2=" hitesh"
let str3=str1+str2
// console.log(str3);//hello hitesh

// console.log("1"+2) //12
// console.log(1+"2") //12
// console.log("1"+2+2) //122
// console.log(2+2+"1") //41
// //JAVASCRIPT GUILDLINES
// //IF THE FIRST CHARACTER IS A STRING THEN THE WHOLE OPERATION IS TREATED AS STRING BUT IF THE LAST CHARACTER IS STRING THEN THE PREVIOUS OPERATION IS CARRIED OUT NORMALLY

// console.log((3+4)*5%6) //USE PARENTHESIS

// console.log(true);//true
// console.log(+true);//1(true by default is boolean but we are using the increment operator which converts the true to number BUT IT DOES NOT INCREMENT)
// console.log(true+);//ERROR

// console.log(+"");//0

// let num1,num2,num3
// num1=num2=num3=2+2 ( CONFUSING CODE)

let postgameCounter=100
// postgameCounter++;
// console.log(postgameCounter);//101

let pregameCounter=100
// pregameCounter++;
// console.log(pregameCounter);//101

// difference between prefix operator and postfix operator
console.log(postgameCounter++);//100
console.log(++pregameCounter);//101
//IN PREFIX THE INCREMENT HAPPENS FIRST THEN THE VALUE IS ASSIGNED
//IN POSTFIX THE VALUE IS ASSIGNED THEN THE INCREMENT HAPPENS































