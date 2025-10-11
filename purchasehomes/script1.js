/* ====================================
   VARIABLES
==================================== */
let clickTimeout = null;

/* ====================================
   CARD CLICK & DOUBLE CLICK (ZOOM)
==================================== */
document.querySelectorAll('.property-card').forEach(card => {

  // ---- Single Click → Expand/Collapse ----
  card.addEventListener('click', e => {
    if (clickTimeout) return;

    clickTimeout = setTimeout(() => {
      card.classList.toggle('expanded');
      clickTimeout = null;
    }, 250); // small delay to differentiate from double click
  });

  // ---- Double Click → Fullscreen Zoom ----
  card.addEventListener('dblclick', e => {
    clearTimeout(clickTimeout);

    const img = card.querySelector('.slider-images img.active');
    if (img) {
      document.getElementById('zoomedImg').src = img.src;
      document.getElementById('fullscreenView').style.display = 'flex';
    }
  });

  /* ---- Image Slider ---- */
  const images = card.querySelectorAll('.slider-images img');
  let index = 0;

  // Left Arrow
  card.querySelector('.arrow.left').addEventListener('click', e => {
    e.stopPropagation();
    images[index].classList.remove('active');
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add('active');
  });

  // Right Arrow
  card.querySelector('.arrow.right').addEventListener('click', e => {
    e.stopPropagation();
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  });
});

/* ====================================
   CLOSE FULLSCREEN ZOOM
==================================== */
document.getElementById('closeZoom').addEventListener('click', () => {
  document.getElementById('fullscreenView').style.display = 'none';
});

/* ====================================
   SEARCH FUNCTION
==================================== */
document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.property-card');
  let found = false;

  cards.forEach(card => {
    const location = card.dataset.location.toLowerCase();
    const price = card.dataset.price;

    if (location.includes(query) || price.includes(query)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  document.getElementById('noResultMsg').style.display = found ? 'none' : 'block';
});
