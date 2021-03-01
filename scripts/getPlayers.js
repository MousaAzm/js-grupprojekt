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
        
          let dateborn = info.player[0].dateBorn; 
          let res = dateborn.split("-");
          let date = res[0];
          let age = 2021 - date;
          output.innerHTML = "Name: " + info.player[0].strPlayer + "<br>" + "Age: " + age + " (" +  info.player[0].dateBorn + ")" + "<br>" + "Team: "+ info.player[0].strTeam + "<br>" + "Nationality: " + info.player[0].strNationality
          + "<br>" + "Position: " + info.player[0].strPosition + "<br>" + "Height: " + info.player[0].strHeight
          + "<br>" + "Weight: " + info.player[0].strWeight + "<br>" + "<br>" + info.player[0].strDescriptionEN;
          img.src = info.player[0].strRender;
        
        } else {
          alert("Only more information about football players");
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
        
        let dateborn = info.player[0].dateBorn; 
        let res = dateborn.split("-");
        let date = res[0];
        let age = 2021 - date;
        output.innerHTML = "Name: " + info.player[0].strPlayer + "<br>" + "Age: " + age + " (" +  info.player[0].dateBorn + ")" + "<br>" + "Team: "+ info.player[0].strTeam + "<br>" + "Nationality: " + info.player[0].strNationality
        + "<br>" + "Position: " + info.player[0].strPosition + "<br>" + "Height: " + info.player[0].strHeight
        + "<br>" + "Weight: " + info.player[0].strWeight + "<br>" + "<br>" + info.player[0].strDescriptionEN;
        img.src = info.player[0].strRender;
  
      })
      .catch((err) => {
        alert(err);
      });
  }