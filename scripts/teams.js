document.getElementById("mb1").onclick = function () {
  bytSida("index.html");
};
document.getElementById("mb2").onclick = function () {
  bytSida("tournaments.html");
};
document.getElementById("mb3").onclick = function () {
  bytSida("players.html");
};

function bytSida(html) {
  window.location.href = html;
}

const searchTeams = document.getElementById("searchBarTeams");
const searchBtnTeams = document.getElementById("searchBtnTeams");
const outImgTeam = document.getElementById("imgTeam");
const outTeamName = document.getElementById("teamN");
const outSportName = document.getElementById("sportN");
const outTeamsText = document.getElementById("textTeam");

searchBtnTeams.addEventListener("click", function () {
  if (searchTeams.value == "") {
    alert("Write player name.");
  } else {
    getTeamsBySearch(searchTeams.value);
    moveCardRight();
  }
});

function getTeamsBySearch(team) {
  fetch(getTeamUrl(team))
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network Response ERROR Try Again!");
      }
    })
    .then((info) => {
      outImgTeam.src = info.teams[0].strTeamBadge;
      outTeamName.innerHTML = "Team: " + info.teams[0].strTeam;
      outSportName.innerHTML = "Sport: " + info.teams[0].strSport;
      outTeamsText.innerHTML = info.teams[0].strDescriptionEN;
    })
    .catch((err) => {
      alert(err);
    });
}

//show teams in card with deiffrent team name(multiple api)
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
    data.forEach((teamInfo) => {
      let colDiv = document.createElement("div");
      let cardDiv = document.createElement("div");
      let doImg = document.createElement("img");
      let doDiv1 = document.createElement("div");
      let doDiv2 = document.createElement("div");

      doImg.src = teamInfo.teams[0].strTeamBadge;
      doDiv1.innerHTML = "Team: " + teamInfo.teams[0].strTeam;
      doDiv2.innerHTML = "Sport: " + teamInfo.teams[0].strSport;

      colDiv.setAttribute("class", "col-md-4");
      $(cardDiv).attr({class: "card team-card bg-transparent text-white border-white","data-aos": "flip-left","data-aos-duration": "1000",});
      $(doImg).attr({ class: "card-img-top", alt: "Card image team" });
      doDiv1.setAttribute("class", "doTeam");
      doDiv2.setAttribute("class", "doTeam");

      showInfo.appendChild(colDiv);
      colDiv.appendChild(cardDiv);
      cardDiv.appendChild(doImg);
      cardDiv.appendChild(doDiv1);
      cardDiv.appendChild(doDiv2);
    });
  })
  .catch((err) => {
    alert(err);
  });





//Leagues

gitJSONLeagues("United States");

const btnLeag6 = document.getElementById("btn-leag6");


const showLeagues = document.getElementById("show-leagues");
function getLeaguesUrl(countryLeaguesNames) {
  const url = new URL("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer");

  url.searchParams.append("c", countryLeaguesNames);

  return url;
}


function gitJSONLeagues(countryLeaguesNames) {
  
  const url = getLeaguesUrl(countryLeaguesNames);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {

      results = data.teams;
      results.forEach((info) =>{
    
        let colDiv = document.createElement("div");
        let cardDiv = document.createElement("div");
        let doImg = document.createElement("img");
        let doDiv1 = document.createElement("div");
        let doDiv2 = document.createElement("div");
        let doDiv3 = document.createElement("div");
        let doDiv4 = document.createElement("div");
  
        doImg.src = info.strTeamBadge;
        doDiv1.innerHTML = "Country: " + info.strCountry;
        doDiv2.innerHTML = "League: " + info.strLeague;
        doDiv3.innerHTML = "Team: " + info.strTeam;
        doDiv4.innerHTML = "Sport: " + info.strSport;
  
        colDiv.setAttribute("class", "col-md-3");
        $(cardDiv).attr({class: "card team-card bg-transparent text-white border-white", "data-aos":"fade-up", "data-aos-duration":"2000"});
        $(doImg).attr({ class: "card-img-top", alt: "Card image team" });
        doDiv1.setAttribute("class", "doTeam");
        doDiv2.setAttribute("class", "doTeam");
        doDiv3.setAttribute("class", "doTeam");
        doDiv4.setAttribute("class", "doTeam");
  
        showLeagues.appendChild(colDiv);
        colDiv.appendChild(cardDiv);
        cardDiv.appendChild(doImg);
        cardDiv.appendChild(doDiv1);
        cardDiv.appendChild(doDiv2);
        cardDiv.appendChild(doDiv3);
        cardDiv.appendChild(doDiv4);
      
    });
        
    }).catch((err) => {
      alert(err);
    });
  
}

const btnLeag1 = document.getElementById("btn-leag1");
btnLeag1.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("United States");
});

const btnLeag2 = document.getElementById("btn-leag2");
btnLeag2.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("England");
});

const btnLeag3 = document.getElementById("btn-leag3");
btnLeag3.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("France");
});

const btnLeag4 = document.getElementById("btn-leag4");
btnLeag4.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("Germany");
});

const btnLeag5 = document.getElementById("btn-leag5");
btnLeag5.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("Italy");
});

btnLeag6.addEventListener("click", function () {
  showLeagues.innerHTML = "";
  gitJSONLeagues("Spain");
});

//animation
AOS.init();
