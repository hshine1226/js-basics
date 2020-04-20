const title = document.getElementById("title");
console.log(title);

title.innerHTML = "Hello from JS";

function handleClick(event){
    title.style.color = 'blue';
}
title.addEventListener('click', handleClick);
