window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

function hiddenA () {
    document.querySelector(".tarot-container-a").style.display = "none";
    document.querySelector(".tarot-container-b").classList.remove("displayHidden");
}

