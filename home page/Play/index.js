const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 10) + "px;left:" + (e.pageX - 10) + "px"
  );
});

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
