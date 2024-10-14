//JUST LIKE FILTER MAP RETURNS AUTOMATICALLY

const myNumbers=[1,2,3,4,5,6,7,8,9,10]


//OUTPUT GIVES AN ARRAY OF BOOLEAN(TRUE AND FALSE)
// const n=myNumbers.map((num)=>num>5)
// console.log(n);


// const newNums=myNumbers.map((num)=>num+10)
// console.log(newNums);

//CHAINING
const newNums=myNumbers
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
console.log(newNums);

