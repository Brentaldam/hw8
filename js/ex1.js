const artistList=[
  {
    "name": "The Starry Night",
    "year": "1889",
    "artist": "Vincent Van Gogh"
  },
  {
    "name": "The Scream",
    "year": "1893",
    "artist": "Edvard Munch"
  },
  {
    "name": "Guernica",
    "year": "1937",
    "artist": "Pablo Picasso"
  }
]

for (let i = 2; i >= 0; i--) {
// Find a <table> element with id="myTable":
var table = document.getElementById("paintings");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

// Add some text to the new cells:
cell1.innerHTML = artistList[i].name;
cell2.innerHTML = artistList[i].year; 
cell3.innerHTML = artistList[i].artist; 
}
  
