// @flow

import ChromecastAPI from 'chromecast-api';

const startCast = () => {
  const client = new ChromecastAPI();

  client.on('device', function(device) {
    const mediaURL =
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4';

    device.play(mediaURL, function(err) {
      if (!err) {
        // eslint-disable-next-line no-console
        console.log('Playing in your chromecast');
      }
    });
  });
};

export default startCast;
