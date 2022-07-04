const column = document.querySelectorAll(".column")
const tooltip = document.querySelectorAll(".tooltip")
const requestFile = './data.json'
let today = new Date()
let Day= today.getDay()

fetch('./data.json')
  .then(response => {return response.json();})
  .then(data => {
  
// Change column height

  for (var i=0;i<7;i++){
    column[i].style.height = `${Math.floor(data[i].amount*2.5)}px`;
    tooltip[i].textContent =`$${data[i].amount}`;
  }

// Change color by day of week

  if (Day===0){
    column[6].style.backgroundColor = "hsl(186, 34%, 60%)";
  } else {
    column[Day-1].style.backgroundColor= "hsl(186, 34%, 60%)";
  }
})
