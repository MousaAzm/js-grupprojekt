export { gitJSONplayer, getPlayerUrl };

async function gitJSONplayer (output, img, player) {

    const url = getPlayerUrl(player)
  
    const serverResponse = await fetch(url);
  
    const info = await serverResponse.json();
    
    output.innerHTML = info.player[0].strDescriptionEN;
  
    img.src = info.player[0].strRender;
  
  };

  function getPlayerUrl(player) {
    const url = new URL("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?");
  
    url.searchParams.append("p", player)
  
    return url;
  }