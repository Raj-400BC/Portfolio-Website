document.getElementById("myBtn").addEventListener("click", function () {
    let one = document.getElementById("visi");
    let back = document.getElementById("back");
    let backText = document.getElementById("backText");
    let myBtn = document.getElementById("myBtn");

    if (one.style.display != "flex") {
      one.style.display = "flex";
      console.log("btn clicked");
      back.style.backgroundImage = "none";
      backText.style.display = "none";
      myBtn.style.position = "absolute";
      myBtn.style.left = "80%";
      myBtn.style.top = "19%";
      myBtn.innerHTML = 'Close'
      // myBtn.style.transform = "translate(-50%,-50%)";
    } else {
      one.style.display = "none";
      myBtn.style.left = "75vw";
      myBtn.style.top = "47%";
      // myBtn.style.transform = "none";
      back.style.backgroundImage = "url(/images/back1.webp)";
      backText.style.display = "inline-block";
      myBtn.innerHTML = "Click me!"
    }
  });
    const cursor = document.getElementById('cursor')
    document.addEventListener('mousemove', e =>{
      cursor.setAttribute("style" , "top:"+(e.pageY-10 )+ "px;left:"+ (e.pageX-10) + "px" );

    })
  


    window.onload = function() {
        // Get the ball element
        let ball = document.getElementById('myBtn');

        // Set initial position and velocity
        let posX = 0;
        let posY = 0;
        let velocityX = 3;
        let velocityY = 3;

        // Function to update ball position
        function updateBall() {
            // Update position
            posX += velocityX;
            posY += velocityY;

            // Bounce off the walls
            if (posX < 0 || posX > window.innerWidth - ball.clientWidth) {
                velocityX = -velocityX;
            }
            if (posY < 0 || posY > window.innerHeight - ball.clientHeight) {
                velocityY = -velocityY;
            }

            // Update ball position
            ball.style.left = posX + 'px';
            ball.style.top = posY + 'px';

            // Repeat the update using requestAnimationFrame
            requestAnimationFrame(updateBall);
        }

        // Start the animation
        updateBall();
    };
    const timeElement = document.getElementById('time');

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
