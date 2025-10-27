// ===== Search Filter =====
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', () => {
  const input = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('.option-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? 'flex' : 'none';
  });
});

// ===== Horizontal Text Slider Swipe (Desktop + Mobile) =====
const sliderContainer = document.querySelector(".text-slider");
let isDragging = false;
let startX;
let scrollLeft;
let moved = false; // 👈 drag vs click detection

// ==== Desktop Drag ====
sliderContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  moved = false;
  sliderContainer.classList.add("dragging");
  startX = e.pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
});

sliderContainer.addEventListener("mouseleave", () => {
  isDragging = false;
  sliderContainer.classList.remove("dragging");
});

sliderContainer.addEventListener("mouseup", (e) => {
  sliderContainer.classList.remove("dragging");
  if (!moved) {
    const target = e.target.closest(".text-card");
    if (target) handleCardClick(target);
  }
  isDragging = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  moved = true;
  const x = e.pageX - sliderContainer.offsetLeft;
  const walk = (x - startX) * 1.5;
  sliderContainer.scrollLeft = scrollLeft - walk;
});

// ==== Mobile Touch Swipe ====
let touchStartX = 0;
sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  moved = false;
});

sliderContainer.addEventListener("touchmove", (e) => {
  const touchEndX = e.touches[0].clientX;
  const moveX = touchStartX - touchEndX;
  if (Math.abs(moveX) > 5) moved = true;
  sliderContainer.scrollLeft += moveX * 1.2;
  touchStartX = touchEndX;
});

sliderContainer.addEventListener("touchend", (e) => {
  if (!moved) {
    const target = e.target.closest(".text-card");
    if (target) handleCardClick(target);
  }
});

// ===== Handle Text Card Click =====
function handleCardClick(card) {
  // Active highlight
  document.querySelectorAll(".text-card").forEach(c => c.classList.remove("active"));
  card.classList.add("active");

  // Filter Option Cards below
  const filterType = card.getAttribute("data-filter");
  const optionCards = document.querySelectorAll(".option-card");
  optionCards.forEach(opt => {
    opt.style.display = opt.dataset.type === filterType ? "flex" : "none";
  });
}
