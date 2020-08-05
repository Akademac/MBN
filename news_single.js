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
let news_single_main_div = document.querySelector('#news_single_main_div');
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
	window.open('news_single.html#main_pol', '_self');
});
section_main_sports.addEventListener('click', e => {
	window.open('news_single.html#sports_first', '_self');
});
section_main_mus.addEventListener('click', e => {
	window.open('news_single.html#music_first', '_self');
});
section_main_cult.addEventListener('click', e => {
	window.open('news_single.html#culture_main', '_self');
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

//sections

news_single_main_div.addEventListener('click', () => {
	section_mini_div.style.marginLeft = -12 + 'rem';
	news_single_main_div.style.margin = '0px auto';
	x_sec = 1;
	section_mini_table.forEach(e => {
		e.style.display = 'none';
	});
});

let x_sec = 1;

section_btn.addEventListener('click', () => {
	if(x_sec == 1) {
		section_mini_div.style.marginLeft = 0;
		news_single_main_div.style.marginLeft = 12 + 'rem';
		x_sec = x_sec + 1;
	}
	else if(x_sec == 2){
		section_mini_div.style.marginLeft = -12 + 'rem';
		news_single_main_div.style.margin = '0px auto';

		x_sec = 1;
		section_mini_table.forEach(e => {
			e.style.display = 'none';
		});
	}
});


//mini section filter

let sec_likes = document.querySelectorAll('.sec_likes');
let sec_unlikes = document.querySelectorAll('.sec_unlikes');
let sec_comments = document.querySelectorAll('.sec_comments');

sec_likes.forEach(e => {
	e.addEventListener('click', ee => {
	let sec_likes_each = ee.target.dataset.most_likes;
		if(sec_likes_each == 'most_likes_politics') {
			console.log('most likes politics');
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




//fetching

let main_single_news = document.querySelector('#main_single_news');
let main_single_h1 = document.querySelector('#main_single_h1');
let main_single_news_h2 = document.querySelector('#main_single_news_h2');
let main_single_news_img = document.querySelector('#main_single_news_img');
let main_single_news_p = document.querySelector('#main_single_news_p');
let other_single_news = document.querySelectorAll('.other_single_news');

let other_single_img = document.querySelector('.other_single_img');
let other_single_h3 = document.querySelector('.other_single_h3');

let wind_loc_x = window.location.href;

let wind_loc_y = wind_loc_x.indexOf('#');

let wind_loc_z = wind_loc_x.slice(wind_loc_y + 1, wind_loc_x.length);

let single_news_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let single_pol_arr = [0, 1, 2, 3];
let single_sports_arr = [0, 1, 2];
let single_culture_arr = [0, 1, 2];
let single_music_arr = [0, 1, 2, 4];

let ii;

let x = 0;


fetch('https://akademac.github.io/MBN_Api/mbn.json')
.then(response => {
    return response.json();
})
.then(data => {
    for(let i=0; i<=single_news_arr.length; i++) {
	 
		//newest
		
		if(wind_loc_z == i) {
			main_single_h1.innerHTML = 'Newest';
            main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.newest[i].heading}</h2>
            <img src="${data[5].news.newest[i].img}" id='main_single_news_img'>
            <p id='main_single_news_p'>${data[5].news.newest[i].news}
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
                </span>`;

            other_single_news.forEach(eee => {
                for(ii=0; ii<=single_news_arr.length; ii++) {
                    eee.innerHTML += `
                    <div class='other_single_newss' >
                        <img src='${data[5].news.newest[ii].img}' class='other_single_img' />
                        <h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.newest[ii].heading}</h3> 
					</div>`;   
					let other_single_newss = document.querySelectorAll('.other_single_newss');
					other_single_newss.forEach(el => {
						el.addEventListener('click', ele => {
							let other_news = ele.target.dataset.newsother;
							main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.newest[other_news].heading}</h2>
							<img src="${data[5].news.newest[other_news].img}" id='main_single_news_img'>
							<p id='main_single_news_p'>${data[5].news.newest[other_news].news}
							</p>
							<span class='likes'>
								<i class="far fa-thumbs-up"></i>
								<span class='like'>${data[5].news.newest[other_news].likes}</span>
								<i class="far fa-thumbs-down"></i>
								<span class='unlike'>${data[5].news.newest[other_news].unlikes}</span>
							</span>
							<span class='date_other'>12. 02. 2020</span>
							<span class='comments'>
								<i class="far fa-comment"></i>
								<span class='comments_s'>${data[5].news.newest[other_news].comments}</span>
								</span>`;
						})
					})	
				}		
			})
         }
         
	}

	//politics

	if(wind_loc_z == 'main_pol') {
		main_single_h1.innerHTML = 'Politics';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[0].heading}</h2>
		<img src="${data[5].news.politics[0].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.politics[0].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.politics[0].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.politics[0].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.politics[0].comments}</span>
			</span>`;

			other_single_news.forEach(eee => {
                for(ii=0; ii<=single_pol_arr.length; ii++) {
                    eee.innerHTML += `
                    <div class='other_single_newss' >
                        <img src='${data[5].news.politics[ii].img}' class='other_single_img' />
                        <h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.politics[ii].heading}</h3> 
					</div>`;   
					let other_single_newss = document.querySelectorAll('.other_single_newss');
					other_single_newss.forEach(el => {
						el.addEventListener('click', ele => {
							let other_news = ele.target.dataset.newsother;
							main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[other_news].heading}</h2>
							<img src="${data[5].news.politics[other_news].img}" id='main_single_news_img'>
							<p id='main_single_news_p'>${data[5].news.politics[other_news].news}
							</p>
							<span class='likes'>
								<i class="far fa-thumbs-up"></i>
								<span class='like'>${data[5].news.politics[other_news].likes}</span>
								<i class="far fa-thumbs-down"></i>
								<span class='unlike'>${data[5].news.politics[other_news].unlikes}</span>
							</span>
							<span class='date_other'>12. 02. 2020</span>
							<span class='comments'>
								<i class="far fa-comment"></i>
								<span class='comments_s'>${data[5].news.politics[other_news].comments}</span>
								</span>`;
						})
					})	
				}		
			})
		 }
		 
	if(wind_loc_z == 'pol_first') {
		main_single_h1.innerHTML = 'Politics';

		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[1].heading}</h2>
		<img src="${data[5].news.politics[1].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.politics[1].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.politics[1].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.politics[1].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.politics[1].comments}</span>
			</span>`;
	
			other_single_news.forEach(eee => {
				for(ii=0; ii<=single_pol_arr.length; ii++) {
					eee.innerHTML += `
					<div class='other_single_newss' >
						<img src='${data[5].news.politics[ii].img}' class='other_single_img' />
						<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.politics[ii].heading}</h3> 
					</div>`;   
					let other_single_newss = document.querySelectorAll('.other_single_newss');
					other_single_newss.forEach(el => {
						el.addEventListener('click', ele => {
							let other_news = ele.target.dataset.newsother;
							main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[other_news].heading}</h2>
							<img src="${data[5].news.politics[other_news].img}" id='main_single_news_img'>
							<p id='main_single_news_p'>${data[5].news.politics[other_news].news}
							</p>
							<span class='likes'>
								<i class="far fa-thumbs-up"></i>
								<span class='like'>${data[5].news.politics[other_news].likes}</span>
								<i class="far fa-thumbs-down"></i>
								<span class='unlike'>${data[5].news.politics[other_news].unlikes}</span>
							</span>
							<span class='date_other'>12. 02. 2020</span>
							<span class='comments'>
								<i class="far fa-comment"></i>
								<span class='comments_s'>${data[5].news.politics[other_news].comments}</span>
								</span>`;
						})
					})	
				}		
			})
	}

	if(wind_loc_z == 'pol_second') {
			main_single_h1.innerHTML = 'Politics';
			main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[2].heading}</h2>
			<img src="${data[5].news.politics[2].img}" id='main_single_news_img'>
			<p id='main_single_news_p'>${data[5].news.politics[2].news}
			</p>
			<span class='likes'>
				<i class="far fa-thumbs-up"></i>
				<span class='like'>${data[5].news.politics[2].likes}</span>
				<i class="far fa-thumbs-down"></i>
				<span class='unlike'>${data[5].news.politics[2].unlikes}</span>
			</span>
			<span class='date_other'>12. 02. 2020</span>
			<span class='comments'>
				<i class="far fa-comment"></i>
				<span class='comments_s'>${data[5].news.politics[2].comments}</span>
				</span>`;
	
			other_single_news.forEach(eee => {
				for(ii=0; ii<=single_pol_arr.length; ii++) {
					eee.innerHTML += `
					<div class='other_single_newss' >
						<img src='${data[5].news.politics[ii].img}' class='other_single_img' />
						<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.politics[ii].heading}</h3> 
					</div>`;   
					let other_single_newss = document.querySelectorAll('.other_single_newss');
					other_single_newss.forEach(el => {
						el.addEventListener('click', ele => {
							let other_news = ele.target.dataset.newsother;
							main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[other_news].heading}</h2>
							<img src="${data[5].news.politics[other_news].img}" id='main_single_news_img'>
							<p id='main_single_news_p'>${data[5].news.politics[other_news].news}
							</p>
							<span class='likes'>
								<i class="far fa-thumbs-up"></i>
								<span class='like'>${data[5].news.politics[other_news].likes}</span>
								<i class="far fa-thumbs-down"></i>
						 	<span class='unlike'>${data[5].news.politics[other_news].unlikes}</span>
							</span>
							<span class='date_other'>12. 02. 2020</span>
							<span class='comments'>
								<i class="far fa-comment"></i>
								<span class='comments_s'>${data[5].news.politics[other_news].comments}</span>
								</span>`;
						})
					})	
				}		
			})
	}

	if(wind_loc_z == 'pol_second') {
			main_single_h1.innerHTML = 'Politics';
			main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[2].heading}</h2>
			<img src="${data[5].news.politics[2].img}" id='main_single_news_img'>
			<p id='main_single_news_p'>${data[5].news.politics[2].news}
			</p>
			<span class='likes'>
				<i class="far fa-thumbs-up"></i>
				<span class='like'>${data[5].news.politics[2].likes}</span>
				<i class="far fa-thumbs-down"></i>
				<span class='unlike'>${data[5].news.politics[2].unlikes}</span>
			</span>
			<span class='date_other'>12. 02. 2020</span>
			<span class='comments'>
				<i class="far fa-comment"></i>
				<span class='comments_s'>${data[5].news.politics[2].comments}</span>
				</span>`;
			
			other_single_news.forEach(eee => {
				for(ii=0; ii<=single_pol_arr.length; ii++) {
					eee.innerHTML += `
					<div class='other_single_newss' >
						<img src='${data[5].news.politics[ii].img}' class='other_single_img' />
						<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.politics[ii].heading}</h3> 
					</div>`;   
					let other_single_newss = document.querySelectorAll('.other_single_newss');
					other_single_newss.forEach(el => {
						el.addEventListener('click', ele => {
						let other_news = ele.target.dataset.newsother;
						main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[other_news].heading}</h2>
						<img src="${data[5].news.politics[other_news].img}" id='main_single_news_img'>
						<p id='main_single_news_p'>${data[5].news.politics[other_news].news}
						</p>
						<span class='likes'>
							<i class="far fa-thumbs-up"></i>
							<span class='like'>${data[5].news.politics[other_news].likes}</span>
							<i class="far fa-thumbs-down"></i>
							<span class='unlike'>${data[5].news.politics[other_news].unlikes}</span>
							</span>
							<span class='date_other'>12. 02. 2020</span>
							<span class='comments'>
							<i class="far fa-comment"></i>
							<span class='comments_s'>${data[5].news.politics[other_news].comments}</span>
							</span>`;
							})
					})	
				}		
			})
	}

	if(wind_loc_z == 'pol_third') {
		main_single_h1.innerHTML = 'Politics';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[3].heading}</h2>
		<img src="${data[5].news.politics[3].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.politics[3].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.politics[3].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.politics[3].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.politics[3].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_pol_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.politics[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.politics[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[other_news].heading}</h2>
					<img src="${data[5].news.politics[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.politics[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.politics[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.politics[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.politics[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}

	if(wind_loc_z == 'pol_fourth') {
		main_single_h1.innerHTML = 'Politics';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[4].heading}</h2>
		<img src="${data[5].news.politics[4].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.politics[4].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.politics[4].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.politics[4].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.politics[4].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_pol_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.politics[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.politics[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.politics[other_news].heading}</h2>
					<img src="${data[5].news.politics[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.politics[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.politics[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.politics[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.politics[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}

	//sports

	if(wind_loc_z == 'sports_first') {
		main_single_h1.innerHTML = 'Sports';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.sports[0].heading}</h2>
		<img src="${data[5].news.sports[0].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.sports[0].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.sports[0].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.sports[0].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.sports[0].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_sports_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.sports[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.sports[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.sports[other_news].heading}</h2>
					<img src="${data[5].news.sports[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.sports[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.sports[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.sports[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.sports[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}

	if(wind_loc_z == 'sports_second') {
		main_single_h1.innerHTML = 'Sports';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.sports[1].heading}</h2>
		<img src="${data[5].news.sports[1].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.sports[1].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.sports[1].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.sports[1].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.sports[1].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_sports_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.sports[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.sports[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.sports[other_news].heading}</h2>
					<img src="${data[5].news.sports[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.sports[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.sports[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.sports[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.sports[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}

	if(wind_loc_z == 'sports_third') {
		main_single_h1.innerHTML = 'Sports';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.sports[2].heading}</h2>
		<img src="${data[5].news.sports[2].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.sports[2].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.sports[2].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.sports[2].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.sports[2].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_sports_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.sports[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.sports[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.sports[other_news].heading}</h2>
					<img src="${data[5].news.sports[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.sports[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.sports[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.sports[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.sports[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}	

	if(wind_loc_z == 'sports_fourth') {
		main_single_h1.innerHTML = 'Sports';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.sports[3].heading}</h2>
		<img src="${data[5].news.sports[3].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.sports[3].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.sports[3].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.sports[3].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.sports[3].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_sports_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.sports[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.sports[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.sports[other_news].heading}</h2>
					<img src="${data[5].news.sports[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.sports[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.sports[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.sports[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.sports[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}

	//music
	
	if(wind_loc_z == 'music_first') {
		main_single_h1.innerHTML = 'Music';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.music[0].heading}</h2>
		<img src="${data[5].news.music[0].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.music[0].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.music[0].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.music[0].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.music[0].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_music_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.music[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.music[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.music[other_news].heading}</h2>
					<img src="${data[5].news.music[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.music[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.music[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.music[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.music[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}
	
	if(wind_loc_z == 'music_second') {
		main_single_h1.innerHTML = 'Music';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.music[1].heading}</h2>
		<img src="${data[5].news.music[1].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.music[1].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.music[1].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.music[1].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.music[1].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_music_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.music[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.music[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.music[other_news].heading}</h2>
					<img src="${data[5].news.music[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.music[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.music[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.music[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.music[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}
		
	if(wind_loc_z == 'music_third') {
		main_single_h1.innerHTML = 'Music';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.music[2].heading}</h2>
		<img src="${data[5].news.music[2].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.music[2].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.music[2].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.music[2].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.music[2].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_music_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.music[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.music[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.music[other_news].heading}</h2>
					<img src="${data[5].news.music[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.music[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.music[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.music[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.music[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}
		
	if(wind_loc_z == 'music_fourth') {
		main_single_h1.innerHTML = 'Music';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.music[3].heading}</h2>
		<img src="${data[5].news.music[3].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.music[3].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.music[3].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.music[3].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.music[3].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_music_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.music[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.music[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.music[other_news].heading}</h2>
					<img src="${data[5].news.music[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.music[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.music[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.music[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.music[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}

	if(wind_loc_z == 'music_fifth') {
		main_single_h1.innerHTML = 'Music';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.music[4].heading}</h2>
		<img src="${data[5].news.music[4].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.music[4].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.music[4].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.music[4].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.music[4].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_music_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.music[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.music[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.music[other_news].heading}</h2>
					<img src="${data[5].news.music[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.music[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.music[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.music[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.music[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}
		
	//culture
	
	if(wind_loc_z == 'culture_main') {
		main_single_h1.innerHTML = 'Culture';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.culture[0].heading}</h2>
		<img src="${data[5].news.culture[0].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.culture[0].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.culture[0].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.culture[0].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.culture[0].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_culture_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.culture[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.culture[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.culture[other_news].heading}</h2>
					<img src="${data[5].news.culture[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.culture[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.culture[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.culture[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.culture[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}
	
	if(wind_loc_z == 'culture_first') {
		main_single_h1.innerHTML = 'Culture';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.culture[1].heading}</h2>
		<img src="${data[5].news.culture[1].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.culture[1].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.culture[1].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.culture[1].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.culture[1].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_culture_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.culture[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.culture[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.culture[other_news].heading}</h2>
					<img src="${data[5].news.culture[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.culture[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.culture[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.culture[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.culture[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}
	
		
	if(wind_loc_z == 'culture_second') {
		main_single_h1.innerHTML = 'Culture';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.culture[2].heading}</h2>
		<img src="${data[5].news.culture[2].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.culture[2].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.culture[2].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.culture[2].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.culture[2].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_culture_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.culture[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.culture[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.culture[other_news].heading}</h2>
					<img src="${data[5].news.culture[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.culture[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.culture[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.culture[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.culture[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}
	
		
	if(wind_loc_z == 'culture_third') {
		main_single_h1.innerHTML = 'Culture';
		main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.culture[3].heading}</h2>
		<img src="${data[5].news.culture[3].img}" id='main_single_news_img'>
		<p id='main_single_news_p'>${data[5].news.culture[3].news}
		</p>
		<span class='likes'>
			<i class="far fa-thumbs-up"></i>
			<span class='like'>${data[5].news.culture[3].likes}</span>
			<i class="far fa-thumbs-down"></i>
			<span class='unlike'>${data[5].news.culture[3].unlikes}</span>
		</span>
		<span class='date_other'>12. 02. 2020</span>
		<span class='comments'>
			<i class="far fa-comment"></i>
			<span class='comments_s'>${data[5].news.culture[3].comments}</span>
			</span>`;
		
		other_single_news.forEach(eee => {
			for(ii=0; ii<=single_culture_arr.length; ii++) {
				eee.innerHTML += `
				<div class='other_single_newss' >
					<img src='${data[5].news.culture[ii].img}' class='other_single_img' />
					<h3 class='other_single_h3' data-newsother='${ii}'>${data[5].news.culture[ii].heading}</h3> 
				</div>`;   
				let other_single_newss = document.querySelectorAll('.other_single_newss');
				other_single_newss.forEach(el => {
					el.addEventListener('click', ele => {
					let other_news = ele.target.dataset.newsother;
					main_single_news.innerHTML = `<h2 id='main_single_news_h2'>${data[5].news.culture[other_news].heading}</h2>
					<img src="${data[5].news.culture[other_news].img}" id='main_single_news_img'>
					<p id='main_single_news_p'>${data[5].news.culture[other_news].news}
					</p>
					<span class='likes'>
						<i class="far fa-thumbs-up"></i>
						<span class='like'>${data[5].news.culture[other_news].likes}</span>
						<i class="far fa-thumbs-down"></i>
						<span class='unlike'>${data[5].news.culture[other_news].unlikes}</span>
						</span>
						<span class='date_other'>12. 02. 2020</span>
						<span class='comments'>
						<i class="far fa-comment"></i>
						<span class='comments_s'>${data[5].news.culture[other_news].comments}</span>
						</span>`;
						})
				})	
			}		
		})
	}
});