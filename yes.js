function slidePage() {
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var children1 = page1.children;
    var children2 = page2.children;

    for (var i = 0; i < children1.length; i++) {
        children1[i].classList.add('animate__animated', 'animate__bounceOutLeft');
    }

    page1.addEventListener('animationend', function() {
        page1.style.display = 'none';
        page2.style.display = 'block';
        for (var i = 0; i < children2.length; i++) {
            children2[i].classList.add('animate__animated', 'animate__fadeInRight');
        }
    }, {once: true});
}