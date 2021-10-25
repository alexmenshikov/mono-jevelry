$(document).ready(() => {
	// === Отмечаем карточку товара, сердечком ===
	$(".goods__card__favourite").click((e) => {
		let currentElement = $(e.target);
		// Отменяем событие перехода по ссылке
		e.preventDefault();
		if (currentElement.hasClass("active")) {
			currentElement.removeClass("active");
		} else {
			currentElement.addClass("active");
		}
	});

	// ======
	// const selectSingle = document.querySelector(".__select");
	// const selectSingle_title = selectSingle.querySelector(".__select__title");
	// const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

	// // Toggle menu
	// selectSingle_title.addEventListener("click", () => {
	// 	if ("active" === selectSingle.getAttribute("data-state")) {
	// 		selectSingle.setAttribute("data-state", "");
	// 	} else {
	// 		selectSingle.setAttribute("data-state", "active");
	// 	}
	// });

	// // Close when click to option
	// for (let i = 0; i < selectSingle_labels.length; i++) {
	// 	selectSingle_labels[i].addEventListener("click", (evt) => {
	// 		selectSingle_title.textContent = evt.target.textContent;
	// 		selectSingle.setAttribute("data-state", "");
	// 	});
	// }

	// // Reset title
	// const reset = document.querySelector(".reset");
	// reset.addEventListener("click", () => {
	// 	selectSingle_title.textContent =
	// 		selectSingle_title.getAttribute("data-default");
	// });
	// ======

	// === Изменяем язык ===
	let arrow = $(".top__language-arrow");
	let top_language = $(".top__language-select");
	let flag_language = false;
	$(".top__language").click(() => {
		if (!flag_language) {
			arrow.addClass("arrow__active");
			top_language.show();
			if ($(window).width() >= "1024") {
				top_language.removeClass("select-close");
				top_language.addClass("select-open");
			}
			flag_language = true;
		} else {
			arrow.removeClass("arrow__active");
			if ($(window).width() >= "1024") {
				top_language.removeClass("select-open");
				top_language.addClass("select-close");
				top_language.hide(200);
			} else {
				top_language.hide();
			}
			flag_language = false;
		}
	});

	// === открываем меню каталог ===
	let menu_catalog = $(".menu-catalog");
	let menu_catalog_close = $(".menu-catalog__close");
	let body = $("body");
	let btn_menu = $(".top__btn");

	menu_catalog.hide();

	btn_menu.on("click", () => {
		menu_catalog.slideDown(500);
		body.css("overflow", "hidden");
	});

	menu_catalog_close.on("click", () => {
		menu_catalog.slideUp(500);
		body.css("overflow", "visible");
	});

	// let menu_catalog = $(".menu-catalog");
	// let body = $("body");
	// $(".top__btn").click(() => {
	// 	menu_catalog.show();
	// 	menu_catalog.removeClass("menu-close");
	// 	menu_catalog.addClass("menu-open");
	// 	body.css("overflow", "hidden");
	// });
	//
	// $(".menu-catalog__close").click(() => {
	// 	menu_catalog.removeClass("menu-open");
	// 	menu_catalog.addClass("menu-close");
	// 	menu_catalog.slideUp(500);
	// 	body.css("overflow", "visible");
	// });

	// === Добавление в корзину ===
	$(".goods__card__bag").click(() => {
		let count = $(".count").text();
		count++;
		$(".count").text(count);
	});

	// === slider cards ===
	$(".goods__cards").slick({
		infinite: false,
		arrow: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
	});

	// === Открыть модальное окно с видео ===
	// let popap = $(".info-blog__popap");

	// $(".info-blog__bottom-play").click(() => {
	// 	popap.css("display", "flex");
	// 	$("body").css("overflow", "hidden");
	// });

	// $(".info-blog__popap-close").click(() => {
	// 	popap.css("display", "none");
	// 	$("body").css("overflow", "visible");
	// });

	$(".popup-youtube").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
});
