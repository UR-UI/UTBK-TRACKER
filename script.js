const targetSoal = 180;
const soalHariIni = 117;

const percentage =
    Math.round((soalHariIni / targetSoal) * 100);

document.getElementById("percentage").textContent =
    percentage + "%";

document.getElementById("progressBar").style.width =
    percentage + "%";
