// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1)//TRUE
// console.log("02">1)//TRUE
//JAVACRIPPT AUTOMATICALLY CONVERTS THE "2" TO 2(INT)
//ALWAYS CHECK BEFORE COMPARING THAT VARIABLES HAVE THE SAME DATATYPE

// console.log(null>0)//FALSE
// console.log(null==0)//FALSE
// console.log(null>=0)//TRUE
//THE REASON IS THAT AN EQUALITY CHECK == AND COMPARISONS(>,<,>=,<=)WORK DIFFERENTLY
//COMPARISONS CONVERT NULL TO A NUMBER TREATING IT AS 0
//THATS WHY null>=0 IS TRUE AND null>0 IS FALSE
//EQUALITY CHECK DOES NOT CONVERT TO 0 

// console.log(undefined>0)//false
// console.log(undefined==0)//false
// console.log(undefined>=0)//false
//COMPARISON IS ALSO FALSE BECAUSE UNDEFINED IS CONVERTED INT0 NaN

//=== STRICT CHECK.NOT ONLY CHECKS THE VALUE BUT ALSO CHECKS THE DATATYPE
// console.log("2"==2)//TRUE
// console.log("2"===2)//FALSE




