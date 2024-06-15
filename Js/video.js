'use strict';
console.log('video log is running...');
let button = document.querySelector('#but1');
let video = document.querySelector('.video_box');
let overlay = document.querySelector('.overlay ');

button.addEventListener("click", function () {
    console.log('kajfakljfkajdf');
    video.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
overlay.addEventListener('click', function () {
    video.classList.add('hidden');
    overlay.classList.add('hidden');
});