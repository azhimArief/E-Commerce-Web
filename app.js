const wrapper = document.querySelector(".sliderWrapper");
/* querySelector() returns the first Element within the document 
that matches the specified selector,
or group of selectors. If no matches are found, null is returned.
*/
const menuItems = document.querySelectorAll(".menuItem")

console.log(wrapper);

wrapper.style.transform = "translateX(-100vw)"
/*
for movement of slider 
*/