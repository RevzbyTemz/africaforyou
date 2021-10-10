
const topnav = document.querySelector(".navbar");
const toggle = topnav.querySelector("#toggler");
const sideBar = document.querySelector(".sidebar");
const nav = document.querySelector("nav");
const search = nav.querySelector("#search");
const searchBtn = nav.querySelector("#searchBtn");
const liker = document.querySelector("#likeBtn");

// toggler
toggle.addEventListener("click", () => {
  sideBar.classList.toggle("show");
});

liker.addEventListener('click', () =>{
   liker.classList.toggle("liked");
})
// search functionality
let searchLink = "";

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
    <div class="video" onclick="location.href = '${id}'">
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



// listen on the event
video.addEventListener("timeupdate", function(){
    // check whether we have passed 5 minutes,
    // current time is given in seconds
    if(this.currentTime >= 5 * 60) {
        // pause the playback
        this.pause();
    }
});