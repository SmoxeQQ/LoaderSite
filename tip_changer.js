var tips_array = ["Присоединяйтесь к нашему сообществу TRIZEN!", "Вискурсу - респект", "Низкий пинг - подозрительно |)"],
    tip_index = 0,
    tip_interval = 10000;
(function changeTip() {
    tip_index = (tip_index + 1) % tips_array.length;

    document.getElementById('tip').innerHTML = `Тип: ${tips_array[tip_index]}`;
    setTimeout(changeTip, tip_interval);
})();