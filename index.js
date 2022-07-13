function hiddenA () {
    document.querySelector(".tarot-container-a").style.display = "none";
    document.querySelector(".tarot-container-b").classList.remove("displayHidden");
}

function hiddenBTarotDaily () {
    document.querySelector(".tarot-container-b").style.display = "none";
    document.querySelector(".tarot-container-daily").classList.remove("displayHidden");
}

function hiddenDailyToResult () {
    document.querySelector(".tarot-container-daily").style.display = "none";
    document.querySelector(".tarot-container-daily-result").classList.remove("displayHidden");
}
