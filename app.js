const btn = document.querySelector("button");
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector("video")
const xmark = document.querySelector(".fa-xmark");

btn.addEventListener("click",()=>{
    videoContainer.classList.add("display")
})
xmark.addEventListener("click",()=>{
    videoContainer.classList.remove("display");
    video.pause();
    video.currentTime = 0;
})