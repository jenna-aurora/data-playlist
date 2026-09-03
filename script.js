console.log("Hello World");

let button = document.getElementById("song-button");
let artistDisplay1 = document.getElementById("artist-1");
let trackNameDisplay1 = document.getElementById("track-name-1")

async function loadSongs() {
  let response = await fetch("https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/viral-50-usa/records?limit=10");
  console.log("Status: " + response.status);
  let data = await response.json();
  let songs = data.records;
  let song =songs[0];

  /* console.log(songs); */
  document.getElementById("track-name").textContent = song["Track Name"];
  document.getElementById("track-facts").textContent = "#" + song.Position + " - " + song.Artist;
  console.log(songs[8]);
  console.log(songs[8].Artist);
  console.log(songs[8]["Track Name"]);
  artistDisplay1.textContent = songs[4].Artist;
  trackNameDisplay1.textContent - songs[4].Track-Name;
}

button.addEventListener("click", function () {
	loadSongs();
});