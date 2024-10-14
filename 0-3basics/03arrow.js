//this=>REFERS TO THE CURRENT CONTEXT
const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)//=>WILL PRINT THE WHOLE OBJECT OR THE CURRENT CONTEXT
    }

}
// user.welcomeMessage()//=>hitesh, welcome to website
// user.username="sam"
// user.welcomeMessage()

//WITH console.log(this)
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)//=>{},EMPTY OBJECT
//IN NODE ENVIRONMENT THE this KEYWORD IS REFERING TO THE EMPTY OBJECT(BECAUSE THERE IS NO CONTEXT IN GLOBAL)
//IN WEB BROWSER THE this WILL PRINT THE windows OBJECT
//IN BROWSER THE GLOBAL OBJECT IS WINDOWS BUT IN NODE ENVIRONMENT THE GLOBAL OBJECT IS EMPTY


// function chai(){
//     console.log(this)//INSIDE THE FUNCTION THIS REFERS TO MANY THINGS(MOSTLY RELATED TO PERFORMANCE)
// }
// chai()

// function chaiTwo(){
//     let username="samar"
//     console.log(this.username)//=>UNDEFINED
// }
// chaiTwo()
//this REFERS TO THE CURRENT CONTEXT ONLY INSIDE AN OBJECT NOT INSIDE AN FUNCTION

// const chai=function(){
//     let username="samar"
//     console.log(this.username)//=>undefined
// }
// chai()

//ARROW FUNCTION
const chai=()=>{
    let username="hitesh"
    console.log(this.username)//=>undefined
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

//ANOTHER WAY TO WRITE AN ARROW FUNCTION IS USING IMPLICIT RETURN
//WE CAN IMPLICITLY RETURN WITHOUT WRITING THE RETURN KEYWORD(ONLY ONE LINE)

// const addTwo=(num1,num2)=>num1+num2

// const addTwo=(num1,num2)=>(num1+num2)

//IF WE WRAP THE OPERATION IN CURLY KEYWORD THEN WE NEED TO WRITE THE RETURN STATEMENT BUT IF WE WRITE THE STATEMENT IN CURLY KEYWORD THEN WE DONT NEED TO WRITE THE RETURN KEYWORD

//IF {}=>THEN WRITE THE RETURN KEYWORD
//IF ()=>THEN DONT WRITE THE RETURN KEYWORD(IT IMPLICITLY RETURNS THE STATEMENT)

// const addTwo=(num1,num2)=>{username:"hitesh"}OUTPUT=>UNDEFINED BECAUSE NO ()
// const addTwo=(num1,num2)=>({username:"hitesh"})OUTPUT=>{ username: 'hitesh' }
// console.log(addTwo(3,4))


const myArray=[2,3,4,5,7,8]
myArray.forEach(()=>{})