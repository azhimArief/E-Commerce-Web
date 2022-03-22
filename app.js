const wrapper = document.querySelector(".sliderWrapper");
/* querySelector() returns the first Element within the document 
that matches the specified selector,
or group of selectors. If no matches are found, null is returned.
*/
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw )`;
  });
});
/*
Above is an event listener for the slider
wrapper.style.transform = "translateX(-100vw)"
for movement of slider 
*/
