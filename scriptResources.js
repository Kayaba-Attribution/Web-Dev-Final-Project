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
document.getElementById("smallAR").onclick = function(){
  console.log("hey");
  changeTextSize("small");
  
};

document.getElementById("mediumAR").onclick = function(){
  changeTextSize("medium");
};

document.getElementById("largeAR").onclick = function(){
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

//Filter based on class
//Defaut filter is all
filterSelection("all")
function filterSelection(c) {
  //Get all the elements possible to filter from
  var elements = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (var i = 0; i < elements.length; i++) {
    RemoveClass(elements[i], "show");
    if (elements[i].className.indexOf(c) > -1) AddClass(elements[i], "show");
  }
  
}

// Show filtered elements
function AddClass(element, name) {
  //Split elements and name
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  //Itereate and add the class name
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  //Split elements and name
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  //Itereate and remove the class name
  for (var i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  //Join elements
  element.className = arr1.join(" ");
}





