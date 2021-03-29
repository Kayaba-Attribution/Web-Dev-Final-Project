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
document.getElementById("smallAN").onclick = function(){
  console.log("hey");
  changeTextSize("small");
  
};

document.getElementById("mediumAN").onclick = function(){
  changeTextSize("medium");
};

document.getElementById("largeAN").onclick = function(){
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

//Map function pass latitude, longitude and desired zoom
function myMap(){
  var mapProp= {
    center:new google.maps.LatLng(42.944259411387876, -81.25306755858195),
    zoom:16,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
myMap();

//SMTPJS library for sending Emails
function sendEmail(){
  //Get inputs and save them to variables
  var name = document.getElementById("nameEmail").value;
  var mail = document.getElementById("mailEmail").value;
  
  //Validate Inputs
  if (ValidateName(name) && ValidateEmail(mail)){
    //Send email using token from personal email to email in the input
    Email.send({
      SecureToken : "3b2451d7-0bfa-4f73-9366-dc65d0a598c3",
      To : mail,
      From : "jdavidgomez@gmail.com",
      Subject : "This is a project so no info will be sended",
      Body : "Web development project"
      }).then(
        //If succesful alert with message
        message => alert(name + ", an Email has been sent sucessfully to " + mail + " PD: This is a project so no newsletters will be sended")
      );
  };
  
}

//Validate name only accepts letters
function ValidateName(inputText){
  var nameformat = /^[a-zA-Z]+$/;
  if (inputText.match(nameformat)) {
    return true;
  } 
  else {
    alert("Please enter only letters in name");
    return false;
  }
}

//Validate email only accepts valid EMail
function ValidateEmail(inputText){

  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.match(mailformat))
  {
  return true;
  }
  else
  {
  alert("You have entered an invalid email address, please try again");
  return false;
  }
};


//Validate lastname only accepts letters
function ValidateLastName(inputText){
  var nameformat = /^[a-zA-Z]+$/;
  if (inputText.match(nameformat)) {
    return true;
  } 
  else {
    alert("Please enter only letters in last name");
    return false;
  }
}


//Validate phonenumber only accepts numbers with this format xxx xxx xxxx
function ValidatePhoneNumber(inputText){
  var nameformat = /^[0-9]{3}\s[0-9]{3}\s[0-9]{4}/;
  if (inputText.match(nameformat)) {
    return true;
  } 
  else {
    alert("Please enter your full phone");
    return false;
  }
}

//Validate type returns true if users chooses something
function ValidateType(inputText){
  if(inputText != "none"){
    return true;
  }
  else{
    alert("Please Choose a subscribtion type");
    return false;
  }
}

//Submit form and validate all inputs
function submitMeetingForm(){
  var name = document.getElementById("firstnameMeeting").value;
  var lastName = document.getElementById("lastnameMeeting").value;
  var phone = document.getElementById("phoneMeeting").value;
  var type = document.getElementById("Price").value;
  var subject = document.getElementById("subject").value;
  //If all return true alert
  if(ValidateName(name) &&
   ValidateLastName(lastName) && 
   ValidatePhoneNumber(phone) &&
   ValidateType(type)){
    alert("Thank you "+ name + " " + lastName + "please come visit us soon!");
   }





}



