 $("#leftside-navigation .sub-menu > a").click(function(e) {
    $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation()
  })


function openNav() {
  document.getElementById("mySidebar").style.left = "0px";
}

function closeNav() {
  document.getElementById("mySidebar").style.left = "-240px";
//   document.getElementById("main").style.marginLeft= "0";
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