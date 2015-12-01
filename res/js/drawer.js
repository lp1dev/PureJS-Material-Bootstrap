var isDrawerOpened = false;
var mainContainer, navigationDrawer, filter;
document.addEventListener("DOMContentLoaded", function(event) {
    mainContainer = document.getElementById("mainContainer");
    navigationDrawer = document.getElementById("drawer");
    filter = document.getElementById("filter");
    mainContainer.style.marginLeft = 0;
});

function drawer(){
    if (isDrawerOpened)
	closeDrawer();
    else
	openDrawer();
    isDrawerOpened = !isDrawerOpened;
}

function openDrawer(){
    mainContainer.style.marginLeft = navigationDrawer.style.width;
    navigationDrawer.className = "drawer shadowed";
    filter.style.opacity = 0.5;
}

function closeDrawer(){
    mainContainer.style.marginLeft = 0;
    navigationDrawer.className = "drawer shadowed closed";
    filter.style.opacity = 0;
}
