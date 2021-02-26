export { getPlayersBySearch, getPlayerUrl, getPlayersBySport };


  function getPlayerUrl(player) {
    const url = new URL("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?");
  
    url.searchParams.append("p", player)
  
    return url;
  }

  function getPlayersBySport(output, img, player) {

    fetch(getPlayerUrl(player))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network Response ERROR Try Again!");
        }
      })
      .then((info) => {
        
        if(info.player[0].strSport === "Soccer"){
        let team = info.player[0].strTeam;
        alert("Playing for: " + team);
        
        output.innerHTML = info.player[0].strDescriptionEN;
        img.src = info.player[0].strRender;
        
        } else {
          alert("Only more information about football players");
          /*
          let sport = info.player[0].strSport;
          alert(sport + " is my sport");

          output.innerHTML = info.player[0].strDescriptionEN;
          img.src = info.player[0].strRender;
          */
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  function getPlayersBySearch(output, img, player) {

    fetch(getPlayerUrl(player))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network Response ERROR Try Again!");
        }
      })
      .then((info) => {
        
        output.innerHTML = info.player[0].strDescriptionEN;
        img.src = info.player[0].strRender;
  
      })
      .catch((err) => {
        alert(err);
      });
  }