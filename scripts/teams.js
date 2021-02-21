document.getElementById("mb1").onclick = function() {bytSida("index.html")};

document.getElementById("mb2").onclick = function() {bytSida("teams.html")};

function bytSida(html) {
    window.location.href = html;
}

function getTeamUrl(teamName) {
    const url = new URL("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?");
  
    url.searchParams.append("t", teamName);
  
    return url;
  }

  function getPlayerUrl(player) {
    const url = new URL("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?");
  
    url.searchParams.append("p", player)
  
    return url;
  }

let outputCard1 = document.querySelector("#test");

let outputCard2 = document.querySelector("#test2");

let outputCard3 = document.querySelector("#test3");

let outputCard4 = document.querySelector("#test4");

let img1 = document.getElementById("img1");

let img2 = document.getElementById("img2");

let img3 = document.getElementById("img3");

let img4 = document.getElementById("img4");



async function gitJSONteam (output, img, teamName) {

    const url = getTeamUrl(teamName)

    const serverResponse = await fetch(url);

    const info = await serverResponse.json();

    output.innerHTML = info.teams[0].strDescriptionEN;

    img.src = info.teams[0].strTeamBadge;

  };

  async function gitJSONplayer (output, img, player) {

    const url = getPlayerUrl(player)

    const serverResponse = await fetch(url);

    const info = await serverResponse.json();

    output.innerHTML = info.player[0].strDescriptionEN;

    img.src = info.player[0].strRender;

  };

  gitJSONplayer(outputCard1, img1, "dybala");

  gitJSONplayer(outputCard2, img2, "pjanic");

  gitJSONteam(outputCard3, img3, "Örgryte");

  gitJSONteam(outputCard4, img4, "Livorno");
