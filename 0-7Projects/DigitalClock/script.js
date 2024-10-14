// function updateClock(){
//     const myDate=new Date()
//     document.querySelector('#clock').innerHTML=myDate.toLocaleTimeString()
// }
// setInterval(updateClock,1000)

const clock=document.querySelector('#clock')
setInterval(function(){
    const myDate=new Date()
    clock.innerHTML=myDate.toLocaleTimeString()
},1000)
