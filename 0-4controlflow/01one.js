//if STATEMENT

const isUserLoggedIn=true
if(isUserLoggedIn){

}

// <(LESS THAN)
// >(GREATER THAN)
// <=(LESS THAN OR EQUAL)
// >=(GREATER THAN OR EQUAL)
// ==(CHECKING)
// !=(NOT EQUAL TO)
// ===(CHECKING BUT ALSO CHECKS THE DATATYPE)
// !==(STRICTLY NOT CHECKING)

// if(2=="2"){
//     console.log("executed") 
// }//OUTPUT=>EXECUTED

// if(2==="2"){
//     console.log("executed")
// }//OUTPUT=>NO OUTPUT

const temperature=41
// if(temperature<50){
//     console.log("less than 50")
// }else{
//     console.log("more than 50")   
// }

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User power ${power}`)
// }
// console.log(`User power ${power}`)//ERROR

//SHORTHAND NOTATION(IMPLICIT SCOPE)
//ONLY ONE LINE CAN BE WRIITEN
// const balance=1000
// if(balance>500) console.log("test");
//BUT CAN USE COMMA TO WRITE MULTIPLE LOG

// if(balance>500) console.log("test1"),console.log("test2");

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200")
    
// }

const userLoggenIn=true
const debitCard=true
if(userLoggenIn && debitCard){
    console.log("Allow");
}