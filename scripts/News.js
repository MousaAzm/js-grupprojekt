document.getElementById("mb1").onclick = function() {bytSida("index.html")};

document.getElementById("mb3").onclick = function() {bytSida("players.html")};

document.getElementById("mb4").onclick = function() {bytSida("teams.html")};

function bytSida(html) {
    window.location.href = html;
}



let newsApikey = "bb2a3bf2c77443c1b4e5994489c405de";
let newsApiUrl = "http://newsapi.org/v2/top-headlines?q=" + query + "&from=2021-01-19&sortBy=publishedAt&apiKey=" + newsApikey;