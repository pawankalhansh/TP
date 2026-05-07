const playerBaseUrl = "https://dev.denver69.fun/TP/";

const channels = [
  {
    id: "840",
    name: "Shirdi Sai Baba",
    language: "Hindi",
    category: "Spiritual",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56386-kfc14w60-v4/imageContent-56386-kfc14w60-m4.png",
  },
  {
    id: "842",
    name: "Somnath Temple",
    language: "Hindi",
    category: "Spiritual",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56389-kfdgngts-v3/imageContent-56389-kfdgngts-m3.png",
  },
  {
    id: "121",
    name: "Tata Play Fitness",
    language: "English",
    category: "Lifestyle",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-405-j5jr3sz4-v2/imageContent-405-j5jr3sz4-m2.png",
  },
  {
    id: "618",
    name: "Tata Play Beauty",
    language: "English",
    category: "Lifestyle",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12282-ja02jlp4-v2/imageContent-12282-ja02jlp4-m2.png",
  },
  {
    id: "641",
    name: "Tata Play Cooking",
    language: "Hindi",
    category: "Lifestyle",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23495-jf92iycg-v3/imageContent-23495-jf92iycg-m4.png",
  },
  {
    id: "959",
    name: "Tata Play Romance",
    language: "Hindi",
    category: "Movies",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67692-kwmxxw08-v2/imageContent-67692-kwmxxw08-m3.png",
  },
  {
    id: "8",
    name: "STAR Plus HD",
    language: "Hindi",
    category: "Drama",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25307-jhrhflww-v1/imageContent-25307-jhrhflww-m1.png",
  },
  {
    id: "244",
    name: "Star Bharat HD",
    language: "Hindi",
    category: "Drama",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-6895-j6vqhqnc-v2/imageContent-6895-j6vqhqnc-m2.png",
  },
  {
    id: "15",
    name: "SET HD",
    language: "Hindi",
    category: "Entertainment",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43-j5fca4k0-v3/imageContent-43-j5fca4k0-m4.png",
  },
  {
    id: "556",
    name: "SET",
    language: "Hindi",
    category: "Entertainment",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12074-j9oat6qw-v6/imageContent-12074-j9oat6qw-m6.png",
  },
  {
    id: "48",
    name: "SONY SAB HD",
    language: "Hindi",
    category: "Entertainment",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-141-j5fpeji0-v3/imageContent-141-j5fpeji0-m3.png",
  },
  {
    id: "52",
    name: "Colors HD",
    language: "Hindi",
    category: "Drama",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-155-j5frd2uo-v1/imageContent-155-j5frd2uo-m1.png",
  },
  {
    id: "503",
    name: "Zee Cinema HD",
    language: "Hindi",
    category: "Movies",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11915-j9l5clzs-v1/imageContent-11915-j9l5clzs-m1.png",
  },
  {
    id: "80",
    name: "SONY MAX HD",
    language: "Hindi",
    category: "Movies",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-243-j5fyl2f4-v3/imageContent-243-j5fyl2f4-m4.png",
  },
  {
    id: "664",
    name: "Star Sports 3",
    language: "Hindi",
    category: "Sports",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31405-jm2isen4-v1/imageContent-31405-jm2isen4-m1.png",
  },
  {
    id: "1392",
    name: "Sadvidya",
    language: "Gujarati",
    category: "Spiritual",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SADV_Thumbnail-v1/SADV_Thumbnail.png",
  },
  {
    id: "1393",
    name: "In24 Live News",
    language: "Hindi",
    category: "News",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/IN24LVNEWS_Thumbnail-v1/IN24LVNEWS_Thumbnail.png",
  },
  {
    id: "1246",
    name: "Vande Bharat News",
    language: "Hindi",
    category: "News",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/VANDEBHNEWS_Thumbnail-v1/VANDEBHNEWS_Thumbnail.png",
  },
  {
    id: "1413",
    name: "HIFF Movies",
    language: "Hindi",
    category: "Movies",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/HIFFM_Thumbnail-v1/HIFFM_Thumbnail.png",
  },
  {
    id: "1446",
    name: "Sanmarg TV",
    language: "Hindi",
    category: "Spiritual",
    logoUrl: "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SanmargTV_Thumbnail-v1/SanmargTV_Thumbnail.png",
  },
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
  return `<img class="channel-logo-img" src="${channel.logoUrl}" alt="${channel.name}" loading="lazy" />`;
}

function channelUrl(channel) {
  return `${playerBaseUrl}${encodeURIComponent(channel.id)}`;
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
    .map((channel, index) => {
      const isFavorite = favorites.includes(channel.name);
      return `
        <article class="channel-card" data-index="${index}">
          <span class="live">LIVE</span>
          <button class="favorite ${isFavorite ? "active" : ""}" type="button" aria-label="Toggle ${channel.name} favorite" data-name="${channel.name}">
            ${heartIcon()}
          </button>
          <div class="logo-wrap">${logoMarkup(channel)}</div>
          <span class="play-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7Z" /></svg>
          </span>
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
  if (!button) {
    const card = event.target.closest(".channel-card");
    if (!card) return;
    const index = Number(card.dataset.index);
    const channel = filteredChannels()[index];
    if (channel) {
      window.open(channelUrl(channel), "_blank", "noopener,noreferrer");
    }
    return;
  }

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
