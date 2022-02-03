const btn = document.querySelector('button')

btn.addEventListener('click', function(evt){
  const int = document.querySelector('input')
  

  const unl = document.querySelector('ul')
  const newLi = document.createElement('li')

  newLi.textContent = int.value
  int.value = ''
  console.log(newLi)
})






