
document.getElementById("mb1").onclick = function() {bytSida("index.html")};

document.getElementById("mb3").onclick = function() {bytSida("players.html")};

document.getElementById("mb4").onclick = function() {bytSida("teams.html")};

document.getElementById("mb2").onclick = function() {bytSida("tournaments.html")};

document.getElementById("mb5").onclick = function () {bytSida("Leagues.html")};

let UCL = "Uefa Europa League";




function chooseTour(choosenTour) {
  let tournaments  = choosenTour;

  if(choosenTour === "Uefa Europa League") {
    document.getElementById("champ").innerText = "Europa";
    parent.innerHTML = "";
    searchShow(UCL);
    UCL = "Uefa Champions League"
  }
  else if(tournaments === "Uefa Champions League") {
    document.getElementById("champ").innerText = "Champions";
    parent.innerHTML = "";
    searchShow(tournaments)
    UCL = "Uefa Europa League";

  } else {
    return UCL;
  
}
}
document.getElementById("champ").onclick = function () {chooseTour(UCL)};


function bytSida(html) {
    window.location.href = html;
}


function getTournamentUrl(tournament) {
  const url = new URL("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?");

  url.searchParams.append("l", tournament)

  return url;
}


function getEventUrl(tournament){
  const url = new URL(
    "https://www.thesportsdb.com/api/v1/json/1/searchfilename.php?"
  );

  url.searchParams.append("e", tournament);

  return url;


}


  function searchShow(tournament){

    const api_url = getTournamentUrl(tournament);
    
    fetch(api_url)
    .then((response) => response.json())
    .then((jsonData) => {
        results = jsonData.teams;
        displaydataResult(results);
    });

    const resultApi = getEventUrl(tournament);
   
  fetch(resultApi)
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      results1 = jsonData.event;
      console.log(results1);
      displayMatchresult(results1);
    });

}

let parent = document.getElementById("row");

function displaydataResult(results){
results.forEach((result) =>{
    let parent = document.getElementById("row");
    var child = document.createElement("a");
    var imeg = document.createElement("img");
    var child1 = document.createElement("div");
    var title = document.createElement("h2");
    var pa = document.createElement("p");
    var date = document.createElement("h3");
  
    
  imeg.className = "card-img-top";
  child1.className = "card-body";
  child.className = "col-4";
  pa.className ="card-text"
  imeg.alt = "Card image cap";

   child.href = "https://" + result.strWebsite;
    imeg.src = result.strTeamBadge;
    title.innerText = result.strTeam;
    pa.innerText = result.strLeague;
    date.innerText = result.intFormedYear;
    
 


  
    
    child.append(imeg);
    child1.append(title);
    child1.append(pa);
    child1.append(date);
    child.append(child1);
    parent.append(child);

    

});

}
let parent1 = document.getElementById("row1");

function displayMatchresult(results1) {
  parent1.innerHTML = "";
  results1.forEach((result) => {
   
    var child = document.createElement("div");
    var thumb = document.createElement("img");
    var child1 = document.createElement("div");
    var title = document.createElement("h2");
    var stadium = document.createElement("p");
    var date = document.createElement("h3");
    var matchresult = document.createElement("h4");


    thumb.className = "card-img-top";
    child1.className = "card-body";
    child.className = "col-4";
    stadium.className = "card-text";
    thumb.alt = "Card image cap";
    child.id = "cards";

    var imageSrc = result.strThumb;
    title.innerText = result.strEvent;
    stadium.innerText = result.strVenue;
    
   
 

    if (imageSrc == null) {

      thumb.src = "https://s3-eu-west-1.amazonaws.com/manxradionews/884464-1.jpg";
    }
    else{
      thumb.src = imageSrc;

    }
    let status = result.strStatus;
    if(status == "Match Finished"){


      matchresult.innerText = result.intHomeScore + "-" + result.intAwayScore;
      date.innerText = result.dateEvent;
      child1.append(matchresult);
      child1.append(thumb);
      child1.append(title);
      child1.append(stadium);
      child1.append(date);
      child.append(child1);
      parent1.append(child);

    }
    else if(status == "Not Started") {
      date.innerText = result.dateEvent;
      matchresult.innerText ="UPCOMING MATCH"
      child1.append(matchresult);
      child1.append(thumb);
      child1.append(title);
      child1.append(stadium);
      child1.append(date);
      child.append(child1);
      parent1.append(child);


    }
   

     
  });
}



window.onload = searchShow("Uefa Champions League");


 