// Регистрируем расширение
Lampa.Extensions.register('youtube_button', function() {
    // Функция для создания кнопки
    function createYouTubeButton() {
        // Ищем элемент, куда можно добавить кнопку (например, панель навигации)
        const navigation = document.querySelector('.navigation'); // Пример элемента навигации Lampa

        if (navigation) {
            // Создаем кнопку
            const button = document.createElement('div');
            button.innerHTML = 'YouTube'; // Текст на кнопке
            button.style.marginLeft = '20px'; // Отступ слева
            button.style.padding = '10px 20px'; // Отступы внутри кнопки
            button.style.backgroundColor = '#ff0000'; // Красный цвет, как у YouTube
            button.style.color = '#ffffff'; // Белый текст
            button.style.borderRadius = '5px'; // Закругленные углы
            button.style.cursor = 'pointer'; // Курсор в виде указателя

            // Добавляем обработчик события для кнопки
            button.addEventListener('click', function() {
                // Открываем YouTube в новом окне или вкладке
                window.open('https://www.youtube.com', '_blank');
            });

            // Добавляем кнопку в панель навигации
            navigation.appendChild(button);
        } else {
            console.error('Не удалось найти элемент навигации для добавления кнопки YouTube.');
        }
    }

    // Вызываем функцию создания кнопки после загрузки страницы
    window.addEventListener('load', createYouTubeButton);
});
