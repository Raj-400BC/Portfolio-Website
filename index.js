document.addEventListener('DOMContentLoaded', function () {
    let guy = document.getElementById('guy');
    let moving = {
      left: false,
      right: false,
      up: false,
      down: false
    };
    let movingValue = 5;

    function moveGuy() {
      if (moving.left && guy.offsetLeft > 0) {
        guy.style.left = guy.offsetLeft - movingValue + 'px';
      }
      if (moving.right && guy.offsetLeft + guy.width < window.innerWidth) {
        guy.style.left = guy.offsetLeft + movingValue + 'px';
      }
      if (moving.up && guy.offsetTop > 0) {
        guy.style.top = guy.offsetTop - movingValue + 'px';
      }
      if (moving.down && guy.offsetTop + guy.height < window.innerHeight) {
        guy.style.top = guy.offsetTop + movingValue + 'px';
        console.log("guy.height :" + guy.height)
      }

      requestAnimationFrame(moveGuy);
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        moving.left = true;
      } else if (event.key === 'ArrowRight') {
        moving.right = true;
      } else if (event.key === 'ArrowUp') {
        moving.up = true;
      } else if (event.key === 'ArrowDown') {
        moving.down = true;
      }
    });

    document.addEventListener('keyup', function (event) {
      if (event.key === 'ArrowLeft') {
        moving.left = false;
      } else if (event.key === 'ArrowRight') {
        moving.right = false;
      } else if (event.key === 'ArrowUp') {
        moving.up = false;
      } else if (event.key === 'ArrowDown') {
        moving.down = false;
      }
    });

    moveGuy();
  });