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

  


