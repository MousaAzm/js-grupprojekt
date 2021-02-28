document.getElementById("mb1").onclick = function () {bytSida("index.html");};
document.getElementById("mb3").onclick = function () {bytSida("players.html");};
document.getElementById("mb4").onclick = function () {bytSida("teams.html");};
document.getElementById("mb2").onclick = function () {bytSida("tournaments.html");};

function bytSida(html) {
  window.location.href = html;
}

//Leagues

gitJSONLeagues("United States");

const showLeagues = document.getElementById("show-leagues");
function getCountryLeaguesUrl(countryLeaguesNames) {
  const url = new URL("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?s=Soccer");

  url.searchParams.append("c", countryLeaguesNames);

  return url;
}

//fetch
function gitJSONLeagues(countryLeaguesNames) {
  const url = getCountryLeaguesUrl(countryLeaguesNames);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res = data.countrys;
      creatLeagues(res);
    })
    .catch((err) => {
      alert(err);
    });
}

//display Leagues data in country
function creatLeagues(res) {
  res.forEach((info) => {
    let colDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let doImg = document.createElement("img");
    let doDiv1 = document.createElement("div");
    let doDiv2 = document.createElement("div");
    let doDiv3 = document.createElement("div");

    doImg.src = info.strLogo;
    doDiv1.innerHTML = "Country: " + info.strCountry;
    doDiv2.innerHTML = "League: " + info.strLeague;
    doDiv3.innerHTML = "Sport: " + info.strSport;

    colDiv.setAttribute("class", "col-md-3");
    $(cardDiv).attr({class: "card team-card bg-transparent text-white border-white", "data-aos": "fade-up", "data-aos-duration": "2000"});
    $(doImg).attr({class: "card-img-top", alt: "Card image League" });
    doDiv1.setAttribute("class", "doLeague");
    doDiv2.setAttribute("class", "doLeague");
    doDiv3.setAttribute("class", "doLeague");

    showLeagues.appendChild(colDiv);
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(doImg);
    cardDiv.appendChild(doDiv1);
    cardDiv.appendChild(doDiv2);
    cardDiv.appendChild(doDiv3);
  });
}

const btnLeague1 = document.getElementById("btn-league1");
btnLeague1.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("United States");
});

const btnLeague2 = document.getElementById("btn-league2");
btnLeague2.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("England");
});

const btnLeague3 = document.getElementById("btn-league3");
btnLeague3.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("France");
});

const btnLeague4 = document.getElementById("btn-league4");
btnLeague4.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("Germany");
});

const btnLeague5 = document.getElementById("btn-league5");
btnLeague5.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("Italy");
});

const btnLeague6 = document.getElementById("btn-league6");
btnLeague6.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("Spain");
});

//animation
AOS.init();
