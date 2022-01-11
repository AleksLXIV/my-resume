function clientW(){
	let elem = document.querySelectorAll(`[id = "none"]`)
	if(window.innerWidth < 1100){
		for(let i of elem){
			i.setAttribute(`href`, "#")
			i.removeAttribute("download")
			console.log(i.getAttribute("href"))
		}
	}
}
clientW()