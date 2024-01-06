const btns = document.querySelectorAll('.main_tab ul li');
const boxes = document.querySelectorAll('.main_box');
const main = document.querySelector('.content Menu');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        e.preventDefault();
		active(btns, i);
		active(boxes, i);
    });
}
function active(list, index) {
	for (let el of list) {
		el.classList.remove('on');
	}
	list[index].classList.add('on');
}


///수정할 것