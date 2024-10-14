const form=document.querySelector('form')
form.addEventListener("submit",function(e){
    e.preventDefault()
    const weight=parseInt(document.querySelector('#weight').value)
    const height=parseInt(document.querySelector('#height').value)
    const result=document.querySelector('#results')
    if(isNaN(weight)||weight<0){
        result.innerHTML="Please select a valid weight";
    }else if(isNaN(height)||height<0){
        result.innerHTML="Please select a valid height"
    }else{
        const bmi=(weight)/(((height*height)/10000).toFixed(2))
        let textNode;
        if(bmi<18.6){
            textNode="Underweight"
        }else if(bmi>=18.6 && bmi<=24.9){
            textNode="Normal weight"
        }else{
            textNode="Overweight"
        }result.innerHTML=`Your BMI is ${bmi} and you are ${textNode}`;
    }
})