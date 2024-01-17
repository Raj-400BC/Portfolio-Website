// document.addEventListener('DOMContentLoaded', function () {
//     let guy = document.getElementById('guy');
//     let moving = {
//     left: false,
//     right: false,
//     up: false,
//     down: false
//     };
//     let movingValue = 5;

// const { relative } = require("path");

    
    
//     function moveGuy() {
//     if (moving.left && guy.offsetLeft > 0) {
//     guy.style.left = guy.offsetLeft - movingValue + 'px';
//     }
//     if (moving.right && guy.offsetLeft + guy.width < window.innerWidth) {
//     guy.style.left = guy.offsetLeft + movingValue + 'px';
//     }
//     if (moving.up && guy.offsetTop > 0) {
//     guy.style.top = guy.offsetTop - movingValue + 'px';
//     }
//     if (moving.down && guy.offsetTop + guy.height < window.innerHeight) {
//     guy.style.top = guy.offsetTop + movingValue + 'px';
//     console.log("guy.height :" + guy.height)
//     }
    
    
//     requestAnimationFrame(moveGuy);
//     }
    
    
//     document.addEventListener('keydown', function (event) {
//     if (event.key === 'ArrowLeft') {
//     moving.left = true;
//     } else if (event.key === 'ArrowRight') {
//     moving.right = true;
//     } else if (event.key === 'ArrowUp') {
//     moving.up = true;
//     } else if (event.key === 'ArrowDown') {
//     moving.down = true;
//     }
//     });
    
    
//     document.addEventListener('keyup', function (event) {
//     if (event.key === 'ArrowLeft') {
//     moving.left = false;
//     } else if (event.key === 'ArrowRight') {
//     moving.right = false;
//     } else if (event.key === 'ArrowUp') {
//     moving.up = false;
//     } else if (event.key === 'ArrowDown') {
//     moving.down = false;
//     }
//     });
    
    
//     moveGuy();
//     });


//     // window.onload = function() {
//     //     // Get the ball element
//     //     let ball = document.getElementById('ball');

//     //     // Set initial position and velocity
//     //     let posX = 0;
//     //     let posY = 0;
//     //     let velocityX = 10;
//     //     let velocityY = 10;

//     //     // Function to update ball position
//     //     function updateBall() {
//     //         // Update position
//     //         posX += velocityX;
//     //         posY += velocityY;

//     //         // Bounce off the walls
//     //         if (posX < 0 || posX > window.innerWidth - ball.clientWidth) {
//     //             velocityX = -velocityX;
//     //         }
//     //         if (posY < 0 || posY > window.innerHeight - ball.clientHeight) {
//     //             velocityY = -velocityY;
//     //         }

//     //         // Update ball position
//     //         ball.style.left = posX + 'px';
//     //         ball.style.top = posY + 'px';

//     //         // Repeat the update using requestAnimationFrame
//     //         requestAnimationFrame(updateBall);
//     //     }

//     //     // Start the animation
//     //     updateBall();
//     // };
    

// document.addEventListener('DOMContentLoaded', function(){
//     let visi = document.getElementById('visi');
//     function divVisi(){
//         visi.style.display = "flex";
//     }
//     //  divVisi();
// })
