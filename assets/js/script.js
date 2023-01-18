//FAQ

this.addEventListener("DOMContentLoaded", () => {
	const questions = document.querySelectorAll(".question_answer__accordion");
	questions.forEach((question) =>
		question.addEventListener("click", () => {
			if (question.parentNode.classList.contains("active")) {
				question.parentNode.classList.toggle("active");
			} else {
				questions.forEach((question) =>
					question.parentNode.classList.remove("active")
				);
				question.parentNode.classList.add("active");
			}
		})
	);
});

/* mobile nav */

const burgerButton = document.querySelector(".burger-btn");
const closeButton = document.querySelector(".close-active");
const mobNav = document.querySelector(".mobile-nav");
const openButton = document.querySelector(".open");

burgerButton.onclick = () => {
	burgerButton.classList.toggle("active");
	mobNav.classList.toggle("show");
	closeButton.classList.toggle("close-active");
	openButton.classList.toggle("open");
};

mobNav.onclick = () => {
	mobNav.classList.toggle("show");
	burgerButton.classList.toggle("active");
	closeButton.classList.toggle("close-active");
};


//Slider 

const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const prevButtonMob = document.getElementById("slide-arrow-prev-mobile");
const nextButtonMob = document.getElementById("slide-arrow-next-mobile");

const slidesContainer = document.querySelector(".communitySlider");
const slide = document.querySelector(".CommunityCardSlider");



nextButton.addEventListener("click", () => {

	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft -= slideWidth;
});

nextButtonMob.addEventListener("click", () => {

	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft += slideWidth;
});

prevButtonMob.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft -= slideWidth;
});