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


/*-----------------------------
Activities Slideshow functions
------------------------------*/

//Set default value
var slideIndex = 1;
//Show slide
showSlides(slideIndex);
//Change slides based on the prev and next buttons on HTML
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//Set current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//Show slide function and logic
function showSlides(n) {
  //Get slides
  var slides = document.getElementsByClassName("ActivitiesSlides");
  //Reset index if is greater than number of slides
  if (n > slides.length){
    slideIndex = 1}    
  //Reset index if is lower than number of slides
  if (n < 1){
    slideIndex = slides.length}
  //Traverse and hide slides
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  //Display only one slide
  slides[slideIndex-1].style.display = "block";  
}

//Map function pass latitude, longitude and desired zoom
function myMap(){
  var mapProp= {
    center:new google.maps.LatLng(42.944259411387876, -81.25306755858195),
    zoom:16,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
myMap();

/*------------------------
Change Article Text Size
-------------------------*/

//Get elements of page and apply a class on click.
document.getElementById("smallA").onclick = function(){
  changeTextSize("small");
};

document.getElementById("mediumA").onclick = function(){
  changeTextSize("medium");
};

document.getElementById("largeA").onclick = function(){
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




