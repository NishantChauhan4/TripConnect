let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
// let videoBtn = document.querySelectorALL('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}

menu.addEventListener('click', () =>{
    // menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// videoBtn.forEach(btn =>{
//     btn.addEventListener('click', ()=>{
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//         let src = btn.getAttribute('data-src');
        // document.querySelector('#video-slider').src = src;
//     });
// });

// Array of video sources for easy access
const videoSources = [
    './vid/video1.mp4',
    './vid/video2.mp4',
    './vid/video3.mp4',
    './vid/video4.mp4',
    './vid/video5.mp4'
];

// Select all elements
const videoBtns = document.querySelectorAll('.vid-btn');
const videoSlider = document.querySelector('#video-slider');
const videoRange = document.querySelector('#videoRange');

// Function to change the video source and update the slider
function changeVideoSource(index) {
    // Update the video source
    videoSlider.src = videoSources[index];
    videoSlider.load();

    // Update slider position to match the current video
    videoRange.value = index;

    // Update the active class on buttons
    document.querySelector('.vid-btn.active').classList.remove('active');
    videoBtns[index].classList.add('active');
}

// Add click event to each button to change the video and move the slider
videoBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        changeVideoSource(index);
        document.querySelector('#video-slider').src = src;
    });
});




