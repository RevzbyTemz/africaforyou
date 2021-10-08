
const topnav = document.querySelector(".navbar");
const toggle = topnav.querySelector("#toggler");
const sideBar = document.querySelector(".sidebar");
const nav = document.querySelector("nav");
const search = nav.querySelector("#search");
const searchBtn = nav.querySelector("#searchBtn");

// toggler
toggle.addEventListener("click", () => {
  sideBar.classList.toggle("show");
});

// search functionality
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener("click", () => {
  query = search.value;

  if (query && query !== "") {
    location.href = searchLink + query;
    console.log(query);
    search.value = "";
  } else {
    window.location.reload();
  }
});

//fetch video

const getVideo = async () => {
  const res = await fetch();
  const data = await res.json();
  makeContentCard(data.results);
};

//make video

const home = document.querySelector("#home-page");
const explore = document.querySelector("#explore-page");
const like = document.querySelector("#liked");
const yours = document.querySelector("#yours");

const makeContentCard = (videos) => {
  home.innerHTML = "";
  videos.forEach((video) => {
    const { title, description, id, poster } = video;
  });
  home.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${id}'">
              <img src="${poster}" class="thumbnail" alt="${title}" />
              <div class="content">
                <div class="info">
                  <h4 class="title">${title}</h4>
                  <p class="channel-name">
                   ${description}
                  </p>
                </div>
              </div>
            </div>
    `;
};

//upload functionality
const upload = document.querySelector("#upload");
