//for each

const coding=["js","ruby","java","python","cpp"]
//CALLBACK FUNCTION DOESN'T HAVE A NAME
//for each LOOP REQURIES A CALLBACK FUNCTION
// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (val)=>{
//     console.log(val);   
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

//forEach HAS THE ACCESS OF THE VALUE,INDEX AND THE WHOLE ARRAY
// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);  
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName)
} )
