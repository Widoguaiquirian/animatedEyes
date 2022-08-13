'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
document.querySelector('body').addEventListener('mousemove', eyeBall);

function eyeBall() {
  let eye = document.querySelectorAll('.eye');
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientWidth / 2;
    let raidan = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = raidan * (180 / Math.PI) * -1 + 270;
    eye.style.transform = 'rotate(' + rot + 'deg)';
  });
}
