var img_array = [1, 2, 3, 4, 5],
    img_index = 0,
    img_interval = 16000;
(function changeBg() {
    img_index = (img_index + 1) % img_array.length;

    document.getElementById('fullPage').style.backgroundImage = `url('images/img${img_array[img_index]}.jpg')`;
    setTimeout(changeBg, img_interval);
})();