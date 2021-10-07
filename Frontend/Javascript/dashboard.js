// const contant-container = document.querySelector(".video-container");

// let api_key = "your api key";
// let video_http = "https://www.googleapis.com/youtube/v3/videos?";
// let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

// fetch(
//   video_http +
//     new URLSearchParams({
//       key: api_key,
//       part: "snippet",
//       chart: "mostPopular",
//       maxResults: 50,
//       regionCode: "IN",
//     })
// )
//   .then((res) => res.json())
//   .then((data) => {
//     data.items.forEach((item) => {
//       getChannelIcon(item);
//     });
//   })
//   .catch((err) => console.log(err));

// const getChannelIcon = (video_data) => {
//   fetch(
//     channel_http +
//       new URLSearchParams({
//         key: api_key,
//         part: "snippet",
//         id: video_data.snippet.channelId,
//       })
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       video_data.channelThumbnail =
//         data.items[0].snippet.thumbnails.default.url;
//       makeVideoCard(video_data);
//     });
// };

// const makeVideoCard = (data) => {
//   contant-container.innerHTML += `
//     <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
//         <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
//         <div class="content">
//             <img src="${data.channelThumbnail}" class="channel-icon" alt="">
//             <div class="info">
//                 <h4 class="title">${data.snippet.title}</h4>
//                 <p class="channel-name">${data.snippet.channelTitle}</p>
//             </div>
//         </div>
//     </div>
//     `;
// };

// // search bar

// const searchInput = document.querySelector(".search-bar");
// const searchBtn = document.querySelector(".search-btn");
// let searchLink = "https://www.youtube.com/results?search_query=";

// searchBtn.addEventListener("click", () => {
//   if (searchInput.value.length) {
//     location.href = searchLink + searchInput.value;
//   }
// });






const topnav = document.querySelector(".navbar")
const toggle = topnav.querySelector('#toggler')
const sideBar = document.querySelector('.sidebar')
const nav = document.querySelector("nav");
const search = nav.querySelector('#search')
const searchBtn = nav.querySelector('#searchBtn')

// toggler
toggle.addEventListener('click', () =>{
    sideBar.classList.toggle("show")
})

// search functionality
searchBtn.addEventListener('click', () =>{
   if (search.value) {
      console.log("submit"); 
      search.value = ''
   }
}
)
//upload functionality
const upload = document.querySelector('#upload')

//Pages component

const home = document.querySelector('#home-page')
const explore = document.querySelector('#explore-page')
const like = document.querySelector('#liked')
const yours = document.querySelector('#yours')
