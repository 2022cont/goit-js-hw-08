import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {

    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    });

});

player.on('loaded', function () {
        if (localStorage.getItem("videoplayer-current-time")) {
            player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
        }
    });

    const onPlay = throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000);

player.on('timeupdate', onPlay);


