//DATES

// const myDate=new Date()
// console.log(myDate)//OUTPUT=>2024-08-26T05:18:38.283Z
//UNREADABLE

// console.log(myDate.toString())//OUTPUT=>Mon Aug 26 2024 10:49:34 GMT+0530 (India Standard Time)
//MORE READABLE

// console.log(myDate.toDateString())//OUTPUT=>Mon Aug 26 2024
//REMOVES THE TIME

// console.log(myDate.toISOString())//OUTPUT=>2024-08-26T05:21:07.236Z
//SAME AS PRINTING myDate

// console.log(myDate.toJSON())//OUTPUT=>2024-08-26T05:22:03.955Z
//SAME AS toISOString

// console.log(myDate.toLocaleString())//OUTPUT=>26/8/2024, 10:55:07 am
//READABLE


// console.log(myDate.toLocaleDateString())//OUTPUT=>26/8/2024
//GIVES ONLY THE DATE BUT JUST ADDS / AFTER DATES,MONTHS AND YEAR


// console.log(myDate.toLocaleTimeString())//OUTPUT=>10:53:45 am
//GIVES ONLY THE TIME

// console.log(typeof(myDate))//=>OBJECT

let myCreatedDate=new Date(2023, 0, 23)
//MONTH STARTS WITH ZERO IN JAVASCRIPT
console.log(myCreatedDate.toDateString())//OUTPUT=>Mon Jan 23 2023

// let myCreation=new Date(2023,0,23,5,3)
//CAN ADD MORE VARIABLES TO DEFINE TIME. 5 IS THE HOUR AND 3 ID THE MINUTES
// console.log(myCreation.toLocaleString())//OUTPUT=>23/1/2023, 5:03:00 am

// let myCreation=new Date("2023-01-14")
//ANOTHER WAY TO DECLARE A DATE(YY-MM-DD)
// console.log(myCreation.toLocaleString())//OUTPUT=>14/1/2023, 5:30:00 am


let myCreationIndianFormat=new Date("01-14-2023")
//FOR DECLARING THE DATE IN INDIAN FORMAT
// console.log(myCreationIndianFormat.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)//OUTPUT=>1724650476413
//GIVES THE CURRENT TIME IN MILLISECONDS FROM 1st JANUARY 1970

// console.log(myCreationIndianFormat.getTime())
//GIVES THE TIME FROM 1st JANUARY 1970 TO 14 JANUARY 2023
//CAN BE USED FOR COMPARISION

// console.log(Math.floor(Date.now()/1000))
//FOR CONVERTING MILLISECONDS TO SECONDS AND THEN ROUNDING THAT VALUE TO DECIMAL

let newDate=new Date()
console.log(newDate.getTime())
console.log(newDate.getMonth())//STARTING FROM ZERO
console.log(newDate.getHours())
console.log(newDate.getDay())//GIVES DAY OF THE WEEK
//FOR OBTATING THE CURRENT TIME, MONTH AND HOUR

//CAN ALSO USE STRING INTERPOLATION FOR WRITING DATES AND TIME IN A SPECIFIED FORMAT

// newDate.toLocaleString('default',{
//     weekday:"long",
// })
//CAN DEFINE CUSTOM DATE AND TIME USING LOCALESTRING