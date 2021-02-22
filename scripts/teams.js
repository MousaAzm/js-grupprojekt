document.getElementById("mb1").onclick = function() {bytSida("index.html")};
document.getElementById("mb2").onclick = function() {bytSida("news.html")};
document.getElementById("mb3").onclick = function() {bytSida("players.html")};

function bytSida(html) {
    window.location.href = html;
}

/*
const searchTeams = document.getElementById("searchBarTeams");
const searchBtnTeams = document.getElementById("searchBtnTeams");

searchBtnTeams.addEventListener("click", function () {
  
 
});
*/

function getTeamUrl(teamName) {
    const url = new URL("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?");
  
    url.searchParams.append("t", teamName);
  
    return url;
  }


const tOutputCard1 = document.querySelector("#teamText1");
//const tOutputCard2 = document.querySelector("#teamText2");
//const tOutputCard3 = document.querySelector("#teamText3");


const tImg1 = document.getElementById("teamImg1");
//const tImg2 = document.getElementById("teamImg2");
//const tImg3 = document.getElementById("teamImg3");


async function gitJSONteam (output, img, teamName) {

    const url = getTeamUrl(teamName)

    const serverResponse = await fetch(url);

    const info = await serverResponse.json();

    output.innerHTML = info.teams[0].strDescriptionEN;

    img.src = info.teams[0].strTeamBadge;

  };

  gitJSONteam(tOutputCard1, tImg1, "Barcelona");
 // gitJSONteam(tOutputCard2, tImg2, "Liverpool");
 // gitJSONteam(tOutputCard3, tImg3, "Real Madrid");

  
