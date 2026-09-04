console.log("Hello World");



let button = document.getElementById("song-button");
let nextButton = document.getElementById("next-button");
let surpriseButton = document.getElementById("surprise-button");
let backButton = document.getElementById("back-button");
let topButton = document.getElementById("top-button");
let index = 0;
let songs = [];


async function loadSongs() {
  let response = await fetch("https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/viral-50-usa/records?limit=50");
  console.log("Status: " + response.status);
  let data = await response.json();
  songs = data.records;
  console.log("Records: " + songs.length);
  
  showSong();
}
  
  
 function showSong() {  
  let song = songs[index];
  
  document.getElementById("track-name").textContent = song["Track Name"];
  document.getElementById("track-facts").textContent = "#" + song.Position + " - " + song.Artist;
  document.getElementById("track-count").textContent = (index + 1) + " of " + songs.length;
  document.getElementById("track-chart").textContent;
  document.getElementById("track-surprise").textContent;
 }
 

	
button.addEventListener("click", function () {
	
	loadSongs();
});

nextButton.addEventListener("click", function() {
	index++;
	if (index >= songs.length) {
		index = 0;
	}
	
	showSong();
});

backButton.addEventListener("click", function() {
	if (index > 0) {
		index = index - 1;
		
		showSong();
		
  }
});

topButton.addEventListener("click", function () {
		index = 0;
		
		showSong();
});

surpriseButton.addEventListener("click", function () {
	index = Math.floor(Math.random() * songs.length);
	
	showSong();
});
