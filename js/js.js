let showHidden = document.querySelector(".showHidden")
let hiddenImg = document.querySelector(".hidden-img")

console.log(showHidden);
console.log(hiddenImg);
showHidden.onmouseover = ()=>{
    hiddenImg.classList.remove("d-none");
}
hiddenImg.onmouseout = ()=>{
    
    hiddenImg.classList.add("d-none");
}

hiddenImg.onmouseover=()=>{
    hiddenImg.classList.remove("d-none");
}


