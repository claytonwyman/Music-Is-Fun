import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs(results) {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)
  var songList = document.getElementById('song-list')
  songList.innerHTML = ''
  for (let i = 0; i <= itunesService.Songs.length - 1; i++) {
    songList.innerHTML += `
    <hr />
    <div class="row">
      <div class="col-4 text-center">
          <p>Title: ${itunesService.Songs[i].title}</p>
          <p>Artist: ${itunesService.Songs[i].artist}</p>
          <p>Collection: ${itunesService.Songs[i].collection}</p>
          <img src="${itunesService.Songs[i].albumArt}" height="100px" />
          <audio controls>
            <source src="${itunesService.Songs[i].preview}" type="audio/mpeg">
          </audio>
      </div>
      <div class="col-4"></div>
      <div class="col-4 text-right">
        <p>Price: $ ${itunesService.Songs[i].price}</p>
      </div>
    </div>
    `
  }
}


//PUBLIC
class ItunesController {
  constructor() {
    console.log("iTunes controller works")
    itunesService.addSubscriber("songs", drawSongs)
    drawSongs()
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController