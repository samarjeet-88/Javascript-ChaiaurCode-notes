const promiseOne=new Promise(function(resolve,reject){
    //DO AN ASYNC TASK
    //DB CALLS,CRYPTOGRAPHY,NETWORK CALL
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"SAMAR",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"));


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

