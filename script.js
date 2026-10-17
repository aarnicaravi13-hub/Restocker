console.log("mission successful");
const additembutton=document.getElementById("add-item")
additembutton.addEventListener("click",() => {console.log("Add the item");
addformbutton.style.display="flex";});
const addformbutton=document.getElementById("add-form")
const nameoftheitem = document.getElementById("Item-name");
addformbutton.style.display="none";
addformbutton.addEventListener("submit",(event)=>{event.preventDefault();console.log(nameoftheitem.value);});
const lastpurchasedv=document.getElementById("Last-purchased");
addformbutton.addEventListener
