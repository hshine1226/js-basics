const title = document.querySelector("#title");

const BASE_COLOR = "aquamarine";
const OTHER_COLOR = "#6ab04c";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}
init();
