const input = document.querySelector("input");

console.log(input);

const button = document.querySelectorAll("button");

console.log(button.length);

const calculate = (num1,num2,a)=>{
    console.log("hello");
    
    if(a == '+'){
        let c = num1 + num2;
        console.log(c);
        return c;
    }
    if(a == "-"){
        let c = num1 - num2;
        return c;
    }
    if(a == "%"){
        let c = num1 * num2;
        return c;
    }
    if(a == "/"){
        let c = num1 / num2;
        return c;
    }
    if(a == "^"){
        let c = num1 % num1;
        return c;
    }

}//
let count =0;
let num1=0;////
let num2=0;
let a = "";

button.forEach
for(let i =0 ; i<16; i++){
   
    button[i].addEventListener("click",()=>{

        if(button[i].innerText=="+"|| button[i].innerText=="-"|| button[i].innerText=="*"|| button[i].innerText=="/"|| button[i].innerText=="%")
        {
            input.value = input.value + button[i].innerText;
            a = button[i].innerText;
            console.log(a);
        }
        else if(button[i].innerText == "Enter"){
            console.log(num1 + "" + num2 + "" + a)
            let f = calculate(num1,num2,a);
            input.value = f;
        }
        
                
        
    })
}

