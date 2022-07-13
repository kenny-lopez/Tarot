function hiddenA () {
    document.querySelector(".tarot-container-a").classList.add("displayHidden");
    document.querySelector(".tarot-container-b").classList.remove("displayHidden");
}

function hiddenBTarotDaily () {
    document.querySelector(".tarot-container-b").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily").classList.remove("displayHidden");
}

function hiddenDailyToResult () {
    document.querySelector(".tarot-container-daily").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily-result").classList.remove("displayHidden");
}

function returnToB () {
    document.querySelector(".tarot-container-daily-result").classList.add("displayHidden");
    document.querySelector(".tarot-container-b").classList.remove("displayHidden");
}
