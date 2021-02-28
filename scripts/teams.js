document.getElementById("mb1").onclick = function () {bytSida("index.html");};
document.getElementById("mb2").onclick = function () {bytSida("tournaments.html");};
document.getElementById("mb3").onclick = function () {bytSida("players.html");};
document.getElementById("mb5").onclick = function () {bytSida("Leagues.html");};

function bytSida(html) {
  window.location.href = html;
}

const searchTeams = document.getElementById("searchBarTeams");
const searchBtnTeams = document.getElementById("searchBtnTeams");
const outImgTeam = document.getElementById("imgTeam");
const outTeamName = document.getElementById("teamN");
const outSportName = document.getElementById("sportN");
const outTeamsText = document.getElementById("textTeam");

getTeamsBySearch("Atlanta United");
  
function getTeamsUrl(team) {
  const url = new URL("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?");

  url.searchParams.append("t", team);

  return url;
}

function getTeamsBySearch(team) {
  const url = getTeamsUrl(team);
  fetch(url)
    .then((response) => {
      
      return response.json(); 
    })
    .then((data) => {
      
      outImgTeam.src = data.teams[0].strTeamBadge;
      outTeamName.innerHTML = "Team: " + data.teams[0].strTeam;
      outSportName.innerHTML = "Sport: " + data.teams[0].strSport;
      outTeamsText.innerHTML = data.teams[0].strDescriptionEN;
    })
    .catch((err) => {
      alert(err);
    });
}




//show teams (multiple api)
const showInfo = document.getElementById("show-team");
Promise.all([
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Barcelona"),
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal"),
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Real Madrid"),
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Manchester United"),
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Bayern Munich"),
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Chelsea"),
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Liverpool"),
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Juventus"),
  fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Manchester City"),
])
  .then((responses) => {
    return Promise.all(
      responses.map(function (response) {
        return response.json();
      })
    );
  })
  .then((data) => {
    res = data;
    creatTeamsInfo(res);  
  })
  .catch((err) => {
    alert(err);
  });

//display 9 Teams 
function creatTeamsInfo(res){
  res.forEach((info) => {
    let colDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let doImg = document.createElement("img");
    let doDiv1 = document.createElement("div");
    let doDiv2 = document.createElement("div");

    doImg.src = info.teams[0].strTeamBadge;
    doDiv1.innerHTML = "Team: " + info.teams[0].strTeam;
    doDiv2.innerHTML = "Sport: " + info.teams[0].strSport;

    colDiv.setAttribute("class", "col-md-4");
    $(cardDiv).attr({class: "card team-card bg-transparent text-white border-white", "data-aos": "flip-left", "data-aos-duration": "1000"});
    $(doImg).attr({class: "card-img-top", alt: "Card image team"});
    doDiv1.setAttribute("class", "doTeam");
    doDiv2.setAttribute("class", "doTeam");
    
    showInfo.appendChild(colDiv);
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(doImg);
    cardDiv.appendChild(doDiv1);
    cardDiv.appendChild(doDiv2);
  });
}

//Teams

gitJSONTeams("United States");

const showTeams = document.getElementById("show-teams");
function getCountryTeamsUrl(countryTeamsNames) {
  const url = new URL("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer");

  url.searchParams.append("c", countryTeamsNames);

  return url;
}

//fetch
function gitJSONTeams(countryTeamsNames) {
  const url = getCountryTeamsUrl(countryTeamsNames);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res = data.teams;
      creatTeams(res);
    })
    .catch((err) => {
      alert(err);
    });
}

//display Teams data in country
function creatTeams(res){
  res.forEach((info) => {

    let colDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let doImg = document.createElement("img");
    let doDiv1 = document.createElement("div");
    let doDiv2 = document.createElement("div");
    let doDiv3 = document.createElement("div");
    
    doImg.src = info.strTeamBadge;
    doDiv1.innerHTML = "Country: " + info.strCountry;
    doDiv2.innerHTML = "Team: " + info.strTeam;
    doDiv3.innerHTML = "Sport: " + info.strSport;

    colDiv.setAttribute("class", "col-md-3");
    $(cardDiv).attr({class: "card team-card bg-transparent text-white border-white", "data-aos": "fade-up", "data-aos-duration": "2000"});
    $(doImg).attr({class: "card-img-top", alt: "Card image team"});
    doDiv1.setAttribute("class", "doTeam");
    doDiv2.setAttribute("class", "doTeam");
    doDiv3.setAttribute("class", "doTeam");
    
    
    showTeams.appendChild(colDiv);
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(doImg);
    cardDiv.appendChild(doDiv1);
    cardDiv.appendChild(doDiv2);
    cardDiv.appendChild(doDiv3);
    
  });
}


const btnTeam1 = document.getElementById("btn-team1");
btnTeam1.addEventListener("click", function () {
  showTeams.innerHTML = "";
  gitJSONTeams("United States");
});

const btnTeam2 = document.getElementById("btn-team2");
btnTeam2.addEventListener("click", function () {
  showTeams.innerHTML = "";
  gitJSONTeams("England");
});

const btnTeam3 = document.getElementById("btn-team3");
btnTeam3.addEventListener("click", function () {
  showTeams.innerHTML = "";
  gitJSONTeams("France");
});

const btnTeam4 = document.getElementById("btn-team4");
btnTeam4.addEventListener("click", function () {
  showTeams.innerHTML = "";
  gitJSONTeams("Germany");
});

const btnTeam5 = document.getElementById("btn-team5");
btnTeam5.addEventListener("click", function () {
  showTeams.innerHTML = "";
  gitJSONTeams("Italy");
});

const btnTeam6 = document.getElementById("btn-team6");
btnTeam6.addEventListener("click", function () {
  showTeams.innerHTML = "";
  gitJSONTeams("Spain");
});

//animation
AOS.init();
