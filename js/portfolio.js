function hideAboutText() {
    var x = document.getElementById("aboutTextBox");
    if (x.style.display === "none") {
        x.style.display = "block";
  } else {
        x.style.display = "none";
    }
  }

function hideMenuText() {
    var x = document.getElementById("menuTextBox");
    if (x.style.display === "none") {
        x.style.display = "block";
  } else {
        x.style.display = "none";
    }
  }

  function hideShopCarousel() {
    var x = document.getElementById("carouselContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
  } else {
        x.style.display = "none";
    }
  }

$("#eggButton").click(function(){ 
    $("#eggModal").modal("toggle")  
  });