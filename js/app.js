const nav = document.querySelector(".nav-links"); // Accessing the parent elements
const burger = document.querySelector(".burger"); //Accessing the parent element
const links = nav.querySelectorAll("a"); // Accessing the child elements from already called parent elements

burger.addEventListener("click", () =>{ // () => means execute below code stataments
    nav.classList.toggle("nav-open"); //Toggle means To - fro which is open and close or forward and backward
    burger.classList.toggle("toggle"); // Adding the animation on the toggle. 
})

links.forEach(link => {
    link.addEventListener("click", ()=>{ // This is a for loop to select all the links hence for whichever the link selected, do the following
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle"); // Adding the animation on the toggle. 

    })
})

/* ABOUT COLLAPSIBLE CONTENT */

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}