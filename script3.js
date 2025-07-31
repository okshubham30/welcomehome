// === Property Card Expand / Collapse ===
document.querySelectorAll('.property-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});

// === Search Elements ===
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const noResultMsg = document.getElementById('noResultMsg');

searchBtn.addEventListener('click', searchProperties);
searchInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') searchProperties();
});

// === Search Function (with small spelling mistakes allowed) ===
function searchProperties() {
  const input = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.property-card');
  let found = false;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (isMatch(text, input)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  noResultMsg.style.display = found ? 'none' : 'block';
}

// === Fuzzy Match (handles small spelling mistakes) ===
function isMatch(text, search) {
  if (!search) return true;
  return text.includes(search) || levenshtein(text, search) <= 2;
}

// === Levenshtein Distance Algorithm ===
function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] =
        b.charAt(i - 1) === a.charAt(j - 1)
          ? matrix[i - 1][j - 1]
          : Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1
            );
    }
  }
  return matrix[b.length][a.length];
}

// === Language Toggle (English <-> Hindi) ===
const langBtn = document.querySelector('.lang-btn');
let isHindi = false;

langBtn.addEventListener('click', () => {
  isHindi = !isHindi;
  toggleLanguage();
});

function toggleLanguage() {
  document.querySelector('header h1').textContent = isHindi
    ? '🏠 संपत्ति खरीदें'
    : '🏠 Purchase Properties';

  document.querySelector('h2').textContent = isHindi
    ? 'उपलब्ध संपत्तियां'
    : 'Available Properties';

  searchInput.placeholder = isHindi
    ? 'स्थान या प्रकार द्वारा खोजें...'
    : 'Search by location or type...';

  searchBtn.textContent = isHindi ? 'खोजें' : 'Search';

  noResultMsg.textContent = isHindi ? 'कोई परिणाम नहीं मिला' : 'No results found';
}

// === Footer Typing Animation ===
const footerText =
  "THIS WEBSITE IS READY FOR SALE. FOR PURCHASING, SEND US AN EMAIL/MESSAGE →";
const typingElement = document.getElementById('typingText');
let index = 0;

(function typeText() {
  if (index < footerText.length) {
    typingElement.textContent += footerText.charAt(index++);
    setTimeout(typeText, 50);
  }
})();
