// const linked = document.getElementById('cap1');
// linked.addEventListener("click", function() {
//   // Set styles for the .time div
//   console.log("click")
//   let timeDiv = document.getElementById('logo');
//   timeDiv.style.display = 'none';

//   // Set styles for the active link (cap1)
//   linked.style.transition = 'left 0.5s'; // Adjust the duration as needed
//   linked.style.left = '-200px';
// });



// // Get the elements
// const headLink1 = document.getElementById("headLink1");
// const timeDiv = document.getElementById("timediv");
// Add a click event listener to headLink1
// headLink1.addEventListener("click", () => {
//   // Get the position of timeDiv
//   const timeDivRect = timeDiv.getBoundingClientRect();

//   // Set the transition properties for smooth animation
//   headLink1.style.transition = "all 0.5s ease-in-out";

//   // Set the position of headLink1 to the position of timeDiv
//   headLink1.style.position = "fixed";
//   headLink1.style.top = `${timeDivRect.top}px`;
//   headLink1.style.left = `${timeDivRect.left}px`;

//   // Hide timeDiv with a delay to allow time for the transition
//   setTimeout(() => {
//     timeDiv.style.display = "none";
//   }, 500);
// });

const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 10) + "px;left:" + (e.pageX - 10) + "px"
  );
});

document.getElementById("cap1").active

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

