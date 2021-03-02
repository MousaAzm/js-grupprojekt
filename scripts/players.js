import { getPlayersInfo} from "./getPlayers.js";

"use strict";

document.getElementById("mb1").onclick = function() {bytSida("index.html")};
document.getElementById("mb4").onclick = function() {bytSida("teams.html")};
document.getElementById("mb2").onclick = function() {bytSida("tournaments.html")};
document.getElementById("mb5").onclick = function () {bytSida("Leagues.html");};

function bytSida(html) {
    window.location.href = html;
}

const letters = /([0-9?=+-])/;
const searchBarPlayer = document.getElementById("searchBarPlayer");
const searchbtnPlayer = document.getElementById("searchBtnPlayer");
const img1 = document.getElementById("img1");
const outputCard1 = document.querySelector("#text");

searchbtnPlayer.addEventListener("click", () => {
  if(searchBarPlayer.value.match(letters)) {
    alert( "Check your players name.");
  } else {
    
    getPlayersInfo(outputCard1, img1, searchBarPlayer.value);
    moveCardRight();
  } 
});

// show info about player with click on pic(10)
const btnImg_1 = document.getElementById("btnImg1");
btnImg_1.addEventListener("click", function () {
  moveCardLeft();
  getPlayersInfo(outputCard1, img1, "Lionel Messi");
  
});


const btnImg_2 = document.getElementById("btnImg2");
btnImg_2.addEventListener("click", function () {
  moveCardRight();
  getPlayersInfo(outputCard1, img1, "Cristiano Ronaldo");
});


const btnImg_3 = document.getElementById("btnImg3");
btnImg_3.addEventListener("click", function () {
  moveCardLeft();
  getPlayersInfo(outputCard1, img1, "Neymar");
});


const btnImg_4 = document.getElementById("btnImg4");
btnImg_4.addEventListener("click", function () {
  moveCardRight();
  getPlayersInfo(outputCard1, img1, "kylian mbappé");
});

const btnImg_5 = document.getElementById("btnImg5");
btnImg_5.addEventListener("click", function () {
  moveCardLeft();
  getPlayersInfo(outputCard1, img1, "zlatan ibrahimović");
});

const btnImg_6 = document.getElementById("btnImg6");
btnImg_6.addEventListener("click", function () {
  moveCardRight();
  getPlayersInfo(outputCard1, img1, "Erling haaland");
});

const btnImg_7 = document.getElementById("btnImg7");
btnImg_7.addEventListener("click", function () {
  moveCardLeft();
  getPlayersInfo(outputCard1, img1, "Mohamed Salah");
});

const btnImg_8 = document.getElementById("btnImg8");
btnImg_8.addEventListener("click", function () {
  moveCardRight();
  getPlayersInfo(outputCard1, img1, "Robert Lewandowski");
});

const btnImg_9 = document.getElementById("btnImg9");
btnImg_9.addEventListener("click", function () {
  moveCardLeft();
  getPlayersInfo(outputCard1, img1, "Sergio Ramos");
});

const btnImg_10 = document.getElementById("btnImg10");
btnImg_10.addEventListener("click", function () {
  moveCardRight();
  getPlayersInfo(outputCard1, img1, "Sadio Mané");
});


//animation L
function moveCardLeft(){
  document.getElementById("showCard").animate([
    { transform: 'translatex(-100%)' },
    { transform: 'translatex(200px)' },
    { transform: 'translatex(0px)' }
  ], {
    duration: 2000,
  });
}

//animation R
function moveCardRight(){
  document.getElementById("showCard").animate([
    { transform: 'translatex(100%)' },
    { transform: 'translatex(-200px)' },
    { transform: 'translatex(0px)' }
  ], {
    duration: 2000,
  });
}

//gallery pic
document.addEventListener('DOMContentLoaded', function() { 
  let swiper = new Swiper('.swiper-container', {
     effect: 'coverflow',
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 'auto',
     coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: true,
     },
     pagination: {
       el: '.swiper-pagination',
     },
   });

});



