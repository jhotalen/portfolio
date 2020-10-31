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

function hideShopText() {
  var x = document.getElementById("shopTextBox");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
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

function makeShopOpaque(){
  var x = document.getElementById("shopTextBox");
  x.style.display = "none";
}

$('.btn-next').click(function(){
  $('.carousel').carousel('next');
});

$("#eggButton").click(function () {
  $("#eggModal").modal("toggle")
});



