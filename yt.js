(function () {
	'use strict'
	// Lampa.Storage.set('webos_subs_params','{}');

	const PROXY_URL = 'http://109.107.190.231:8118' // Ваш прокси

	function openYoutube() {
		let url = 'https://www.youtube.com'
		let proxiedUrl = `${PROXY_URL}/${encodeURIComponent(url)}`

		// Открываем YouTube через WebView Lampa или в браузере
		Lampa.Platform.open(proxiedUrl)
	}

	function addYoutubeButton() {
		let menu = Lampa.Start.menu() // Получаем главное меню

		let youtubeButton = $(
			'<li class="menu__item selector focus" data-action="youtube">'
		)
			.append(
				'<div class="menu__ico"><img src="https://www.youtube.com/s/desktop/9b235b1d/img/favicon.ico"></div>'
			)
			.append('<div class="menu__text">YouTube</div>')

		youtubeButton.on('hover:enter', function () {
			openYoutube()
		})

		menu.append(youtubeButton) // Добавляем кнопку в меню
	}

	function init() {
		console.log('YouTube Proxy Extension загружен!')
		addYoutubeButton()
	}

	Lampa.Listener.follow('app', function (e) {
		if (e.type === 'ready') init()
	})
})()
