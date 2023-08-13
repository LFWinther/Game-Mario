const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const touchscreen = document.querySelector('.touchscreen');
const player = document.querySelector('.player');
const timer = document.querySelector('.timer');
const clond = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
        touchscreen.removeList.add('jump');
    }, 1000);
}

const press = () => {
    jump()
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', "");

    if (pipePosition <= 120 && pipePosition > 10 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clond.style.animation = 'none'

        mario.src = '../images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        clearInterval(loop);
        checkEndGame();
    }
}, 10);

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTimer = +timer.innerHTML;
        timer.innerHTML = currentTimer + 1
    }, 2000)
}

window.onload = () => {
    player.innerHTML = localStorage.getItem('player');
    startTimer();
}

const checkEndGame = () => {
    if (pipe.style.animation = 'none') {
        setTimeout(() => {
            clearInterval(this.loop);
            swal({
                title: "Game Over",
                text: "Deseja tentar mais uma vez?",
                icon: "../images/game-over.png",
                buttons: true,
                // dangerMode: true,
              })    
              .then((willDelete) => {
                if (willDelete) {
                    window.location = '../pages/game.html';
                } else {
                    window.location = '../index.html';
                }
              });
        }, 200)
    }
}

document.addEventListener('keydown', jump)