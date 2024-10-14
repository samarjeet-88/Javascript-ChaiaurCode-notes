//SINGLETON.WHEN WE DECLARE AN OBJECT BY LITERAL THEN NO SINGLETON IS CREATED
//BUT WHEN WE DEFINE AN OBJECT BY CONSTRUCTOR THEN SINGLETON OBJECT IS CREATED
//In JavaScript, a singleton is a design pattern that restricts the instantiation of a class or object to one single instance


// Object.create//CONSTRUCTOR
// const user={}//OBJECT LITERALS


//BY DEFAULT THE KEY IS DEFINED AS A STRING
const mySym=Symbol("key1")

const user={
    name:"Hitesh",
    "full name":"Samar",
    [mySym]:"mykey1",//TO DEFINE SYMBOL AS A KEY WE USE []
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLogininDays:["Monday","Saturday"]
}
// console.log(user.email)//TO ACCESS THE VALUE OF OBJECT BY KEYS
// console.log(user["email"])//ANOTHER WAY TO ACCESS THE VALUES INSIDE AN OBJECT
//WE CANNOT ACCESS "full name" USING DOT

// console.log(user["full name"])
// console.log(user[mySym])



user.email="hitesh@chatgpt.com"//TO REPLACE THE VALUE

//TO FREEZE THE OBJECT(MAKE IT SUCH THAT THE CHANGES ARE NOT PROPOGATED)
// Object.freeze(user)
user.email="hitesh@microsoft.com"
// console.log(user)

user.greeting=function(){
    console.log("Hello World");
}
//TO REFER TO AN VALUE INSIDE THAT OBJECT WE USE this
user.greetingTwo=function(){
    console.log(`Hello World ${this.name}`);
}

//IN .functionname ONLY THE REFERENCE IS RETURNED BACK.THE FUNCTION IS NOT EXECUTED
// console.log(user.greeting)//UNDEFINED(BEACUSE WE ARE ACCESSING AN METHOD)

//WE ARE GETTING UNDEFINED BECAUSE WE ARE PRINTING THE PRITING STATEMENT
//In greeting & greetingTwo functions you  log messages to the console but don't return anything, so they implicitly return undefined as an output after every console.
console.log(user.greeting())
console.log(user.greetingTwo())
