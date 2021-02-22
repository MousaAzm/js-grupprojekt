document.getElementById("mb1").onclick = function() {bytSida("index.html")};

document.getElementById("mb3").onclick = function() {bytSida("players.html")};

document.getElementById("mb4").onclick = function() {bytSida("teams.html")};

document.getElementById("mb2").onclick = function() {bytSida("news.html")};





function bytSida(html) {
    window.location.href = html;
}


  function searchShow(query){

    const api_key = "107b73e163c93f5f70ed0830a93940a0";
    const api_url = "http://api.mediastack.com/v1/news?access_key=" + api_key + "&keywords=" + query;

    fetch(api_url)
    .then((response) => response.json())
    .then((jsonData) => {
        console.log(jsonData);
        results = jsonData.data;
        console.log(results);
    });


displaydataResult(results);

}

function displaydataResult(results){
results.forEach((result) =>{
    let parent = document.getElementById("card");
    var child = document.createElement("div");
    var imeg = document.createElement("img");
    var title = document.createElement("h2");
    var pa = document.createElement("p");
    var date = document.createElement("h3");
    //var searchbtn = document.createElement("button");
    

    


    imeg.src = result.image;
    title.innerText = result.title;
    pa.innerText = result.description;
    date.innerText = result.published_at;
    
   // searchbtn.onclick= openUrl(result.url);

if(result.image == null){
    console.log("No Pic");
}
  
else{
    //child.append(searchbtn);
    child.append(imeg);
    child.append(title);
    child.append(pa);
    child.append(date);
    parent.append(child);
}
    

});

}


window.onload = () => {
    const SearchTermElement = document.getElementById("searchBar");
    SearchTermElement.onkeyup = (event) => {
      searchShow(SearchTermElement.value);
    };
  };

 