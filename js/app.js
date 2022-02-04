const btn = document.querySelector('button')
const unl = document.querySelector('ul')

btn.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  const int = document.querySelector('input')
  
  newLi.textContent = int.value

  if (inp.value !== ""){
    document.querySelector('ul').appendChild(newLi)
    inp.value = ""
    console.log(newLi)
  }
  
})







