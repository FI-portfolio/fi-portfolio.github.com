'use strict';

{
    const images = [
        'img/pic00.png',
        'img/pic01.png',
        'img/pic02.png',
        'img/pic03.png',
        'img/pic04.png',
        'img/pic05.png',
        'img/pic06.png',
        'img/pic07.png',
    ];
    let currentidx = 0;

    const mainImage = document.getElementById('main');
    mainImage.src = images[currentidx];

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        
        const li = document.createElement('li');
        if(index === currentidx){
            li.classList.add('current');
        }

        li.addEventListener('click', () => {
            mainImage.src = image;
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentidx].classList.remove('current');
            currentidx = index;
            thumbnails[currentidx].classList.add('current');
        })

        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });

    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        let target = currentidx + 1;
        if(target === images.length){
            target = 0;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
        let target = currentidx - 1;
        if(target < 0){
            target = images.length - 1;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    let timeoutId;

    function playSlideshow(){
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        }, 1000);
    }

    let isPlaying = false;

    const play = document.getElementById('play');
    play.addEventListener('click', () => {
        if(isPlaying === false){
            playSlideshow();
            play.textContent = 'pause';
        }else{
            clearTimeout(timeoutId);
            play.textContent = 'play';
        }
        isPlaying = !isPlaying;
    });
}