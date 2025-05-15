// main.js

async function fetchCatImages() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  const data = await response.json();
  return data.map(cat => cat.url);
}

function displayCatImages(urls) {
  const container = document.getElementById('cat-images');
  container.innerHTML = '';
  urls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'A cute cat';
    img.style.width = '200px';
    img.style.margin = '10px';
    container.appendChild(img);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const urls = await fetchCatImages();
  displayCatImages(urls);
});