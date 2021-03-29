/*------------------------
Navbar & Burger functions
-------------------------*/

function navMovement(){
  //Select the required classes
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.navbar-links');
  var navLinks = document.querySelectorAll(".navbar-links li");
  //add listener on click for the burger menu
  burger.addEventListener('click', () => {
    //add a class to nav with return value true
    nav.classList.toggle('nav-active');

    //Links transition animation when link.style.animation is false
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
          link.style.animation = ""
      }
       else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
}
//Navbar function call
navMovement();

/*------------------------
Change Article Text Size
-------------------------*/

//Get elements of page and apply a class on click.
document.getElementById("smallAA").onclick = function(){
  changeTextSize("small");
};

document.getElementById("mediumAA").onclick = function(){
  changeTextSize("medium");
};

document.getElementById("largeAA").onclick = function(){
  changeTextSize("large");
};

//Create a list with all the articles in the document
//Itereate trought the list and add the desired class.
function changeTextSize(c){
  text = document.getElementsByTagName("article");
  console.log(text)
  for(var i = 0; i < text.length; i++)
  {
    text[i].className=c;
  };
  
};




