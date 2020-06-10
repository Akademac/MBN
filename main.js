//date 

(function date () {
	let today_div = document.querySelector('#date');
	let date = new Date();
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let getDay = date.getDay();
	let getDate = date.getDate()
	let getYear = date.getFullYear();
	let getMonth = date.getMonth();
	today_div.innerHTML = `${days[getDay]}, ${getDate} ${months[getMonth]} ${getYear}`;

})();

//mini section DIV

let section_btn = document.querySelector('#sections');
let section_mini_div = document.querySelector('#section_mini_div');
let whole_body = document.querySelector('#whole_body');

section_btn.addEventListener('click', () => {
	console.log('section');
	section_mini_div.style.marginLeft = 0;
	whole_body.style.marginLeft = 20 + 'rem';
});

//newest

let newest = document.querySelectorAll('.newest');

newest.forEach(e => {
	e.addEventListener('click', () => {
		window.open('newest.html');
	})
})

//politics

main_pol_div = document.querySelector('#main_pol_div');

main_pol_div.addEventListener('click', () => {
	window.open('politics.html');
});

let pol_other = document.querySelectorAll('.pol_other');

pol_other.forEach(e => {
	e.addEventListener('click', () => {
		window.open('politics.html');
	})
})

//tehnologies 

window.addEventListener('scroll', () => {
 	let tech_video = document.querySelector('.video_tech');
	tech_video.play();
})

let tech_h = document.querySelector('#tech_h');

tech_h.addEventListener('click', () => {
	window.open('technologies.html');
});


//music

let music_art = document.querySelectorAll('.music');

music_art.forEach(e => {
	e.addEventListener('click', el => {
		e.style.zIndex = 100;
		console.log(e);
	})
})


//astronomy 

window.addEventListener('scroll', () => {
let astr_video = document.querySelector('.video_astr');
   astr_video.play();
})

