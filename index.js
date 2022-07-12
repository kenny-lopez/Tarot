function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}
pageScroll();

function hiddenA () {
    document.querySelector(".tarot-container-a").style.display = "none";
    document.querySelector(".tarot-container-b").classList.remove("displayHidden");
}

