
"use strict";
document.getElementById("mb2").onclick = function() {bytSida("teams.html")};
document.getElementById("mb3").onclick = function() {bytSida("news.html")};

function bytSida(html) {
    window.location.href = html;
}

const searchPlayer = document.getElementById("searchBar");
const searchButton = document.getElementById("searchBtn");

searchButton.addEventListener("click", function () {
  
 
});

function getPlayerUrl(player) {
  const url = new URL("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?");

  url.searchParams.append("p", player)

  return url;
}



const outputCard1 = document.querySelector("#text");
const img1 = document.getElementById("img1");
async function gitJSONplayer (output, img, player) {

  const url = getPlayerUrl(player)

  const serverResponse = await fetch(url);

  const info = await serverResponse.json();
  
  output.innerHTML = info.player[0].strDescriptionEN;

  img.src = info.player[0].strRender;

};



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
  gitJSONplayer(outputCard1, img1, "Zlatan Ibrahimović");
});

const btnImg_5 = document.getElementById("btnImg5");
btnImg_5.addEventListener("click", function () {
  moveCardLeft();
  gitJSONplayer(outputCard1, img1, "Kylian Mbappé");
});

const btnImg_6 = document.getElementById("btnImg6");
btnImg_6.addEventListener("click", function () {
  moveCardRight();
  gitJSONplayer(outputCard1, img1, "Kevin De Bruyne");
});

const btnImg_7 = document.getElementById("btnImg7");
btnImg_7.addEventListener("click", function () {
  moveCardLeft();
  gitJSONplayer(outputCard1, img1, "Karim Benzema");
});

const btnImg_8 = document.getElementById("btnImg8");
btnImg_8.addEventListener("click", function () {
  moveCardRight();
  gitJSONplayer(outputCard1, img1, "Robert Lewandowski");
});

const btnImg_9 = document.getElementById("btnImg9");
btnImg_9.addEventListener("click", function () {
  moveCardLeft();
  gitJSONplayer(outputCard1, img1, "Erling Haaland");
});

const btnImg_10 = document.getElementById("btnImg10");
btnImg_10.addEventListener("click", function () {
   moveCardRight();
  gitJSONplayer(outputCard1, img1, "Sergio Ramos");
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