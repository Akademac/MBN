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

//responsive nav

let menu_bar_x = 0;

let menu_bar = document.querySelector('#menu_bar');
let mini_nav = document.querySelector('.main_mini_nav_span_inactive');
let mini_nav_items = document.querySelectorAll('.main_mini_nav_span');

	menu_bar.addEventListener('click', () => {
		if(menu_bar_x == 0) {
			mini_nav.classList.add('main_mini_nav_span_active');
			menu_bar.style.transform = 'rotate(180deg)';
			menu_bar_x = menu_bar_x+1;
		}
		else if(menu_bar_x > 0) {
			mini_nav.classList.remove('main_mini_nav_span_active');
			menu_bar.style.transform = 'rotate(-180deg)';
			menu_bar_x = menu_bar_x-1;
		}
	});

	mini_nav_items.forEach(e => {
		e.addEventListener('click', () => {
			mini_nav.classList.remove('main_mini_nav_span_active');
			menu_bar_x = menu_bar_x - 1;
		})
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
	today_div.innerHTML = `${days[getDay]}, ${getDate} ${months[getMonth-1]} ${getYear}`;

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
let section_main_pol = document.querySelector('#section_main_pol');
let section_main_sports = document.querySelector('#section_main_sports');
let section_main_mus = document.querySelector('#section_main_mus');
let section_main_cult = document.querySelector('#section_main_cult');

section_main_pol.addEventListener('click', e => {
	window.open('news_single.html#main_pol');
});
section_main_sports.addEventListener('click', e => {
	window.open('news_single.html#sports_first');
});
section_main_mus.addEventListener('click', e => {
	window.open('news_single.html#music_first');
});
section_main_cult.addEventListener('click', e => {
	window.open('news_single.html#culture_main');
});

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

//politics

main_pol_div = document.querySelector('#main_pol_div');

let pol_other = document.querySelectorAll('.pol_other');


//sport 

let sports_h = document.querySelector('#sports_h');
let all_sports = document.querySelectorAll('.all_sports');
let sports_div = document.querySelectorAll('.sports_div');

//tehnologies 

let technologies = document.querySelector('#technologies');

technologies.addEventListener('click', () => {
 	let tech_video = document.querySelector('.video_tech');
	tech_video.play();
})

let tech_h = document.querySelector('#tech_h');


//music

let music_art = document.querySelectorAll('.music_b');
let music_h = document.querySelector('#music_h');
let music_read_more = document.querySelectorAll('.music_read_more');
let x_music = 1;

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

//culture 

let culture_h = document.querySelector('#culture_h');
let culture_main_heading = document.querySelector('#culture_main_heading');
let culture_other = document.querySelectorAll('.culture_other');

//astronomy 

let astr_h = document.querySelector('#astr_h');
let astronomy = document.querySelector('#astronomy');

astronomy.addEventListener('click', () => {
let astr_video = document.querySelector('.video_astr');
   astr_video.play();
})



													//fetching

//landing page

let newest = document.querySelectorAll('.newest');
let main_pol_div_img = document.querySelector('#main_pol_div_img');
let main_pol_h = document.querySelector('#main_pol_h');
let main_pol_p = document.querySelector('#main_pol_p');
let pol_other_h3 = document.querySelectorAll('.pol_other_h3');
let pol_other_p = document.querySelectorAll('.pol_other_p');
let sports_div_h = document.querySelectorAll('.sports_div_h');
let music = document.querySelectorAll('.music');
let music_p = document.querySelectorAll('.music_p');
let music_hh = document.querySelectorAll('.music_h');
let culture_p = document.querySelectorAll('.culture_p');
let culture_hh = document.querySelectorAll('.culture_h');
let culture_main_h = document.querySelector('#culture_main_h');
let culture_main_p = document.querySelector('#culture_main_p');

let n = 0; 
let nn = 0;
let p = 0;
let pp = 0;
let s = 0;
let ss = 0;
let m = 0;
let mm = 0;
let mmm = 0;
let c = 0;
let cc = 0;

fetch("https://akademac.github.io/MBN_Api/mbn.json")
.then(response => {
	return  response.json()}) 
.then(data => {
	fetching_data_lp(data);
	fetching_data_sec(data);
})
.catch((err) => {
		console.log(`Something went wrong > ${err}`);
	}
);

let fetching_data_lp = d => {
			//newest
			newest.forEach(e => {
				e.innerHTML = d[0].fp_newest[n++].first_news;
				e.style.backgroundImage = `url('${d[0].fp_newest[nn++].img}')`;
			});
			//politics
			main_pol_div_img.style.backgroundImage = `url('${d[1].politics_main.img}')`;
			main_pol_h.innerHTML = d[1].politics_main.heading;
			main_pol_p.innerHTML = d[1].politics_main.news;
			pol_other_h3.forEach(e => {
				e.innerHTML = d[1].politics_other[p++].heading;
			});
			pol_other_p.forEach(e => {
				e.innerHTML = d[1].politics_other[pp++].news;
			});
			//sports
			sports_div_h.forEach(e => {
				e.innerHTML = d[2].sports[s++].heading;
			});
			sports_div.forEach(e => {
				e.style.backgroundImage = `url('${d[2].sports[ss++].img}')`;
			});
			//music
			music.forEach(e => {
				e.style.backgroundImage = `url('${d[3].music[m++].img}')`;
			});
			music_hh.forEach(e => {
				e.innerHTML = d[3].music[mm++].heading;
			});
			music_p.forEach(e => {
				e.innerHTML = d[3].music[mmm++].news;
			});
			//culture
			culture_hh.forEach(e => {
				e.innerHTML = d[4].culture_other[c++].heading;
			});
			culture_p.forEach(e => {
				e.innerHTML = d[4].culture_other[cc++].news;
			});
			culture_main_h.innerHTML = d[4].culture_main.heading;
			culture_main_p.innerHTML = d[4].culture_main.news;
};

// Second Page NEWS

let second_page = document.querySelectorAll('.second_page');

second_page.forEach(e => {
	e.addEventListener('click', ee => {
		let second_pages = ee.target.dataset.second_page;
		for(let i=1; i<=second_page.length; i++) {
			if(second_pages == i) {
				window.open(`news.html#${i}`, '_self');
				console.log(i);
			}	
		}
	});
});

//sports FILTER

let current = document.querySelector('#actual');
let football = document.querySelector('#football');
let basketball = document.querySelector('#basketball');
let tennis = document.querySelector('#tennis');
let others = document.querySelector('#others');

current.addEventListener('click', e  => {
	window.open('news.html#current', '_self');
});

football.addEventListener('click', e  => {
	window.open('news.html#football', '_self');
});

basketball.addEventListener('click', e  => {
	window.open('news.html#basketball', '_self');
});

tennis.addEventListener('click', e  => {
	window.open('news.html#tennis', '_self');
});


others.addEventListener('click', e  => {
	window.open('news.html#others', '_self');
});

//third page


//newst

newest.forEach(ee => {
	ee.addEventListener('click', e => {
		let newest_single = e.target.dataset.newest;
		for(let i=-1; i<newest.length; i++) {
			console.log(i);
			if(newest_single == i) {
				window.open(`news_single.html#${i}`, '_self');
			}
		}; 
	});
});

//politics

main_pol_div_h.addEventListener('click', () => {
	window.open(`news_single.html#main_pol`, '_self');
})

pol_other.forEach(e => {
	e.addEventListener('click', el => {
		let pol_other_t = el.target.dataset.pol;
		if(pol_other_t == 'pol_first') {
			window.open(`news_single.html#pol_first`, '_self');
		}
		else if(pol_other_t == 'pol_second') {
			window.open(`news_single.html#pol_second`, '_self');
		}
		else if(pol_other_t == 'pol_third') {
			window.open(`news_single.html#pol_third`, '_self');
		}
		else if(pol_other_t == 'pol_fourth') {
			window.open(`news_single.html#pol_fourth`, '_self');
		}
	})
});

//sports

sports_div.forEach(e => {
	e.addEventListener('click', el => {
		let sports_divs = el.target.dataset.sports;
		if(sports_divs == 'sport_first') {
			window.open(`news_single.html#sports_first`, '_self');
		}
		else if(sports_divs == 'sport_second') {
			window.open(`news_single.html#sports_second`, '_self');
		}
		else if(sports_divs == 'sport_third') {
			window.open(`news_single.html#sports_third`, '_self');
		}
		else if(sports_divs == 'sport_fourth') {
			window.open(`news_single.html#sports_fourth`, '_self');
		}
	})
});

//music

music_read_more.forEach(e => {
	e.addEventListener('click', el => {
		let music_divs = el.target.dataset.music;
		if(music_divs == 'music_first') {
			window.open(`news_single.html#music_first`, '_self');
		}
		else if(music_divs == 'music_second') {
			window.open(`news_single.html#music_second`, '_self');
		}
		else if(music_divs == 'music_third') {
			window.open(`news_single.html#music_third`, '_self');
		}
		else if(music_divs == 'music_fourth') {
			window.open(`news_single.html#music_fourth`, '_self');
		}
		else if(music_divs == 'music_fifth') {
			window.open(`news_single.html#music_fifth`, '_self');
		}
	})
})

//culture

culture_main_heading.addEventListener('click', () => {
	window.open(`news_single.html#culture_main`, '_self');
})

culture_other.forEach(e => {
	e.addEventListener('click', el => {
		let culture_divs = el.target.dataset.culture;
		if(culture_divs == 'culture_first') {
			window.open(`news_single.html#culture_first`, '_self');
		}
		else if(culture_divs == 'culture_second') {
			window.open(`news_single.html#culture_second`, '_self');
		}
		else if(culture_divs == 'culture_third') {
			window.open(`news_single.html#culture_third`, '_self');
		}
	})
})


//mini section filter

let sec_likes = document.querySelectorAll('.sec_likes');
let sec_unlikes = document.querySelectorAll('.sec_unlikes');
let sec_comments = document.querySelectorAll('.sec_comments');

sec_likes.forEach(e => {
	e.addEventListener('click', ee => {
	let sec_likes_each = ee.target.dataset.most_likes;
		if(sec_likes_each == 'most_likes_politics') {
			window.open('news.html#most_likes_politics', '_self');
		}
		else if(sec_likes_each == 'most_likes_sports') {
			window.open('news.html#most_likes_sports', '_self');
		}
		else if(sec_likes_each == 'most_likes_music') {
			window.open('news.html#most_likes_music', '_self');
		}
		else if(sec_likes_each == 'most_likes_culture') {
			window.open('news.html#most_likes_culture', '_self');
		}		
	});
});

sec_unlikes.forEach(e => {
	e.addEventListener('click', ee => {
	let sec_unlikes_each = ee.target.dataset.most_unlikes;
		if(sec_unlikes_each == 'most_unlikes_politics') {
			window.open('news.html#most_unlikes_politics', '_self');
		}
		else if(sec_unlikes_each == 'most_unlikes_sports') {
			window.open('news.html#most_unlikes_sports', '_self');
		}
		else if(sec_unlikes_each == 'most_unlikes_music') {
			window.open('news.html#most_unlikes_music', '_self');
		}
		else if(sec_unlikes_each == 'most_unlikes_culture') {
			window.open('news.html#most_unlikes_culture', '_self');
		}		
	});
});

sec_comments.forEach(e => {
	e.addEventListener('click', ee => {
	let sec_comments_each = ee.target.dataset.most_comments;
		if(sec_comments_each == 'most_comments_politics') {
			window.open('news.html#most_comments_politics', '_self');
		}
		else if(sec_comments_each == 'most_comments_sports') {
			window.open('news.html#most_comments_sports', '_self');
		}
		else if(sec_comments_each == 'most_comments_music') {
			window.open('news.html#most_comments_music', '_self');
		}
		else if(sec_comments_each == 'most_comments_culture') {
			window.open('news.html#most_comments_culture', '_self');
		}		
	});
});


