

let toggler = document.querySelector('nav #toggler');
const dropDown = document.querySelector('#forDropDown');
const togglerFirst = document.querySelectorAll('nav #toggler div')[0]
const togglerSecond = document.querySelectorAll('nav #toggler div')[1]
const togglerThird = document.querySelectorAll('nav #toggler div')[2]

let isToggle = false


toggleHandler = () => {
	isToggle = !isToggle
	console.log(isToggle);
	if(isToggle) {
		dropDown.classList.add('slideDown');
		toggler.classList.add('rotateOnToggle')
		togglerFirst.classList.add('topDisappear')
		togglerSecond.classList.add('midTurn')
		togglerThird.classList.add('endTurn')


	} else{
		dropDown.classList.remove('slideDown');
		toggler.classList.remove('rotateOnToggle')
		togglerFirst.classList.remove('topDisappear')
		togglerSecond.classList.remove('midTurn')
		togglerThird.classList.remove('endTurn')
	}
}




toggler.addEventListener('click', toggleHandler)


