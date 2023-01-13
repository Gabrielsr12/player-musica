let musics = [
    {title:'old habits', artist:'aimless', src:'./src/assets/msc/aimless - old habits.mp3', img:'./src/assets/img/63c0e54408cb1.jpg'},
    {title:'gradient', artist:'akryl', src:'./src/assets/msc/Akryl - Gradient.mp3', img:'./src/assets/img/63c0e5686f435.jpg'},
    {title:'jazz bandicoot', artist:'akryl', src:'./src/assets/msc/Akryl - Jazz Bandicoot.mp3', img:'./src/assets/img/63c0e5798fd7a.jpg'},
    {title:'mocha', artist:'akryl', src:'./src/assets/msc/Akryl - Mocha.mp3', img:'./src/assets/img/63c0e5830e09f.jpg'},
    {title:'typical day at the office', artist:'akryl', src:'./src/assets/msc/Akryl - Typical Day At The Office.mp3', img:'./src/assets/img/63c0e58cde753.jpg'},
    {title:'august', artist:'ameba', src:'./src/assets/msc/Ameba - August.mp3', img:'./src/assets/img/63c0e59726aff.jpg'}
]; //adicionar musicas

let music = document.querySelector('audio');
let indexMusic = 0;

let musicTime = document.querySelector('.time-finish');
let image = document.querySelector('.pic');
let musicName = document.querySelector('.name-description h3');
let artistName = document.querySelector('.name-description p');

renderMusic(indexMusic);

// Eventos
document.querySelector('.play').addEventListener('click', musicPlay);

document.querySelector('.pause').addEventListener('click', musicPause);

music.addEventListener('timeupdate', barUpdate);

document.querySelector('.prev').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) { 
        indexMusic = 5; //tem que aumentar de acordo com a quantidade de musicas (sempre começa no zero).
    }
    renderMusic(indexMusic);
});

document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 5){ //tem que aumentar de acordo com a quantidade de musicas (sempre começa no zero).
        indexMusic = 0;
    }
    renderMusic(indexMusic);
});

// Funções
function renderMusic(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = musics[index].title;
        artistName.textContent = musics[index].artist;
        image.src = musics[index].img;
        musicTime.textContent = secformin(Math.floor(music.duration));
    });
}

function musicPlay(){
    music.play();
    document.querySelector('.pause').style.display = 'block';//VERIFICAR
    document.querySelector('.play').style.display = 'none';
}

function musicPause(){
    music.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';//VERIFICAR
}

function barUpdate(){
    let barr = document.querySelector('progress');
    barr.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let elapsedTime = document.querySelector('.time-begin');
    elapsedTime.textContent = secformin(Math.floor(music.currentTime));
}

function secformin(seconds){
    let minutesCamp = Math.floor(seconds / 60);
    let secondsCamp = seconds % 60;
    if (secondsCamp < 10){
        secondsCamp = '0' + secondsCamp;
    }

    return minutesCamp+':'+secondsCamp;
}