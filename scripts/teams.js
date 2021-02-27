
document.getElementById("mb1").onclick = function() {bytSida("index.html")};
document.getElementById("mb2").onclick = function() {bytSida("tournaments.html")};
document.getElementById("mb3").onclick = function() {bytSida("players.html")};

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
  if(searchTeams.value == "") {
    alert( "Write player name.");
   
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
    fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Manchester City")
  ])
  .then((responses) => { 
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  })
  .then((data) => {

    data.forEach(info => {

      let colDiv = document.createElement("div");
      let cardDiv = document.createElement("div");
      let doImg = document.createElement("img");
      let doDiv1 = document.createElement("div");
      let doDiv2 = document.createElement("div");
     
      
      doImg.src = info.teams[0].strTeamBadge;
      doDiv1.innerHTML = "Team: " + info.teams[0].strTeam;
      doDiv2.innerHTML = "Sport: " + info.teams[0].strSport;
           
      colDiv.setAttribute("class", "col-md-4");
      $(cardDiv).attr({class:"card team-card bg-transparent text-white border-white", "data-aos":"flip-left", "data-aos-duration":"1000"});
      $(doImg).attr({class:"card-img-top", alt:"Card image team"});
      doDiv1.setAttribute( "class", "doTeam");
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

 




  //animation
  AOS.init();