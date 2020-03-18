// @flow

import ChromecastAPI from 'chromecast-api';
import network from 'network';

const getPrivateIp = () =>
  new Promise<string>((resolve, reject) => {
    network.get_private_ip((err, ip) => {
      if (err) {
        reject(err);
      } else {
        resolve(ip);
      }
    });
  });

type Args = {
  +movie: string,
  +subtitle: ?string,
};
const startCast = async ({ movie, subtitle }: Args) => {
  const privateIP = await getPrivateIp();
  const client = new ChromecastAPI();
  const subtitles = [];
  if (subtitle != null) {
    subtitles.push({
      language: 'en-US',
      url: `http://${privateIP}:5005/stream?path=${encodeURIComponent(subtitle)}`,
      name: 'English',
    });
  }
  client.on('device', function(device) {
    // get local ip address
    const media = {
      url: `http://${privateIP}:5005/stream?path=${encodeURIComponent(movie)}`,
      subtitles,
    };

    device.play(media, function(err) {
      if (!err) {
        // eslint-disable-next-line no-console
        console.log('Playing in your chromecast');
      }
    });
  });
};

export default startCast;
