const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")
buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>changeColor(e))
})

function changeColor(e){
    const bgcolor = e.target.id; 
    body.style.backgroundColor=bgcolor
}
