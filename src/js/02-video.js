import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const ourVideoEl = document.querySelector('#vimeo-player');

const player = new Player(ourVideoEl);

player.on('timeupdate', throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
