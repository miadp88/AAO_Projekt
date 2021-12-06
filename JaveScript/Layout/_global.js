 $("#leftside-navigation .sub-menu > a").click(function(e) {
    $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation()
  })


function openNav() {
  document.getElementById("mySidebar").style.left = "0px";
  document.getElementById("mainContent").style.marginLeft= "260px";

}

function closeNav() {
  document.getElementById("mySidebar").style.left = "-240px";
  document.getElementById("mainContent").style.marginLeft= "60px";

}



$(' table tr td .showmore ').click(function () {
$(this).closest('tr.showmore').next('tr.rowdetail').toggle();

})

$(".rotate").click(function () {
$(this).toggleClass("down");
})



$(document).ready(function () {
$('[data-toggle="tooltip"]').tooltip();
});




var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

function myFunction() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) { 
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}