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


  const nameT1 = document.getElementById("teamN1");
  const nameT2 = document.getElementById("teamN2");
  const nameT3 = document.getElementById("teamN3");
  const nameT4 = document.getElementById("teamN4");
  const nameT5 = document.getElementById("teamN5");
  const nameT6 = document.getElementById("teamN6");
  const nameT7 = document.getElementById("teamN7");
  const nameT8 = document.getElementById("teamN8");
  const nameT9 = document.getElementById("teamN9");
  
  const sportN1 = document.getElementById("sportN1");
  const sportN2 = document.getElementById("sportN2");
  const sportN3 = document.getElementById("sportN3");
  const sportN4 = document.getElementById("sportN4");
  const sportN5 = document.getElementById("sportN5");
  const sportN6 = document.getElementById("sportN6");
  const sportN7 = document.getElementById("sportN7");
  const sportN8 = document.getElementById("sportN8");
  const sportN9 = document.getElementById("sportN9");
  
  const tOutputCard1 = document.querySelector("#teamText1");
  const tOutputCard2 = document.querySelector("#teamText2");
  const tOutputCard3 = document.querySelector("#teamText3");
  const tOutputCard4 = document.querySelector("#teamText4");
  const tOutputCard5 = document.querySelector("#teamText5");
  const tOutputCard6 = document.querySelector("#teamText6");
  const tOutputCard7 = document.querySelector("#teamText7");
  const tOutputCard8 = document.querySelector("#teamText8");
  const tOutputCard9 = document.querySelector("#teamText9");
  
  const tImg1 = document.getElementById("teamImg1");
  const tImg2 = document.getElementById("teamImg2");
  const tImg3 = document.getElementById("teamImg3");
  const tImg4 = document.getElementById("teamImg4");
  const tImg5 = document.getElementById("teamImg5");
  const tImg6 = document.getElementById("teamImg6");
  const tImg7 = document.getElementById("teamImg7");
  const tImg8 = document.getElementById("teamImg8");
  const tImg9 = document.getElementById("teamImg9");
  
  
  async function gitJSONteam (tName, sport, outputB, img, teamName) {
  
      const url = getTeamUrl(teamName)
  
      const serverResponse = await fetch(url);
  
      const info = await serverResponse.json();
      console.log(info);
      tName.innerHTML = "Team: " + info.teams[0].strTeam;
      sport.innerHTML = "Sport: " + info.teams[0].strSport;
      img.src = info.teams[0].strTeamBadge;
      outputB.innerHTML = info.teams[0].strDescriptionEN;
  
    };
  
  gitJSONteam(nameT1, sportN1, tOutputCard1, tImg1 , "Barcelona");
  gitJSONteam(nameT2, sportN2, tOutputCard2, tImg2 , "Atlanta Dream");
  gitJSONteam(nameT3, sportN3, tOutputCard3, tImg3 , "Real Madrid");
  gitJSONteam(nameT4, sportN4, tOutputCard4, tImg4 , "Giants Netball");
  gitJSONteam(nameT5, sportN5, tOutputCard5, tImg5 , "Rajasthan Royals");
  gitJSONteam(nameT6, sportN6, tOutputCard6, tImg6 , "Kia Tigers");
  gitJSONteam(nameT7, sportN7, tOutputCard7, tImg7 , "Liverpool");
  gitJSONteam(nameT8, sportN8, tOutputCard8, tImg8 , "Boston Bruins");
  gitJSONteam(nameT9, sportN9, tOutputCard9, tImg9 , "tourcoing");
   
  
