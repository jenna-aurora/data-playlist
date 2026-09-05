console.log("Hello World");



let button = document.getElementById("song-button");
let nextButton = document.getElementById("next-button");
let surpriseButton = document.getElementById("surprise-button");
let backButton = document.getElementById("back-button");
let topButton = document.getElementById("top-button");
let saveButton = document.getElementById("save-button");
let clearButton = document.getElementById("clear-button");
let replaceButton = document.getElementById("replace-button");

let index = 0;
let favorites = [];
let songs = [];
let reactions = [
	"Great choice!",
	"Nice pick!",
	"Added to your Top 5!",
	"Love that song!",
	"Excellent selection!"
	];

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
 
 function renderFavorites() {
	 let text = "";
	 
	 favorites.forEach(function (favorite) {
	   text = text + "• " + favorite + " ";
	 });
	 
	 document.getElementById("favorites-list").textContent = text;
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

/* index++;
  if(index > songs.length + 1) {
    index = 0
  }
  showSong();
}); 
(this does work)*/
/*  if(index < songs.length - 1) {
     index++;
  }

  showSong();
}); 
(shows nothing red in the console)*/

backButton.addEventListener("click", function() {
	index--;
	if (index < 0) {
	  index = songs.length - 1;
	}
		
	showSong();
});

/* index--;
	if (index > songs.length - 1) {
	  index = 0;
	}
		
	showSong();
}); 
(This does work)*/
/*    if (index > 0) {
     index--;
   }

   showSong();
}); 
(shows nothing red in the console)*/

topButton.addEventListener("click", function () {
	index = 0;
		
		showSong();
});

surpriseButton.addEventListener("click", function () {
	index = Math.floor(Math.random() * songs.length);
	
	showSong();
});

saveButton.addEventListener("click", function () {
	let song = songs[index];
	
  if (favorites.length < 5) {
	favorites.push(song["Track Name"] + " - " + song.Artist);
		renderFavorites();
		
	let reaction = reactions[Math.floor(Math.random() * reactions.length)];
	document.getElementById("save-message").textContent = reaction;
  } else {
	document.getElementById("save-message").textContent = "Your top 5 is full.";
  }
});

clearButton.addEventListener("click", function () {
  favorites = [];
  renderFavorites();
  document.getElementById("save-message").textContent = "";
});

replaceButton.addEventListener("click", function () {
	let song = songs[index];
	
  if (favorites.length === 5) {
	favorites[4] = song["Track Name"] + " - " + song.Artist;
  	renderFavorites();
	document.getElementById("save-message").textContent = "Replaced the fifth one.";
  } else {
	document.getElementById("save-message").textContent = "Fill your Top 5 first.";
	}
});