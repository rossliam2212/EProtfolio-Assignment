
window.onload = function() {

    $("toggle-dark-theme").onclick = function(){darkTheme();};
}

var $ = function(id) {

    return document.getElementById(id);
}

var darkTheme = function() {

    var element = document.body;
    element.classList.toggle("dark-theme");
}