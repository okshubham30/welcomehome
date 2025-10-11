// Get input and cards
const searchInput = document.getElementById("searchInput");
const spotCards = document.querySelectorAll(".spot-card");
const searchButton = document.getElementById("searchButton");

// Function to search tourist spots
function searchSpots() {
  const query = searchInput.value.toLowerCase();
  let found = false;

  spotCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if(text.includes(query)){
      card.style.display="block";
      found=true;
    } else {
      card.style.display="none";
    }
  });

  if(!found && query.trim()!==""){
    alert("No results found!");
  }
}

// Button click event
searchButton.addEventListener("click", searchSpots);

// Enter key event
searchInput.addEventListener("keypress", function(e){
  if(e.key==="Enter") searchSpots();
});
