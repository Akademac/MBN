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


//mini section DIV

let section_btn = document.querySelector('#sections');
let section_mini_div = document.querySelector('#section_mini_div');
let section_mini_class = document.querySelectorAll('.section_mini_class');
let section_mini_table = document.querySelectorAll('.section_mini_table');
let news_main_div = document.querySelector('#news_main_div');
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

//mini section filter

let sec_likes = document.querySelectorAll('.sec_likes');
let sec_unlikes = document.querySelectorAll('.sec_unlikes');
let sec_comments = document.querySelectorAll('.sec_comments');

sec_likes.forEach(e => {
	e.addEventListener('click', ee => {
	let sec_likes_each = ee.target.dataset.most_likes;
		if(sec_likes_each == 'most_likes_politics') {
			window.open('news.html#most_likes_politics', '_self');
			location.reload();
		}
		else if(sec_likes_each == 'most_likes_sports') {
			window.open('news.html#most_likes_sports', '_self');
			location.reload();
		}
		else if(sec_likes_each == 'most_likes_music') {
			window.open('news.html#most_likes_music', '_self');
			location.reload();
		}
		else if(sec_likes_each == 'most_likes_culture') {
			window.open('news.html#most_likes_culture', '_self');
			location.reload();
		}		
	});
});

sec_unlikes.forEach(e => {
	e.addEventListener('click', ee => {
	let sec_unlikes_each = ee.target.dataset.most_unlikes;
		if(sec_unlikes_each == 'most_unlikes_politics') {
			window.open('news.html#most_unlikes_politics', '_self');
			location.reload();
		}
		else if(sec_unlikes_each == 'most_unlikes_sports') {
			window.open('news.html#most_unlikes_sports', '_self');
			location.reload();
		}
		else if(sec_unlikes_each == 'most_unlikes_music') {
			window.open('news.html#most_unlikes_music', '_self');
			location.reload();
		}
		else if(sec_unlikes_each == 'most_unlikes_culture') {
			window.open('news.html#most_unlikes_culture', '_self');
			location.reload();
		}		
	});
});

