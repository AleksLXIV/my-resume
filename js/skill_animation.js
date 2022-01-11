window.addEventListener('scroll', function() {
	let elem = document.querySelector('[class="skill__img"]');
	if(pageYOffset >= 310){
		for(let i = 0; i < elem.children.length; i++){
			elem.children[i].classList.add("transform");
		} 
	} 
});



 