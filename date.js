//Codigo Tarot Numerico

//Months Array
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};
var dayOfMonth = range(1, 31);

let groupDays = document.createElement('optgroup');
document.getElementById('dias').appendChild(groupDays);

dayOfMonth.forEach(dayOfMonth => {
let option = document.createElement('option');
groupDays.appendChild(option);

option.innerHTML += dayOfMonth;
});

//Years Array
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};
var years = range(1922, 2022);
years.sort(function(a, b){return b - a});

let groupYears = document.createElement('optgroup');
document.getElementById('years').appendChild(groupYears);

years.forEach(years => {
let option = document.createElement('option');
groupYears.appendChild(option);

option.innerHTML += years;
});

//document.getElementById('dias').value
//document.getElementById('meses').value
//document.getElementById('years').value