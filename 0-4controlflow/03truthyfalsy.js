const userEmail="h@hitesh.ai"
if(userEmail){
    console.log("Got user email");
}else{
    console.log("DONT HAVE AN user email");
}
//OUTPUT=>Got user email
//WE CONSIDER THE STRING(CONTAINING AN VALUE)AS TRUTY VALUE
const userName=""
if(userName){
    console.log("Got user name");
}else{
    console.log("DONT HAVE AN user name");
}
//OUTPUT=>DONT HAVE AN user name

const user=[]
if(user){
    console.log("Got user");
}else{
    console.log("DONT HAVE AN user");
}
//OUTPUT=>Got user
//WE CONSIDER EMPTY ARRAY AS AN TRUTHY VALUE

//FALSY VALUES=>false,0,,-0,BigInt(0n),"",null,undefined,NaN
//OTHER THAN THE ABOVE FALSY VALUES ALL THE VALUES ARE TRUTHY VALUES
//TRUTHY VALUES=>"0",'false'," ",[],{},function(){}(EMPTY FUNCTION)

// if(user.length==0){
//     console.log("EMPTY ARRAY");
// }

const emptyObject={}
if(Object.keys(emptyObject).length===0){
    console.log("EMPTY OBJECT");
}

//NULLISH COALESCING OPERATOR(??):null undefined

let val1;
// val1=5??10
// console.log(val1);//OUTPUT=>5

// val1=null??10
// console.log(val1);//OUTPUT=>10

//CHECKS IF THE VALUE IS NULL OR UNDEFINED

// val1= undefined??15//OUTPUT=>15
// console.log(val1);


val1=null??10??20
console.log(val1);//OUTPUT=>10

//TERNARY OPERATTOR

//condition ? true : false

const iceTea=100
iceTea <= 80 ? console.log("less than 80"):console.log("more than 80")
//OUTPUT=>MORE THAN 80


 