'use strict';
{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });
    
    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });
}
function handleEnter(event) {
    if (event.key === 'Enter') {
        searchFunction();
    }
}
window.onscroll = function() {
    updateProgressBar();
  };
  function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
    document.querySelector(".progress-bar").style.width = scrollPercentage + "%";
  }
  

  document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const openButton = document.getElementById("open");
    const closeButton = document.getElementById("closeButton");

  
    openButton.addEventListener("click", function() {
        overlay.style.display = "flex";
    });

   
    closeButton.addEventListener("click", function() {
        overlay.style.display = "none";
    });
});

  


