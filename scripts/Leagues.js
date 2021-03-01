document.getElementById("mb1").onclick = function () {bytSida("index.html");};
document.getElementById("mb3").onclick = function () {bytSida("players.html");};
document.getElementById("mb4").onclick = function () {bytSida("teams.html");};
document.getElementById("mb2").onclick = function () {bytSida("tournaments.html");};

function bytSida(html) {
  window.location.href = html;
}



//Leagues

getJSONLeagues("United States");

const showLeagues = document.getElementById("show-leagues");
function getCountryLeaguesUrl(countryLeaguesNames) {
  const url = new URL("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?s=Soccer");

  url.searchParams.append("c", countryLeaguesNames);

  return url;
}

//fetch
function getJSONLeagues(countryLeaguesNames) {
  const url = getCountryLeaguesUrl(countryLeaguesNames);
  fetch(url)
    .then((response) => response.json())
    .then((data) => { 
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
  getJSONLeagues("United States");
});

const btnLeague2 = document.getElementById("btn-league2");
btnLeague2.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  getJSONLeagues("England");
});

const btnLeague3 = document.getElementById("btn-league3");
btnLeague3.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  getJSONLeagues("France");
});

const btnLeague4 = document.getElementById("btn-league4");
btnLeague4.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  getJSONLeagues("Germany");
});

const btnLeague5 = document.getElementById("btn-league5");
btnLeague5.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  getJSONLeagues("Italy");
});

const btnLeague6 = document.getElementById("btn-league6");
btnLeague6.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  getJSONLeagues("Spain");
});


//teams in a League

getJSONTeamsInLeague("4346");

const showTeamsInLeague = document.getElementById("show-teams-in-a-league");
function getTeamsInLeagueUrl(teamsInLeague) {
  const url = new URL("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?s=Soccer");

  url.searchParams.append("id", teamsInLeague);

  return url;
}

//fetch
function getJSONTeamsInLeague(teamsInLeague) {
  const url = getTeamsInLeagueUrl(teamsInLeague);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
       res = data.teams;
       creatTeamsLeague(res) 
    })
    .catch((err) => {
      alert(err);
    });
}

function creatTeamsLeague(res) {
  res.forEach((info) => {
    let colDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let doImg = document.createElement("img");
    let doDiv1 = document.createElement("div");
    let doDiv2 = document.createElement("div");
    let doDiv3 = document.createElement("div");

    doImg.src = info.strTeamBadge;
    doDiv1.innerHTML = "Team: " + info.strTeam;
    doDiv2.innerHTML = "League: " + info.strLeague;
    doDiv3.innerHTML = "Sport: " + info.strSport;

    colDiv.setAttribute("class", "col-md-3");
    $(cardDiv).attr({class: "card team-card bg-transparent text-white border-white", "data-aos": "fade-up", "data-aos-duration": "2000"});
    $(doImg).attr({class: "card-img-top", alt: "Card image Team" });
    doDiv1.setAttribute("class", "doTeamsLeague");
    doDiv2.setAttribute("class", "doTeamsLeague");
    doDiv3.setAttribute("class", "doTeamsLeague");

    showTeamsInLeague.appendChild(colDiv);
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(doImg);
    cardDiv.appendChild(doDiv1);
    cardDiv.appendChild(doDiv2);
    cardDiv.appendChild(doDiv3);
  });
}

const btnTeamsLeague1 = document.getElementById("btn-teams-league1");
btnTeamsLeague1.addEventListener("click", function () {
  showTeamsInLeague.innerHTML = "";
  getJSONTeamsInLeague("4346");
});

const btnTeamsLeague2 = document.getElementById("btn-teams-league2");
btnTeamsLeague2.addEventListener("click", function () {
  showTeamsInLeague.innerHTML = "";
  getJSONTeamsInLeague("4328");
});

const btnTeamsLeague3 = document.getElementById("btn-teams-league3");
btnTeamsLeague3.addEventListener("click", function () {
  showTeamsInLeague.innerHTML = "";
  getJSONTeamsInLeague("4334");
});

const btnTeamsLeague4 = document.getElementById("btn-teams-league4");
btnTeamsLeague4.addEventListener("click", function () {
  showTeamsInLeague.innerHTML = "";
  getJSONTeamsInLeague("4331");
});

const btnTeamsLeague5 = document.getElementById("btn-teams-league5");
btnTeamsLeague5.addEventListener("click", function () {
  showTeamsInLeague.innerHTML = "";
  getJSONTeamsInLeague("4332");
});

const btnTeamsLeague6 = document.getElementById("btn-teams-league6");
btnTeamsLeague6.addEventListener("click", function () {
  showTeamsInLeague.innerHTML = "";
  getJSONTeamsInLeague("4335");
});


//animation
AOS.init();
