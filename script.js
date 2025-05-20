// Функция для открытия ссылки и воспроизведения звука
function openLink(link) {
    // Воспроизводим звук щелчка
    const clickSound = document.getElementById('click-sound');
    clickSound.play();

    // Открываем ссылку в новой вкладке
    window.open(link, '_blank');
}