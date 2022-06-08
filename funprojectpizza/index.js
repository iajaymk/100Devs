document.getElementById('salami').addEventListener('click', addSalami);
document.getElementById('cheese').addEventListener('click', addChesse);
document.getElementById('pineapple').addEventListener('click', addPine);
document.getElementById('cheese_sauce').addEventListener('click', addCheeseCrust);
document.getElementById('marinara_sauce').addEventListener('click', addMarinaraCrust);
document.getElementById('spin').addEventListener('click', spinr);
let cheese = document.getElementById('cheese_picture');
let pineaplple = document.getElementById('pineapple_picture');
let salami = document.getElementById('salami_picture');
function addSalami(){
  salami.classList.toggle('active')
}
function addChesse(){
  cheese.classList.toggle('active')
}
function addPine(){
  pineaplple.classList.toggle('active')
}

function addCheeseCrust(){
  document.getElementById('pizza').style.backgroundImage="url('https://cdn.glitch.global/1fb13c96-ae66-4993-aa9c-eae56906f25a/cheese_sauce_pizza.png?v=1646962952916')";
  
}

function addMarinaraCrust(){
document.getElementById('pizza').style.backgroundImage="url('https://cdn.glitch.global/1fb13c96-ae66-4993-aa9c-eae56906f25a/1518249-removebg-preview.png?v=1646970662537')";
}
function spinr(){
  document.getElementById('pizza').classList.toggle('spin');
  // document.getElementById('pizza').style.backgroundImage="
}