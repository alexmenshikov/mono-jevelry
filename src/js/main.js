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

	// === Изменяем язык ===
	let arrow = $(".top__language-arrow");
	let top_language = $(".top__language-select");
	let flag_language = false;
	$(".top__language").click(() => {
		if (!flag_language) {
			arrow.addClass("arrow__active");
			top_language.show();
			top_language.removeClass("select-close");
			top_language.addClass("select-open");
			flag_language = true;
		} else {
			arrow.removeClass("arrow__active");
			top_language.removeClass("select-open");
			top_language.addClass("select-close");
			top_language.hide(200);
			flag_language = false;
		}
	});

	// === открываем меню каталог ===
	let menu_catalog = $(".menu-catalog");
	let body = $("body");
	$(".top__btn").click(() => {
		menu_catalog.show();
		menu_catalog.removeClass("menu-close");
		menu_catalog.addClass("menu-open");
		body.css("overflow", "hidden");
	});

	$(".menu-catalog__close").click(() => {
		menu_catalog.removeClass("menu-open");
		menu_catalog.addClass("menu-close");
		menu_catalog.slideUp(500);
		body.css("overflow", "visible");
	});

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
