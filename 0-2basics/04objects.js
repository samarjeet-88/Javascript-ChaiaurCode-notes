const tinderUser=new Object()
// console.log(tinderUser)//EMPTY OBJECT

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

// WE CAN CREATE OBJECTS INSIDE AN OBJECTS(WE CAN DO MULTIPLE NESTING)
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

//WE ADD ? BECAUSE SUPPOSE IF THE fullname DOESN'T EXIST THEN IT WILL CHECK
// console.log(regularUser.fullname?.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj3={obj1,obj2}//IT WILL NOT COMBINE THE VALUES BUT WILL GIVE ONE OBJECT WITH TWO OBJECTS AS KEY
// console.log(obj3)//GIVE OUTPUT AS obj1 INSIDE obj2

// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2,obj4)
//THE EXTRA BRACKET ACTS LIKE A TARGET AND ALL OTHER PARAMETERS ACTS LIKE A SOURCE
//IF WE DO NOT GIVE THE EXTRA BRACKET THEN ALL THE VALUES ARE GOING INTO THE obj1
//SAME OUTPUT BUT WE JUST DEFINING THAT THE OBJECT SHOULD BE COMBINED AND RETURNED INTO THE EMPTY BRACKETS

const obj3={...obj1,...obj2}//USE SPREAD OPERATOR
// console.log(obj3)


//ARRAY OF OBJECTS
//MOST USALLY THIS TYPE OF VALUES ARE USED
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]
// console.log(users[1].email)//TO ACCESS AN OBJECT INSIDE AN ARRAY

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
//THE ABOVE OUTPUT COMES IN AN ARRAY

// console.log(Object.entries(tinderUser))
//ENTRIES MAKE AN OBJECT INTO A 2D ARRAY
//FIRST VALUE IS KEY AND SECOND IS VALUES

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
//CHECKS IF THAT OBJECT HAS THE SPECIFIED PROPERTY


const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor
const {courseInstructor}=course
console.log(courseInstructor)
//IF WE USE THE DOT TO ACCESS THE OBJECT VALUE THEN IT IS REALLY LONG AND TEDIOUS IF WE USE IT MANY TIMES
//THEREFORE WE USE THE DESTRUCTURE APPROACH

const {courseInstructor:instructor}=course
console.log(instructor)
//WE HAVE JUST GIVEN A NAME FOR courseInstructor(AS IT IS A LONG NAME) AS instructor 

//ARRAY DESTRUCTURING
let a,b,rest
[a,b]=[10,20];
[a,b, ...rest]=[10,20,30,40,50]
console.log(rest)

//JSON FORMAT(API FORMAT)
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

//ANOTHER API FORMAT(ARRAY OF OBJECTS)
// [
//     {},
//     {},
//     {}
// ]


