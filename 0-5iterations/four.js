//for in loop IS USED FOR ITERATING OBJECT
//FOR IN LOOP GIVES THE KEY. FOR OF LOOP GIVES THE VALUE


const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

// for (const key in myObject) {
//     console.log(`${key} is for ${myObject[key]}`);
// }


//PRINTS KEY OF ARRAYS(0,1,2.... BASICALLY INDEX)
const programming=["js","rb","py","java","cpp"]
// for (const key in programming) {
//     console.log(key); 
//     console.log(programming[key]);   
// }



const map=new Map()
map.set('IN',"India")
map.set('USA',"United States")
map.set('FR',"France")
map.set('IN',"India")
for (const key in map) {
    console.log(key);
}
//OUTPUT IS NOTHING
//MAP IS NOT ITERABLE

