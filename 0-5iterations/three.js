//for of(IS ITERABLE ON MAPS BUT NOT ON OBJECTS)

// const arr=[1,2,3,4,5]
// for (const val of arr) {
//     console.log(val);
// }

// const greetings="Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps(ONLY UNIQUE VALUES)

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States")
map.set('FR',"France")
map.set('IN',"India")
// console.log(map);

//BOTH KEY AND VALUE WILL BE PRINTED
// for (const key of map) {
//     console.log(key);
// }

// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }

const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}
//ERROR
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }



