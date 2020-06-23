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


//mini section DIV

let section_btn = document.querySelector('#sections');
let section_mini_div = document.querySelector('#section_mini_div');
let section_mini_class = document.querySelectorAll('.section_mini_class');
let section_mini_table = document.querySelectorAll('.section_mini_table');
let newest_main_div = document.querySelector('#newest_main_div');
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

newest_main_div.addEventListener('click', () => {
	section_mini_div.style.marginLeft = -12 + 'rem';
	newest_main_div.style.margin = '0px auto';
	x_sec = 1;
	section_mini_table.forEach(e => {
		e.style.display = 'none';
	});
});

let x_sec = 1;

section_btn.addEventListener('click', () => {
	if(x_sec == 1) {
		section_mini_div.style.marginLeft = 0;
		newest_main_div.style.marginLeft = 12 + 'rem';
		x_sec = x_sec + 1;
	}
	else if(x_sec == 2){
		section_mini_div.style.marginLeft = -12 + 'rem';
		newest_main_div.style.margin = '0px auto';

		x_sec = 1;
		section_mini_table.forEach(e => {
			e.style.display = 'none';
		});
	}
});