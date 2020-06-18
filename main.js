//nav more arrow

let more_arrow_down = document.querySelector('.fa-sort-down');
let more_div_down = document.querySelector('#nav_more');
let x_arrow_more = 1;

more_arrow_down.addEventListener('click', () => {
	if(x_arrow_more == 1) {
		more_div_down.style.display = 'flex';
		more_arrow_down.classList.remove('fa-sort-down');
		more_arrow_down.classList.add('fa-sort-up');
		x_arrow_more = x_arrow_more + 1;
	}
	else if(x_arrow_more == 2) {
		more_div_down.style.display = 'none';
		more_arrow_down.classList.remove('fa-sort-up');
		more_arrow_down.classList.add('fa-sort-down');
		x_arrow_more = 1;
	}
});

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
let section_mini_class = document.querySelectorAll('.section_mini_class');
let section_mini_table = document.querySelectorAll('.section_mini_table');
let whole_body = document.querySelector('#whole_body');
let section_mini_h3 = document.querySelectorAll('.sec_mini_h3');
let section_mini_tab_pol = document.querySelector('#sec_mini_tab_pol');
let section_mini_tab_sp = document.querySelector('#sec_mini_tab_sp');
let section_mini_tab_mus = document.querySelector('#sec_mini_tab_mus');
let section_mini_tab_cul = document.querySelector('#sec_mini_tab_cul');

let section = [];

section_mini_table.forEach(e => {
	section.push(e);
})

section_mini_h3.forEach(e => {
	let ctr_mini_section_1 = 1;
	let ctr_mini_section_2 = 1;
	let ctr_mini_section_4 = 1;
	let ctr_mini_section_5 = 1;

	e.addEventListener('click', ee => {
		let x = ee.target.dataset.sec;
		// console.log(x);
		if(x == 1) {
			if(ctr_mini_section_1 == 1) {
				section[0].style.display = 'block';
				ctr_mini_section_1++;				
			}
			else if(ctr_mini_section_1 == 2) {
				section[0].style.display = 'none';
				ctr_mini_section_1--;				
			}
			console.log(section[0]);
		}
		if(x == 2) {
			if(ctr_mini_section_2 == 1) {
				section[1].style.display = 'block';
				ctr_mini_section_2++;				
			}
			else if(ctr_mini_section_2 == 2) {
				section[1].style.display = 'none';
				ctr_mini_section_2--;				
			}
			console.log(section[1]);

		}
		if(x == 4) {
			if(ctr_mini_section_4 == 1) {
				section[2].style.display = 'block';
				ctr_mini_section_4++;				
			}
			else if(ctr_mini_section_4 == 2) {
				section[2].style.display = 'none';
				ctr_mini_section_4--;				
			}
			console.log(section[2]);
		}
		 if(x == 5) {
			if(ctr_mini_section_5 == 1) {
				section[3].style.display = 'block';
				ctr_mini_section_5++;				
			}
			else if(ctr_mini_section_5 == 2) {
				section[3].style.display = 'none';
				ctr_mini_section_5--;				
			}
			console.log(section[3]);
		}
	});
});

whole_body.addEventListener('click', () => {
	section_mini_div.style.marginLeft = -12 + 'rem';
	whole_body.style.marginLeft = 0;
	x_sec = 1;
	section_mini_table.forEach(e => {
		e.style.display = 'none';
	});
});

let x_sec = 1;

section_btn.addEventListener('click', () => {
	if(x_sec == 1) {
		section_mini_div.style.marginLeft = 0;
		whole_body.style.marginLeft = 12 + 'rem';
		x_sec = x_sec + 1;
	}
	else if(x_sec == 2){
		section_mini_div.style.marginLeft = -12 + 'rem';
		whole_body.style.marginLeft = 0;
		x_sec = 1;
		section_mini_table.forEach(e => {
			e.style.display = 'none';
		});
	}
});

//newest

let newest_h = document.querySelectorAll('.newest');
let newest_div = document.querySelector('#newest');
let newest_interval;
newest_x = 1;

setTimeout(() => {
	startInterval();
}, 3000);

let startInterval = () => {
	newest_interval = setInterval(() => {
		newest_x = newest_x - 1;
		newest_div.style.marginLeft = newest_x + 'px';
		if(newest_x < -1000) {
			clearInterval(newest_interval);
			newest_x = 1;
			newest_x = newest_x - 1;
			newest_div.style.marginLeft = newest_x + 'px';
			startInterval()
		}
	}, 50);	
};






newest_h.forEach(e => {
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

//sport 

let sports_h = document.querySelector('#sports_h');
let all_sports = document.querySelectorAll('.all_sports');
let sports_div = document.querySelectorAll('.sports_div');


sports_h.addEventListener('click', () => {
	window.open('sport.html');
})

all_sports.forEach(e => {
	e.addEventListener('click', () => {
		window.open('sport.html');
	})
});

sports_div.forEach(e => {
	e.addEventListener('click', () => {
		window.open('sport.html');
	})
});

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

let music_art = document.querySelectorAll('.music_b');
let music_h = document.querySelector('#music_h');
let music_read_more = document.querySelectorAll('.music_read_more');
let x_music = 1;

music_h.addEventListener('click', () => {
	window.open('music.html')
});

music_art.forEach(e => {
	e.addEventListener('click', el => {
		if(x_music == 1) {
			e.style.zIndex = 60;
			x_music = x_music + 1;
			console.log(e);
		}
		else if(x_music == 2) {
			x_music = 1;
			e.style.zIndex = 40;
			console.log(e);
		}
	})
})

music_read_more.forEach(e => {
	e.addEventListener('click', () => {
		window.open('music.html');
	});
});

//culture 

let culture_h = document.querySelector('#culture_h');
let culture_main_heading = document.querySelector('#culture_main_heading');
let culture_other = document.querySelectorAll('.culture_other');


culture_h.addEventListener('click', () => {
	window.open('culture.html');
});

culture_main_heading.addEventListener('click', () => {
	window.open('culture.html');
});

culture_other.forEach(e => {
	e.addEventListener('click', () => {
		window.open('culture.html');
	});
});



//astronomy 

let astr_h = document.querySelector('#astr_h');

astr_h.addEventListener('click', () => {
	window.open('astronomy.html');
});

window.addEventListener('scroll', () => {
let astr_video = document.querySelector('.video_astr');
   astr_video.play();
})

