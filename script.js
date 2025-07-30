// ✅ Corrected JS to show "No results found" **within the gallery**, not below the footer

const searchInput = document.getElementById("searchInput");
const houseCards = document.querySelectorAll(".house-card");
const gallery = document.querySelector(".gallery");

// Create a "no result" message element once and reuse
let noResultMsg = document.createElement("p");
noResultMsg.textContent = "🔍 कोई परिणाम नहीं मिला";
noResultMsg.classList.add("no-results");
noResultMsg.style.color = "#ff4d4d";
noResultMsg.style.fontSize = "1.2rem";
noResultMsg.style.marginTop = "20px";
noResultMsg.style.textAlign = "center";

function searchHouses() {
  const query = searchInput.value.toLowerCase();
  let found = false;

  houseCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  // Remove any previous result message
  const existingMsg = document.querySelector(".no-results");
  if (existingMsg) existingMsg.remove();

  if (!found && query.trim() !== "") {
    gallery.appendChild(noResultMsg);
  }
}

// Event: Button Click
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchHouses);

// Event: Pressing Enter
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchHouses();
  }
});

//typing effect
window.addEventListener("DOMContentLoaded", function() {
    const text = "Search Homes in Your Preferred Location";
    const typingElement = document.getElementById("typingText1");
    let index = 0;
    let deleting = false;

    function typeEffect() {
        if (!deleting && index <= text.length) {
            typingElement.textContent = text.substring(0, index);
            index++;
            setTimeout(typeEffect, 100);
        } else if (deleting && index >= 0) {
            typingElement.textContent = text.substring(0, index);
            index--;
            setTimeout(typeEffect, 50);
        }

        if (index > text.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
        } else if (deleting && index === 0) {
            deleting = false;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();
});
