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

const startCast = async (filePath: string) => {
  const privateIP = await getPrivateIp();
  const client = new ChromecastAPI();
  client.on('device', function(device) {
    // get local ip address
    const mediaURL = `http://${privateIP}:5005/stream?path=${filePath}`;

    device.play(mediaURL, function(err) {
      if (!err) {
        // eslint-disable-next-line no-console
        console.log('Playing in your chromecast');
      }
    });
  });
};

export default startCast;
