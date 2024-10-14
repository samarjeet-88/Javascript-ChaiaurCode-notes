function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("D");
    console.log("F");
}
//ONLY sayMyName IS A REFERENCE OF THE ABOVE FUNCTION
// sayMyName()
// sayMyName//THIS IS ONLY THE REFERENCE IT DOES NOT EXECUTES

//numb1 and numb2 ARE CALLED AS parameters
function addTwoNumbers(numb1,numb2){
    console.log(numb1+numb2)
}
// addTwoNumbers()//NaN(NO ARGUMENTS PASSED)
// addTwoNumbers(3,4)
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)
//(3,4) OR (3,"a") ARE CALLED AS ARGUMENTS
// JAVASCRIPT AUTOMATICALLY ASSIGNS THE DATA TYPE

// const result=addTwoNumbers(3,5)
// console.log(result)//undefined


function addTwo(numb1,numb2){
    return numb1+numb2
}
// console.log(addTwo(3,5))
//ANYTHONG AFTER A RETURN STATEMENT IS UNREACHABLE

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a Username")
        return
    }return `${username} just logged in`
}
// console.log(loginUserMessage("Samar"))
// console.log(loginUserMessage())
//IF NO VALUE IS PASSED THEN IT IS CONSIDERED AS UNDEFINED

function loginUser(username="sam"){
    if(!username){
        console.log("Please enter a Username")
        return
    }return `${username} just logged in`
}
// console.log(loginUser("samar"))//SAMAR WILL BE OVERWRITTEN BY SAM


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500))//=>200

//WE DO NOT KNOW HOW MANY ARGUMENTS ARE THERE SO WE USE THE REST OPERATOR
//REST AND SPREAD OPERATOR ARE THE SAME
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400))//OUTPUT=>[200,300,400]

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,1000))//OUTPUT=>[500,2000]

const user={
    username:"hitesh",
    price:190
}
function handeObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`) 
}
// handeObject(user)
// handeObject({
//     username:"sam",
//     price:399
// })

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,600]))
