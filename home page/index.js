const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 10) + "px;left:" + (e.pageX - 10) + "px"
  );
});
// document.getElementById("cap1").onclick = function() {
//   var navLinks = document.querySelectorAll('.header .nav-links ul li');
//   for (var i = 0; i < navLinks.length; i++) {
//     navLinks[i].style.transition = "left 0.5s"; // Adjust the duration as needed
//     navLinks[i].style.left = "-150px";
//   }
// }



window.onload = function () {
  // Get the backText element
  let nameText = document.getElementById("nameText");
  let myImg = document.getElementById("myImg");
  let backText = document.getElementById("backText");
  let visi = document.getElementById("visi");
  // Set initial font-size

  // Wait for 3 seconds and then reduce the font-size with a smooth transition
  setTimeout(function () {
    nameText.style.transition = "font-size 0.5s"; // Adjust the duration as needed
    nameText.style.fontSize = "200px";
  }, 3000);

  // Positioning the Name in the left top
  setTimeout(function () {
    backText.style.transition = "left 0.5s , top 0.5s"; // Adjust the duration as needed
    backText.style.left = "-130px";
    backText.style.top = "0px";
  }, 3500);

  //AboutMe transition
  setTimeout(function () {
    visi.style.display = "flex";
    visi.style.transition = "left 0.5s , top 0.5s"; // Adjust the duration as needed
    visi.style.left = "400px";
    visi.style.top = "550px";
  }, 4000);

  // Imgae transition
  setTimeout(function () {
    myImg.style.transition = "left 1.5s";
    myImg.style.left = "650px";
  }, 3000);
  setTimeout(function() {
    var navLinks = document.querySelectorAll('.header .nav-links ul li');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.transition = "letter-spacing 0.5s"; // Adjust the duration as needed
      navLinks[i].style.letterSpacing = "0px";
    }

   
  }, 1000);
  
  
};

const timeElement = document.getElementById("time");
// Create a new Date object
const currentDate = new Date();
// Get the components of the date
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Display the date and time in the 'time' element
timeElement.innerHTML = `${hours}:${minutes}`;
