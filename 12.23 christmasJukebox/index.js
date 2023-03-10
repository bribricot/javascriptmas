let player = document.getElementById("player");

function playSong(id) {
	player.src = `https://www.youtube.com/embed/${}?autoplay=0&modestbranding=1&frameborder="0"&`;
	player.setAttribute('height', 0);

}