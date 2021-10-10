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
		// infinite: true,
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
