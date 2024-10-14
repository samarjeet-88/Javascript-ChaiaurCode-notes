// let a=10
// const b=20
// var c=30

// console.log(a)
// console.log(b)
// console.log(c)

// {}=>SCOPE

// if(true){
//     let a=10
//     const b=20
//     var c=30
// }
// console.log(a)=>ERROR
// console.log(b)=>ERROR
// console.log(c)=>30

// var c=300
// if(true){
//     let a=10
//     const b=20
//     var c=30
// }
// console.log(c)=>30

//INSIDE THE IF STATEMENT IS CALLED AS BLOCK SCOPE.OUTSIDE GLOBAL SCOPE
//GLOBAL SCOPE IS ACCESSIBLE INSIDE THE IF STATEMENT BUT THE BLOCK SCOPE VARIABLES SHOULD NOT BE ACCESSIBLE OUTSIDE THE BLOCK


let a=300
if(true){
    let a=10
    const b=20
    // console.log("INNER :",a)//=>INNER:10
}
// console.log("OUTER :",a)//=>OUTER:300

//GLOBAL SCOPE IS DIIFERENT IN WINDOWS AND NODE ENVIRONMENT


//two can access the variables of one but one cannot access the variables of two
//CLOSURE(THERE IS MORE THAN THIS)=>WHEN THERE IS A FUNCTION INSIDE A FUNCTION AND THE CHILD FUNCTION CAN ACCESS THE PARENT FUNCTION
function one(){
    const username="samar"

    function two(){
        const website="youtube"
        console.log(username)        
    }
    console.log(website)  
    two()
}
one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        // console.log(username+website)
    }
    // console.log(website)=>ERROR
}
// console.log(username)=>ERROR


//+++++++++++++++++interesting++++++++++

console.log(addOne(5))
function addOne(num){
    return num+1
}
// addOne(5)

//addTwo are called as expressions

addTwo(5)
//ERROR WILL COME WHEN WE TRY TO ACCESS addTwo BUT NO ERROR IN CASE OF addOne
//BECAUSE OF HOISTING(WE ARE STORING THE FUNCTION INTO A VARIABLE)
//WE ARE ACCESSING THE VARIABLE BEFORE THE  DECLARATION
const addTwo=function(num){
    return num+2
}
// addTwo(5)
