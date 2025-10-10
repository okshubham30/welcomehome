// Typing text
const text = "CONTACT FOR ADDING YOUR HOUSE, HOMES, SHOPS, COACHINGS AND HOSTELS";
const typingElement = document.getElementById("typingText");
let index = 0;

function typeText() {
  if(index < text.length){
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 50);
  } else {
    setTimeout(() => { typingElement.textContent = ""; index=0; typeText(); }, 1000);
  }
}
typeText();

// Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides(){
  slides.forEach(s => s.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 4000);
}
showSlides();

// Search option cards
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', () => {
  const input = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('.option-card');
  cards.forEach(card => {
    const text = card.querySelector('span').textContent.toLowerCase();
    card.style.display = text.includes(input) ? 'flex' : 'none';
  });
});
