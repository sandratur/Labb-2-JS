//koppla variabel till knappar genom id
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");

const cartCounter = document.getElementById("cartCounter");

let i = 0; //ger i ett startvärde

removeButton.style.display="none"; //gömmer removeknapp

function addCart(){
     console.log("Du har klickat på add");
     cartCounter.textContent = ++i;
     if (i > 0) {
        removeButton.style.display="inline-block"; //visar remove igen eftersom i större än 0
    }
} ;
addButton.addEventListener("click", addCart); //knapp
  

function removeCart(){
    console.log("Du har klickat på remove");
    if (i > 0) {
        cartCounter.textContent = --i;
    }
    if (i === 0) {
    removeButton.style.display="none"; //gömmer remove igen när korgen blir tom
}
}
removeButton.addEventListener("click", removeCart); //knapp