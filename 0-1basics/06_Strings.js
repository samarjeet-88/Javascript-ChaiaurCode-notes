const name="samar "
const repoCount=50

// console.log(name+repoCount+" Value")=>samar 50 Value
//NOT A GOOD METHOD TO CONCATENATE 
//USE BACKTICKS(STRING INTERPOLATION)=>CAN DIRECTLY INJECT THE VARIABLES

// console.log(`HELLO MY NAME IS ${name}`)

// const gameName= new String('hitesh')=>ANOTHER WAY TO DECLARE A STRING

const str1=new String("samar")
const str2=new String("samar")
console.log(str1==str2)
//FALSE BECAUSE EQUALITY OPERATOR CHECK FOR THE REFERENCE OF THE OBJECTS(MEMORY LOCATION) NOT THE VALUE 

const v1=123
const v2=v1
console.log(v2==v1);
//TRUE BECAUSE IN JAVASCRIPT THE PRIMITIVE DATA TYPES ARE COMPARED BY VALUE RATHER THAN BY REFERENCE

const gameName= new String('hitesh-hc-com')
console.log(gameName[0])
// console.log(gameName.__proto__)//=>ACCESSING THE PROTOTPYE OBJECT(CONTAINS ALL THE METHODS FOR THAT STRING)

// console.log(gameName.length)
// console.log(gameName.toUpperCase());//ORIGINAL VALUE IS NOT CHANGED
console.log(gameName.charAt(2))//t
console.log(gameName.indexOf('t'))//2


const newString=gameName.substring(0,4)//=>start to end-1
console.log(newString);//=>hite


const anotherString=gameName.slice(0,4)//=>can also give negative values
console.log(anotherString);

const sliceString=gameName.slice(-8,-4)//=>negative values
console.log(sliceString);

//IF WE GIVE NEGATIVE VALUES IN SUBSTRING THEN IT IGNORES IT AND CONSIDERS THAT NEGATIVE VALUE AS 0
// const subString=gameName.substring(-8,4)//=>hite(IGNORES -8)
// console.log(subString)

// const newStringOne="    hitesh    "
// console.log(newStringOne)//GIVES THE OUTPUT WITH SPACE
// console.log(newStringOne.trim())//TRIM REMOVES THE SPACE

//BROWSER DOESN'T UNDERSTANDS SPACE.IT CONVERTS THE SPACE TO %20 AUTOMATICALLY
//SO TO REPLACE OR REMOVE THAT SPACE WE USE .replace
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))//=>TRUE

//split takes max two parameter=>separator and limit
console.log(gameName.split('-'))//=>[ 'hitesh', 'hc', 'com' ]





