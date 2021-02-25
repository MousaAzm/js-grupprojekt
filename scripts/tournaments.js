
document.getElementById("mb1").onclick = function() {bytSida("index.html")};

document.getElementById("mb3").onclick = function() {bytSida("players.html")};

document.getElementById("mb4").onclick = function() {bytSida("teams.html")};

document.getElementById("mb2").onclick = function() {bytSida("tournaments.html")};





function bytSida(html) {
    window.location.href = html;
}


  function searchShow(){

  
    const api_url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Uefa%20Champions%20League";

    fetch(api_url)
    .then((response) => response.json())
    .then((jsonData) => {
        console.log(jsonData);
        results = jsonData.teams;
        console.log(results);
        displaydataResult(results);
    });




}

function displaydataResult(results){
results.forEach((result) =>{
    let parent = document.getElementById("row");
    var child = document.createElement("div");
    var imeg = document.createElement("img");
    var child1 = document.createElement("div");
    var title = document.createElement("h2");
    var pa = document.createElement("p");
    var date = document.createElement("h3");
    //var searchbtn = document.createElement("button");
    
  imeg.className = "card-img-top";
  child1.className = "card-body";
  child.className = "col-4";
  pa.className ="card-text"
  imeg.alt = "Card image cap";


    imeg.src = result.strTeamBadge;
    title.innerText = result.strTeam;
    pa.innerText = result.strLeague;
    date.innerText = result.intFormedYear;
    
   // searchbtn.onclick= openUrl(result.url);


    //child.append(searchbtn);
    
    child.append(imeg);
    child1.append(title);
    child1.append(pa);
    child1.append(date);
    child.append(child1);
    parent.append(child);

    

});

}


window.onload = searchShow();
    
  

 