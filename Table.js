const inputBox = document.querySelector(".inputBox")
const submitBtn = document.querySelector(".submitBtn")
const container = document.querySelector(".container")

const table=()=>{
    container.innerHTML=""
    for (let i=1; i<=10; i++){
        container.innerHTML+=`<div> ${inputBox.value} x ${i} = ${inputBox.value*i} </div>`
    }
}
submitBtn.addEventListener("click",table)

