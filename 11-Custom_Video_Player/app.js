// get our Elements
const player = document.querySelector('.player');

const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

console.log(player, video, progress, progressBar, toggle, skipButtons, ranges);


// build out functions
function togglePlay () {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

// Hook up the event listener

