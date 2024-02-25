//proměnné//
let inputBox = document.querySelector('#input-box')
let buttonClick = document.querySelector('#clicking')
const listContainer = document.querySelector('#list-container')

//Po kliknutí na tlačítko přidat//
buttonClick.addEventListener('click', function(){
   if(inputBox.value === ''){
      alert('Musíte něco vypsat!')
   } else{ 

      let li = document.createElement('li')
      li.innerHTML = inputBox.value
      listContainer.appendChild(li)

      let span = document.createElement('span')
      span.innerHTML = '\u00d7'
      li.appendChild(span)
   }
   
   inputBox.value = ''
   saveData()
})
   
//Po kliknutí na různé úkoly jako položky LI ze seznamu//
listContainer.addEventListener('click', function(e){
   if(e.target.tagName === 'LI'){
      e.target.classList.toggle('checked')
      saveData()
   } else if(e.target.tagName === 'SPAN'){
      e.target.parentElement.remove()
      saveData()
   }
})


//Uloží dané hodnoty do místního úložiště webu s klíčem DATA//
function saveData(){
   localStorage.setItem('data', listContainer.innerHTML)
}

//Funkce přidá uložená data z místního úložiště webu, aby se po znovuotevření načetla//
function showTask(){
   listContainer.innerHTML = localStorage.getItem('data')
}

showTask()