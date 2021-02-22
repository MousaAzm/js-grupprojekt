"use strict";
document.getElementById("mb3").onclick = function() {bytSida("players.html")};
document.getElementById("mb4").onclick = function() {bytSida("teams.html")};
document.getElementById("mb2").onclick = function() {bytSida("news.html")};

function bytSida(html) {
    window.location.href = html;
}