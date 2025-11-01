// // Search functionality
// const searchInput = document.getElementById("searchInput");
// const searchButton = document.getElementById("searchButton");
// const coachingCards = document.querySelectorAll(".coaching-card");
// const gallery = document.querySelector(".gallery");

// let noResultMsg = document.createElement("p");
// noResultMsg.textContent = "🔍 कोई परिणाम नहीं मिला";
// noResultMsg.classList.add("no-results");

// function searchCoaching() {
//     const query = searchInput.value.toLowerCase();
//     let found = false;

//     coachingCards.forEach(card => {
//         const text = card.innerText.toLowerCase();
//         if (text.includes(query)) {
//             card.style.display = "block";
//             found = true;
//         } else {
//             card.style.display = "none";
//         }
//     });

//     // Remove previous message
//     const existingMsg = document.querySelector(".no-results");
//     if (existingMsg) existingMsg.remove();

//     if (!found && query.trim() !== "") {
//         gallery.appendChild(noResultMsg);
//     }
// }

// // Button click
// searchButton.addEventListener("click", searchCoaching);
// // Enter key
// searchInput.addEventListener("keypress", function(e){
//     if(e.key === "Enter") searchCoaching();
// });
