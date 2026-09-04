console.log("Hello World");
	
async function loadCats() {
  let response = await fetch("https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/viral-50-usa/records?limit=10");
  console.log("Status: " + response.status);
  let cats = await response.json();
  let breed = cats.records;

  console.log(cats);
  
  let cat = cats[0];

document.getElementById("cat-name").textContent = cat.Name;
document.getElementById("cat-facts").textContent = "From " + cat.Origin + ". " = cat.Temperament + ".";

  let photo=document.getElementById("cat-photo");
  photo.src = cat.Image;
  photo.alt = cat.Name = " cat";
  
	
button.addEventListener("click", function () {
	loadCats();
});