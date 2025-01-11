const slide_value = document.querySelector("span");
const input_slider = document.querySelector("input");

input_slider.addEventListener("input", ()=>{
    let value = input_slider.value;
    slide_value.textContent = value;
    slide_value.style.left = (value/2) + "%";
})