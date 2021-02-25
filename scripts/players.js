import { gitJSONplayer, getPlayerUrl } from "./getPlayers.js";

"use strict";

document.getElementById("mb1").onclick = function() {bytSida("index.html")};
document.getElementById("mb4").onclick = function() {bytSida("teams.html")};
document.getElementById("mb2").onclick = function() {bytSida("tournaments.html")};

function bytSida(html) {
    window.location.href = html;
}

const searchPlayers = document.getElementById("searchBarPlayers");
const searchButtonPlayers = document.getElementById("searchBtnPlyers");

const img1 = document.getElementById("img1");
const outputCard1 = document.querySelector("#text");

searchButtonPlayers.addEventListener("click", function () {
  if(searchPlayers.value == "") {
    alert( "Write player name.");
   
  } else {
    getPlayersBySearch(searchPlayers.value);
    moveCardRight();
    
  } 
});



function getPlayersBySearch(player) {

  //fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchPlayers.value}`)
  fetch(getPlayerUrl(player))
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network Response ERROR Try Again!");
      }
    })
    .then((info) => {
      
      let imgP = info.player[0].strRender;
      let infoP = info.player[0].strDescriptionEN;

      img1.src = imgP;
      outputCard1.innerHTML = infoP;

    })
    .catch((err) => {
      alert(err);
    });
}

const btnImg_1 = document.getElementById("btnImg1");
btnImg_1.addEventListener("click", function () {
  moveCardLeft();
  gitJSONplayer(outputCard1, img1, "Lionel Messi");
  
});


const btnImg_2 = document.getElementById("btnImg2");
btnImg_2.addEventListener("click", function () {
  moveCardRight();
  gitJSONplayer(outputCard1, img1, "Cristiano Ronaldo");
});


const btnImg_3 = document.getElementById("btnImg3");
btnImg_3.addEventListener("click", function () {
  moveCardLeft();
  gitJSONplayer(outputCard1, img1, "Neymar");
});


const btnImg_4 = document.getElementById("btnImg4");
btnImg_4.addEventListener("click", function () {
  moveCardRight();
  gitJSONplayer(outputCard1, img1, "Terence Crawford");
});

const btnImg_5 = document.getElementById("btnImg5");
btnImg_5.addEventListener("click", function () {
  moveCardLeft();
  gitJSONplayer(outputCard1, img1, "LeBron James");
});

const btnImg_6 = document.getElementById("btnImg6");
btnImg_6.addEventListener("click", function () {
  moveCardRight();
  gitJSONplayer(outputCard1, img1, "Kevin De Bruyne");
});

const btnImg_7 = document.getElementById("btnImg7");
btnImg_7.addEventListener("click", function () {
  moveCardLeft();
  gitJSONplayer(outputCard1, img1, "George Kittle");
});

const btnImg_8 = document.getElementById("btnImg8");
btnImg_8.addEventListener("click", function () {
  moveCardRight();
  gitJSONplayer(outputCard1, img1, "Mookie Betts");
});

const btnImg_9 = document.getElementById("btnImg9");
btnImg_9.addEventListener("click", function () {
  moveCardLeft();
  gitJSONplayer(outputCard1, img1, "primoz roglic");
});

const btnImg_10 = document.getElementById("btnImg10");
btnImg_10.addEventListener("click", function () {
  moveCardRight();
  gitJSONplayer(outputCard1, img1, "Drew Doughty");
});



function moveCardLeft(){
  document.getElementById("showCard").animate([
    { transform: 'translatex(-100%)' },
    { transform: 'translatex(200px)' },
    { transform: 'translatex(0px)' }
  ], {
    duration: 2000,
  });
}

function moveCardRight(){
  document.getElementById("showCard").animate([
    { transform: 'translatex(100%)' },
    { transform: 'translatex(-200px)' },
    { transform: 'translatex(0px)' }
  ], {
    duration: 2000,
  });
}

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