sec_comments.forEach(e => {
	e.addEventListener('click', ee => {
	let sec_comments_each = ee.target.dataset.most_comments;
		if(sec_comments_each == 'most_comments_politics') {
			window.open('news.html#most_comments_politics', '_self');
			location.reload();
		}
		else if(sec_comments_each == 'most_comments_sports') {
			window.open('news.html#most_comments_sports', '_self');
			location.reload();
		}
		else if(sec_comments_each == 'most_comments_music') {
			window.open('news.html#most_comments_music', '_self');
			location.reload();
		}
		else if(sec_comments_each == 'most_comments_culture') {
			window.open('news.html#most_comments_culture', '_self');
			location.reload();
		}		
	});
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

news_main_div.addEventListener('click', () => {
	section_mini_div.style.marginLeft = -12 + 'rem';
	news_main_div.style.margin = '0px auto';
	x_sec = 1;
	section_mini_table.forEach(e => {
		e.style.display = 'none';
	});
});

let x_sec = 1;

section_btn.addEventListener('click', () => {
	if(x_sec == 1) {
		section_mini_div.style.marginLeft = 0;
		news_main_div.style.marginLeft = 12 + 'rem';
		x_sec = x_sec + 1;
	}
	else if(x_sec == 2){
		section_mini_div.style.marginLeft = -12 + 'rem';
		news_main_div.style.margin = '0px auto';

		x_sec = 1;
		section_mini_table.forEach(e => {
			e.style.display = 'none';
		});
	}
});


//fetch certain data

let wind_loc_x = window.location.href;

let wind_loc_y = wind_loc_x.indexOf('#');

let wind_loc_z = wind_loc_x.slice(wind_loc_y + 1, wind_loc_x.length);

let news_divs = document.querySelector('#news_divs');

let news_h1 = document.querySelector('#news_h1');


fetch('https://akademac.github.io/MBN_Api/mbn.json')
.then(response => {
	return response.json();
})
.then(data => {
	fetching_data_sec(data);
	if(wind_loc_z == 1) {
		// console.log(data[5].news.newest[0].heading);
			news_h1.innerHTML = 'Newest';
			for(let i = 0; i<data[5].news.newest.length; i++) {
				if(i == 0) {
					news_divs.innerHTML += `
					<hr class='other_page_hr' />
					<h2 id='news_h2'>${data[5].news.newest[i].heading}</h2>
					<p id='news_p'>
					<img src='${data[5].news.newest[i].img}' alt='Not found!' id='news_img' />
	
						${data[5].news.newest[i].news}
					
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.newest[i].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.newest[i].unlikes}</span>
					</span>
					<span class='date_other'>12. 02. 2020</span>
					<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.newest[i].comments}</span>
					</span>
					<hr class='other_page_hr' />		
			`
				}
				else {
					news_divs.innerHTML += `
					<h2 id='news_h2'>${data[5].news.newest[i].heading}</h2>
					<p id='news_p'>
					<img src='${data[5].news.newest[i].img}' alt='Not found!' id='news_img' />
	
						${data[5].news.newest[i].news}
					
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.newest[i].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.newest[i].unlikes}</span>
					</span>
					<span class='date_other'>12. 02. 2020</span>
					<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.newest[i].comments}</span>
					</span>
					<hr class='other_page_hr' />		
			`
				}
		}
	}
	else if(wind_loc_z == 2) {
		news_h1.innerHTML = 'Politics';
		for(let i = 0; i<data[5].news.politics.length; i++) {
			if(i == 0) {
				news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${data[5].news.politics[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.politics[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.politics[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.politics[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.politics[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.politics[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
			else {
				news_divs.innerHTML += `
				<h2 id='news_h2'>${data[5].news.politics[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.politics[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.politics[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.politics[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.politics[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.politics[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
	}
	}
	else if(wind_loc_z == 3) {
		news_h1.innerHTML = 'Sports';
		for(let i = 0; i<data[5].news.sports.length; i++) {
			if(i == 0) {
				news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${data[5].news.sports[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.sports[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.sports[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.sports[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.sports[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.sports[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
			else {
				news_divs.innerHTML += `
				<h2 id='news_h2'>${data[5].news.sports[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.sports[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.sports[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.sports[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.sports[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.sports[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
	}
	}	
	else if(wind_loc_z == 4) {
		news_h1.innerHTML = 'Technologies';
		for(let i = 0; i<data[5].news.technologies.length; i++) {
			if(i == 0) {
				news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${data[5].news.technologies[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.technologies[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.technologies[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.technologies[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.technologies[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.technologies[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
			else {
				news_divs.innerHTML += `
				<h2 id='news_h2'>${data[5].news.technologies[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.technologies[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.technologies[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.technologies[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.technologies[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.technologies[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
	}
	}	
	else if(wind_loc_z == 5) {
		news_h1.innerHTML = 'Music';
		for(let i = 0; i<data[5].news.music.length; i++) {
			if(i == 0) {
				news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${data[5].news.music[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.music[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.music[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.music[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.music[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.music[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
			else {
				news_divs.innerHTML += `
				<h2 id='news_h2'>${data[5].news.music[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.music[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.music[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.music[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.music[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.music[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
	}
	}
	else if(wind_loc_z == 6) {
		news_h1.innerHTML = 'Culture';
		for(let i = 0; i<data[5].news.culture.length; i++) {
			if(i == 0) {
				news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${data[5].news.culture[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.culture[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.culture[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.culture[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.culture[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.culture[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
			else {
				news_divs.innerHTML += `
				<h2 id='news_h2'>${data[5].news.culture[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.culture[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.culture[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.culture[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.culture[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.culture[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
	}
	}
	else if(wind_loc_z == 7) {
		news_h1.innerHTML = 'Astronomy';
		for(let i = 0; i<data[5].news.astronomy.length; i++) {
			if(i == 0) {
				news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${data[5].news.astronomy[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.astronomy[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.astronomy[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.astronomy[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.astronomy[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.astronomy[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
			else {
				news_divs.innerHTML += `
				<h2 id='news_h2'>${data[5].news.astronomy[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.astronomy[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.astronomy[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.astronomy[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.astronomy[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.astronomy[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
	}
	}
	
	//sports Filter
	
	if(wind_loc_z == 'current') {
		news_h1.innerHTML = 'Current';
		for(let i = 0; i<data[5].news.sports.length; i++) {
			if(i == 0) {
				news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${data[5].news.sports[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.sports[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.sports[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.sports[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.sports[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.sports[i].comments}</span>
				</span>
				<hr class='other_page_hr' />		
		`
			}
			else {
				news_divs.innerHTML += `
				<h2 id='news_h2'>${data[5].news.sports[i].heading}</h2>
				<p id='news_p'>
				<img src='${data[5].news.sports[i].img}' alt='Not found!' id='news_img' />

					${data[5].news.sports[i].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${data[5].news.sports[i].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${data[5].news.sports[i].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${data[5].news.sports[i].comments}</span>
				</span>
				<hr class='other_page_hr' />`
			}
		}
	}

	if(wind_loc_z == 'football') {
		news_h1.innerHTML = 'Football';
		data[5].news.sports.forEach(e => {
			if(e.football == true) {
				news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${e.heading}</h2>
				<p id='news_p'>
				<img src='${e.img}' alt='Not found!' id='news_img' />

					${e.news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${e.likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${e.unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${e.comments}</span>
				</span>
				<hr class='other_page_hr' />`
			}
		})
	}

	if(wind_loc_z == 'basketball') {
		news_h1.innerHTML = 'Basketball';
		data[5].news.sports.forEach(e => {
			if(e.basketball == true) {
				news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${e.heading}</h2>
				<p id='news_p'>
				<img src='${e.img}' alt='Not found!' id='news_img' />

					${e.news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${e.likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${e.unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${e.comments}</span>
				</span>
				<hr class='other_page_hr' />`
			}
		})
	}

	
	if(wind_loc_z == 'tennis') {
		news_h1.innerHTML = 'Tennis';
		data[5].news.sports.forEach(e => {
			if(e.tennis == true) {
				news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${e.heading}</h2>
				<p id='news_p'>
				<img src='${e.img}' alt='Not found!' id='news_img' />

					${e.news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${e.likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${e.unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${e.comments}</span>
				</span>
				<hr class='other_page_hr' />`
			}
		})
	}

	if(wind_loc_z == 'others') {
		news_h1.innerHTML = 'Others';
		news_divs.innerHTML = 
		`<div style='height:20rem; text-align: center'>
			<h2>No news for others sports yet...</h2>
		</div>`
	}

	//Section Filter



});

let fetching_data_sec = (d => {
	let pol_arr_likes = [];
	let pol_arr_unlikes = [];
	let pol_arr_comments = [];
	let sports_arr_likes = [];
	let sports_arr_unlikes = [];
	let sports_arr_comments = [];
	let music_arr_likes = [];
	let music_arr_unlikes = [];
	let music_arr_comments = [];
	let culture_arr_likes = [];
	let culture_arr_unlikes = [];
	let culture_arr_comments = [];

	for(let i = 0; i<d[5].news.politics.length; i++) {
		let pol_likes = d[5].news.politics[i];
		pol_arr_likes.push(pol_likes);
			pol_arr_likes.sort((a, b) => {
			   return b.likes-a.likes;
		})
	};

	for(let i = 0; i<d[5].news.politics.length; i++) {
		let pol_unlikes = d[5].news.politics[i];
		pol_arr_unlikes.push(pol_unlikes);
			pol_arr_unlikes.sort((a, b) => {
			   return b.unlikes-a.unlikes;
		})
	};

	for(let i = 0; i<d[5].news.politics.length; i++) {
		let pol_comments = d[5].news.politics[i];
		pol_arr_comments.push(pol_comments);
			pol_arr_comments.sort((a, b) => {
			   return b.comments-a.comments;
		})
	};	

	for(let i = 0; i<d[5].news.sports.length; i++) {
		let sports_likes = d[5].news.sports[i];
		sports_arr_likes.push(sports_likes);
			sports_arr_likes.sort((a, b) => {
			   return b.likes-a.likes;
		})
	};

	for(let i = 0; i<d[5].news.sports.length; i++) {
		let sports_unlikes = d[5].news.sports[i];
		sports_arr_unlikes.push(sports_unlikes);
			sports_arr_unlikes.sort((a, b) => {
			   return b.unlikes-a.unlikes;
		})
	};

	for(let i = 0; i<d[5].news.sports.length; i++) {
		let sports_comments = d[5].news.sports[i];
		sports_arr_comments.push(sports_comments);
			sports_arr_comments.sort((a, b) => {
			   return b.comments-a.comments;
		})
	};

	for(let i = 0; i<d[5].news.music.length; i++) {
		let music_likes = d[5].news.music[i];
		music_arr_likes.push(music_likes);
			music_arr_likes.sort((a, b) => {
			   return b.likes-a.likes;
		})
	};

	for(let i = 0; i<d[5].news.music.length; i++) {
		let music_unlikes = d[5].news.music[i];
		music_arr_unlikes.push(music_unlikes);
			music_arr_unlikes.sort((a, b) => {
			   return b.unlikes-a.unlikes;
		})
	};

	for(let i = 0; i<d[5].news.music.length; i++) {
		let music_comments = d[5].news.music[i];
		music_arr_comments.push(music_comments);
			music_arr_comments.sort((a, b) => {
			   return b.comments-a.comments;
		})
	};
	
	for(let i = 0; i<d[5].news.culture.length; i++) {
		let culture_likes = d[5].news.culture[i];
		culture_arr_likes.push(culture_likes);
			culture_arr_likes.sort((a, b) => {
			   return b.likes-a.likes;
		})
	};

	for(let i = 0; i<d[5].news.culture.length; i++) {
		let culture_unlikes = d[5].news.culture[i];
		culture_arr_unlikes.push(culture_unlikes);
			culture_arr_unlikes.sort((a, b) => {
			   return b.unlikes-a.unlikes;
		})
	};

	for(let i = 0; i<d[5].news.culture.length; i++) {
		let culture_comments = d[5].news.culture[i];
		culture_arr_comments.push(culture_comments);
			culture_arr_comments.sort((a, b) => {
			   return b.comments-a.comments;
		})
	};	

	console.log(pol_arr_likes[0]);
	if(wind_loc_z == 'most_likes_politics') {
		news_h1.innerHTML = `Politics, most likes: ${pol_arr_likes[0].likes}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${pol_arr_likes[0].heading}</h2>
				<p id='news_p'>
				<img src='${pol_arr_likes[0].img}' alt='Not found!' id='news_img' />

					${pol_arr_likes[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${pol_arr_likes[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${pol_arr_likes[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${pol_arr_likes[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`		
	}

	if(wind_loc_z == 'most_unlikes_politics') {
		news_h1.innerHTML = `Politics, most unlikes: ${pol_arr_unlikes[0].unlikes}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${pol_arr_unlikes[0].heading}</h2>
				<p id='news_p'>
				<img src='${pol_arr_unlikes[0].img}' alt='Not found!' id='news_img' />

					${pol_arr_unlikes[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${pol_arr_unlikes[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${pol_arr_unlikes[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${pol_arr_unlikes[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`		
	}

	
	if(wind_loc_z == 'most_comments_politics') {
		news_h1.innerHTML = `Politics, most comments: ${pol_arr_comments[0].comments}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${pol_arr_comments[0].heading}</h2>
				<p id='news_p'>
				<img src='${pol_arr_comments[0].img}' alt='Not found!' id='news_img' />

					${pol_arr_comments[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${pol_arr_comments[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${pol_arr_comments[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${pol_arr_comments[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`		
	}
	
	
	else if(wind_loc_z == 'most_likes_sports') {
		news_h1.innerHTML = `Sports, most likes: ${sports_arr_likes[0].likes}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${sports_arr_likes[0].heading}</h2>
				<p id='news_p'>
				<img src='${sports_arr_likes[0].img}' alt='Not found!' id='news_img' />

					${sports_arr_likes[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${sports_arr_likes[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${sports_arr_likes[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${sports_arr_likes[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`	
	}

	else if(wind_loc_z == 'most_unlikes_sports') {
		news_h1.innerHTML = `Sports, most unlikes: ${sports_arr_unlikes[0].unlikes}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${sports_arr_unlikes[0].heading}</h2>
				<p id='news_p'>
				<img src='${sports_arr_unlikes[0].img}' alt='Not found!' id='news_img' />

					${sports_arr_unlikes[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${sports_arr_unlikes[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${sports_arr_unlikes[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${sports_arr_unlikes[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`	
	}

	else if(wind_loc_z == 'most_comments_sports') {
		news_h1.innerHTML = `Sports, most comments: ${sports_arr_comments[0].comments}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${sports_arr_comments[0].heading}</h2>
				<p id='news_p'>
				<img src='${sports_arr_comments[0].img}' alt='Not found!' id='news_img' />

					${sports_arr_comments[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${sports_arr_comments[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${sports_arr_comments[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${sports_arr_comments[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`	
	}

	else if(wind_loc_z == 'most_likes_music') {
		news_h1.innerHTML = `Music, most likes: ${music_arr_likes[0].likes}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${music_arr_likes[0].heading}</h2>
				<p id='news_p'>
				<img src='${music_arr_likes[0].img}' alt='Not found!' id='news_img' />

					${music_arr_likes[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${music_arr_likes[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${music_arr_likes[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${music_arr_likes[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`	
	}

	else if(wind_loc_z == 'most_unlikes_music') {
		news_h1.innerHTML = `Music, most unlikes: ${music_arr_unlikes[0].unlikes}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${music_arr_unlikes[0].heading}</h2>
				<p id='news_p'>
				<img src='${music_arr_unlikes[0].img}' alt='Not found!' id='news_img' />

					${music_arr_unlikes[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${music_arr_unlikes[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${music_arr_unlikes[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${music_arr_unlikes[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`	
	}

	
	else if(wind_loc_z == 'most_comments_music') {
		news_h1.innerHTML = `Music, most comments: ${music_arr_comments[0].comments}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${music_arr_comments[0].heading}</h2>
				<p id='news_p'>
				<img src='${music_arr_comments[0].img}' alt='Not found!' id='news_img' />

					${music_arr_comments[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${music_arr_comments[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${music_arr_comments[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${music_arr_comments[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`	
	}

	else if(wind_loc_z == 'most_likes_culture') {
		news_h1.innerHTML = `Culture, most likes: ${culture_arr_likes[0].likes}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${culture_arr_likes[0].heading}</h2>
				<p id='news_p'>
				<img src='${culture_arr_likes[0].img}' alt='Not found!' id='news_img' />

					${culture_arr_likes[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${culture_arr_likes[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${culture_arr_likes[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${culture_arr_likes[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`	
	}

	else if(wind_loc_z == 'most_unlikes_culture') {
		news_h1.innerHTML = `Culture, most unlikes: ${culture_arr_unlikes[0].unlikes}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${culture_arr_unlikes[0].heading}</h2>
				<p id='news_p'>
				<img src='${culture_arr_unlikes[0].img}' alt='Not found!' id='news_img' />

					${culture_arr_unlikes[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${culture_arr_unlikes[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${culture_arr_unlikes[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${culture_arr_unlikes[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`	
	}

	
	else if(wind_loc_z == 'most_comments_culture') {
		news_h1.innerHTML = `Culture, most comments: ${culture_arr_comments[0].comments}`;
		news_divs.innerHTML += `
				<hr class='other_page_hr' />
				<h2 id='news_h2'>${culture_arr_comments[0].heading}</h2>
				<p id='news_p'>
				<img src='${culture_arr_comments[0].img}' alt='Not found!' id='news_img' />

					${culture_arr_comments[0].news}
				
				</p>
				<span class='likes'>
					<i class="far fa-thumbs-up"></i>
					<span class='like'>${culture_arr_comments[0].likes}</span>
					<i class="far fa-thumbs-down"></i>
					<span class='unlike'>${culture_arr_comments[0].unlikes}</span>
				</span>
				<span class='date_other'>12. 02. 2020</span>
				<span class='comments'>
					<i class="far fa-comment"></i>
					<span class='comments_s'>${culture_arr_comments[0].comments}</span>
				</span>
				<hr class='other_page_hr' />`	
	}


})



