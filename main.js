import './style.css'
const equal=document.getElementById("equal")
const operate=document.querySelector("#operate")
const clear=document.querySelector("#clear")

const result=document.querySelector("#result")
const allnum=document.querySelectorAll("[data-all]")
const func=document.querySelectorAll("[data-func]")
const getnumber=(numel)=>{
    numel.addEventListener("click",()=>{
        operate.innerText+=parseInt(numel.innerText)
    })
    
}
allnum.forEach((numel)=>getnumber(numel))
func.forEach((num)=>{
    console.log(num.innerText)
})
clear.addEventListener("click",()=>{
    operate.innerText=""
    result.innerText="0"
})
const setcalucaltion=(calc)=>{
    calc.addEventListener("click",()=>
    operate.innerText+=calc.innerText
    )
}
equal.addEventListener("click",()=>{
    let ans=eval(operate.innerText)
    result.innerText=ans

}

)
func.forEach((calc)=>setcalucaltion(calc))