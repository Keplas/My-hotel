document.getElementById('next').onclick = function () {
    let items = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(items[0]);
};

document.getElementById('prev').onclick = function () {
    let items = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(items[items.length - 1]);
};
