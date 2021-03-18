// Open close mobile menu

function openNav() {
  document.getElementById("mySidenav").style.width = "330px";
  document.getElementById("main").style.marginLeft = "330px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

// Open close mobile search
function openSearch() {
  document.getElementById("searchOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("searchOverlay").style.display = "none";
}