// Название расширения
Lampa.Extensions.register('youtube_button', function() {
    // Функция для создания кнопки
    function createYouTubeButton() {
        // Создаем элемент кнопки
        const button = document.createElement('div');
        button.innerHTML = 'YouTube'; // Текст на кнопке
        button.style.position = 'fixed'; // Позиционируем кнопку
        button.style.bottom = '20px'; // Отступ снизу
        button.style.right = '20px'; // Отступ справа
        button.style.backgroundColor = '#ff0000'; // Красный цвет, как у YouTube
        button.style.color = '#ffffff'; // Белый текст
        button.style.padding = '10px 20px'; // Отступы внутри кнопки
        button.style.borderRadius = '5px'; // Закругленные углы
        button.style.cursor = 'pointer'; // Курсор в виде указателя
        button.style.zIndex = '9999'; // Чтобы кнопка была поверх других элементов

        // Добавляем обработчик события для кнопки
        button.addEventListener('click', function() {
            // Открываем YouTube в новом окне или вкладке
            window.open('https://www.youtube.com', '_blank');
        });

        // Добавляем кнопку в тело документа
        document.body.appendChild(button);
    }

    // Вызываем функцию создания кнопки после загрузки страницы
    window.addEventListener('load', createYouTubeButton);
});
