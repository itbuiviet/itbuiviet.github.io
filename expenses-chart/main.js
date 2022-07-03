const column = document.querySelectorAll(".column")
const tooltip = document.querySelectorAll(".tooltip")
let today = new Date()
let Day= today.getDay()
const data =[
    {
    "day": "mon",
    "amount" : 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }];

// Change column height

for (var i=0;i<7;i++){
    column[i].style.height = `${Math.floor(data[i].amount*2.5)}px`
    tooltip[i].textContent =`$${data[i].amount}`
}

// Change color by day of week
 
if (Day===0){
    column[6].style.backgroundColor = "hsl(186, 34%, 60%)"
} else{
    column[Day-1].style.backgroundColor= "hsl(186, 34%, 60%)"
}