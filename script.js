console.log("Hello World");


/*let button = document.getElementById("song-button");


async function loadSongs() {
  let response = await fetch("/api/v1/datasets/practice-chart/records?limit=3");
  let data = await response.json();
  let songs = data.records;
  let song = songs[0];

  console.log(songs);

  document.getElementById("track-name").textContent = song["Track Name"];
  document.getElementbyId("track-facts").textContent = "#" + song.Position + "-"
 + song.Artist;
}

 button.addEventListener("click", function () {
  loadSongs();
});*/

let index = 0;

async function loadSongs() {
  let response = await fetch("https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/viral-50-usa/records?limit=10");
  console.log("Status: " + response.status);
  let data = await response.json();
  let songs = data.records;

  console.log(songs);
  
  let song = songs[index];
  
  document.getElementById("track-name").textContent = song["Track Name"];
  document.getElementById("track-facts").textContent = "#" + song.Position + " - " + song.Artist;
  
 
  index++;
  if (index >= songs.length) {
	  index = 0;
  }
}

let button = document.getElementById("song-button");
	
button.addEventListener("click", function () {
	loadSongs();
});