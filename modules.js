let more_arrow_down = () => {
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
}


module.exports = more_arrow_down;