// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navmenu = document.getElementById('navmenu');
hamburger.addEventListener('click', () => {
    navmenu.classList.toggle('active');
    hamburger.classList.toggle('active');
})
// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.navmenu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navmenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});



// document.getElementById('download-btn').addEventListener('click', function () {
//     const link = document.createElement('a');
//     link.href = 'images/Ayush Chadokar cag'; // Yaha apni file ka path do
//     link.download = 'Ayush-CV.pdf'; // Rename bhi kar sakte ho
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// });


var typed = new Typed(".portfolio", {
        strings: ["Web Developer", "Meta Certified", "Digital Creator"],
        typeSpeed: 80,
        loop: true,
      });

      AOS.init({
            offset: 100,
            duration: 500,
          });


          const backTotop = document.querySelector('.backTotop');
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 130) {
    backTotop.style.display = "block";
  } else {
    backTotop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

