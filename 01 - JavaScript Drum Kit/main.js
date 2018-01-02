window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if(!audio) return; // stops the audio from running all together
	audio.currentTime = 0; // rewinds to the start
	audio.play(); // plays keys over and over again\
	// key.classList.toggle('playing');
	key.classList.add('playing');
});

const keys = Array.from(document.querySelectorAll('.key'));
// cannot listen for events on an array
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
console.log(keys);

function removeTransition(e) {
	console.log(e);
	if(e.propertyName !== 'transform') {
		return; // skip if it's not a transform
	}
	this.classList.remove('playing');
}