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