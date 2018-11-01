/*
You may notice that your code to enable individual powers (not all at once) is very similar. To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-") in your function)
*/

let button = document.querySelectorAll("button")
// console.log(button);

button.forEach((button)=>{
  button.addEventListener("click", ()=>{
    let activatedSection = event.target.id.split("-").pop()
    let selectedSection = document.querySelector(`#${activatedSection}`)
    selectedSection.classList.remove("disabled")
    selectedSection.classList.add("enabled")
  })
})


document.querySelector("#activate-all").addEventListener("click", function enableAll(){
  let allSections = document.querySelectorAll(".power")
  allSections.forEach((section)=>{
    section.classList.remove("disabled")
    section.classList.add("enabled")
  })
})

document.querySelector("#deactivate-all").addEventListener("click", function disableAll(){
  let allSections = document.querySelectorAll(".power")
  allSections.forEach((section)=>{
    section.classList.remove("enabled")
    section.classList.add("disabled")
  })
})