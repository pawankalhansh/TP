const channels = [
  { name: "Shirdi Sai Baba", language: "Hindi", category: "Spiritual", logo: "Darshan", type: "tata" },
  { name: "Somnath Temple", language: "Hindi", category: "Spiritual", logo: "Darshan", type: "tata" },
  { name: "Tata Play Fitness", language: "English", category: "Lifestyle", logo: "Fitness", type: "tata" },
  { name: "Tata Play Beauty", language: "English", category: "Lifestyle", logo: "Beauty", type: "tata" },
  { name: "Tata Play Cooking", language: "Hindi", category: "Lifestyle", logo: "Cooking", type: "tata" },
  { name: "Tata Play Romance", language: "Hindi", category: "Movies", logo: "Romance", type: "tata" },
  { name: "STAR Plus HD", language: "Hindi", category: "Drama", logo: "StarPlus HD", type: "star" },
  { name: "Star Bharat HD", language: "Hindi", category: "Drama", logo: "Star Bharat HD", type: "star" },
  { name: "SET HD", language: "Hindi", category: "Entertainment", logo: "SONY HD", type: "sony" },
  { name: "SET", language: "Hindi", category: "Entertainment", logo: "SONY", type: "sony" },
  { name: "Sony SAB HD", language: "Hindi", category: "Entertainment", logo: "SAB HD", type: "sony" },
  { name: "Colors HD", language: "Hindi", category: "Drama", logo: "Colors HD", type: "news" },
  { name: "Zee Cinema HD", language: "Hindi", category: "Movies", logo: "ZEE", type: "news" },
  { name: "Star Gold HD", language: "Hindi", category: "Movies", logo: "Star Gold", type: "star" },
  { name: "Tata Play South Talkies", language: "Hindi", category: "Action", logo: "South", type: "tata" },
  { name: "Sony Max HD", language: "Hindi", category: "Movies", logo: "MAX HD", type: "sony" },
  { name: "Discovery HD", language: "English", category: "Knowledge", logo: "Discovery", type: "news" },
  { name: "National Geographic", language: "English", category: "Knowledge", logo: "NAT GEO", type: "news" },
  { name: "Star Sports 1 HD", language: "Hindi", category: "Sports", logo: "Sports 1", type: "sports" },
  { name: "Sony Sports TEN 1", language: "English", category: "Sports", logo: "TEN 1", type: "sports" },
  { name: "ABP News", language: "Hindi", category: "News", logo: "ABP", type: "news" },
  { name: "Aaj Tak HD", language: "Hindi", category: "News", logo: "Aaj Tak", type: "news" },
  { name: "India Today", language: "English", category: "English News", logo: "India Today", type: "news" },
  { name: "CNN News18", language: "English", category: "English News", logo: "CNN", type: "news" },
  { name: "Zee Marathi HD", language: "Marathi", category: "Marathi", logo: "Marathi", type: "news" },
];

const grid = document.querySelector("#channelGrid");
const emptyState = document.querySelector("#emptyState");
const searchPanel = document.querySelector(".search-panel");
const searchInput = document.querySelector("#searchInput");
const chips = [...document.querySelectorAll(".chip")];
const navItems = [...document.querySelectorAll(".nav-item")];
const themeToggle = document.querySelector(".theme-toggle");

let selectedCategory = "All";
let activeView = "home";
let favorites = JSON.parse(localStorage.getItem("tp-binge-favorites") || "[]");

function saveFavorites() {
  localStorage.setItem("tp-binge-favorites", JSON.stringify(favorites));
}

function logoMarkup(channel) {
  if (channel.type === "tata") {
    return `<div class="logo"><span><span class="mark">TATA<br />PLAY</span>${channel.logo}</span></div>`;
  }

  return `<div class="logo ${channel.type}">${channel.logo}</div>`;
}

function heartIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 5.9a5.1 5.1 0 0 0-7.2 0L12 7.5l-1.6-1.6a5.1 5.1 0 0 0-7.2 7.2L12 22l8.8-8.9a5.1 5.1 0 0 0 0-7.2Z" /></svg>`;
}

function filteredChannels() {
  const searchText = searchInput.value.trim().toLowerCase();
  return channels.filter((channel) => {
    const categoryMatch = selectedCategory === "All" || channel.category === selectedCategory || channel.language === selectedCategory;
    const searchMatch = [channel.name, channel.language, channel.category].join(" ").toLowerCase().includes(searchText);
    const favoriteMatch = activeView !== "favorites" || favorites.includes(channel.name);
    return categoryMatch && searchMatch && favoriteMatch;
  });
}

function renderChannels() {
  const visibleChannels = filteredChannels();
  grid.innerHTML = visibleChannels
    .map((channel) => {
      const isFavorite = favorites.includes(channel.name);
      return `
        <article class="channel-card">
          <span class="live">LIVE</span>
          <button class="favorite ${isFavorite ? "active" : ""}" type="button" aria-label="Toggle ${channel.name} favorite" data-name="${channel.name}">
            ${heartIcon()}
          </button>
          <div class="logo-wrap">${logoMarkup(channel)}</div>
          <div class="card-info">
            <h2>${channel.name}</h2>
            <p>${channel.language}</p>
          </div>
        </article>
      `;
    })
    .join("");
  emptyState.classList.toggle("visible", visibleChannels.length === 0);
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    selectedCategory = chip.dataset.filter;
    chips.forEach((item) => item.classList.toggle("active", item === chip));
    renderChannels();
  });
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    activeView = item.dataset.view;
    navItems.forEach((navItem) => navItem.classList.toggle("active", navItem === item));
    searchPanel.classList.toggle("visible", activeView === "search");
    if (activeView === "search") {
      searchInput.focus();
    }
    renderChannels();
  });
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".favorite");
  if (!button) return;

  const channelName = button.dataset.name;
  favorites = favorites.includes(channelName)
    ? favorites.filter((name) => name !== channelName)
    : [...favorites, channelName];
  saveFavorites();
  renderChannels();
});

searchInput.addEventListener("input", renderChannels);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("tp-binge-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("tp-binge-theme") === "dark") {
  document.body.classList.add("dark");
}

renderChannels();
