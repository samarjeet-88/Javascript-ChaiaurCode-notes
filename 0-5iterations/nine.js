//REDUCE

// const array1=[1,2,3,4]
// const initialValue=0;
// //THE ACCUMULATOR IS INITIALISED WITH THE VALUE THAT INITIALVALUE HAS
// //CURRENT VALUE ARE THE VALUES OF THE ARRAY WE ARE LOOPING THROUGH
// const sumWithInitial=array1.reduce(
//     (accumulator,currentValue)=> accumulator+currentValue,
//     initialValue
// )
// console.log(sumWithInitial)


const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval${currval}`);
//     return acc+currval
// },0)

// const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
// console.log(myTotal);


const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

const myTotal=shoppingCart.reduce((acc,currval)=>acc+currval.price,0)
console.log(myTotal);
