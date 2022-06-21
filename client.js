window.addEventListener("scroll", function(){


	let scrollShow = document.getElementById("back_to_top");

	scrollShow.classList.toggle("active", window.scrollY > 30);


});	

window.addEventListener("scroll", content2);
content2();
function content2(){

	let active2 = document.querySelector(".col-6");
	active2.classList.toggle("active2", window.scrollY> 500);


	let active3 = document.querySelector(".Twojoints-mafia");
	active3.classList.toggle("active3", window.scrollY> 500);
	active3.style.transition = "2s";
}