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

type Callback = (?Error) => void;
type Subtitle = {
  +language?: string,
  +url: string,
  +name?: string,
};
type Media = {
  +url: string,
  +subtitles: ?Array<Subtitle>,
};

type PlayerMedia = {
  +currentSession: {
    +currentTime: number,
    +media: ?{
      +duration: number,
    },
  },
  +[key: string]: mixed,
  ...
};
type Player = {
  +[key: string]: mixed,
  +media: PlayerMedia,
  ...
};
type Status = {
  +currentTime: number,
};
type Device = {
  +play: (media: Media, cb: Callback) => void,
  +pause: Callback => void,
  +resume: Callback => void,
  +seek: (seconds: number, Callback) => void,
  +stop: Callback => void,
  +player: Player,
  +getStatus: ((?Error, ?Status) => void) => void,
};

class CastController {
  #privateIP: string;
  device: Device;
  media: PlayerMedia;
  totalPlayTime: number;

  constructor() {
    this.getPrivateIp();
    const client = new ChromecastAPI();
    client.on('device', device => {
      this.device = device;
    });
  }

  async getPrivateIp() {
    const privateIP = await getPrivateIp();
    this.#privateIP = privateIP;
  }

  startCast = ({ movie, subtitle }: Args) => {
    return new Promise<void>((resolve, reject) => {
      let subtitles = null;
      if (subtitle != null) {
        subtitles = [];
        subtitles.push({
          language: 'en-US',
          url: `http://${this.#privateIP}:5005/stream?path=${encodeURIComponent(subtitle)}`,
          name: 'English',
        });
      }
      const media = {
        url: `http://${this.#privateIP}:5005/stream?path=${encodeURIComponent(movie)}`,
        subtitles,
      };
      this.device.play(media, err => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Playing in your chromecast');
          resolve();
        } else {
          reject(err);
        }
      });
    });
  };

  getCurrentTime = () => {
    return new Promise<number>((resolve, reject) => {
      this.device.getStatus((err, status) => {
        if (err) {
          reject(err);
        } else {
          resolve(status?.currentTime ?? 0);
        }
      });
    });
  };

  getTotalPlayTime = () => {
    return this.device.player.media.currentSession.media?.duration;
  };

  stopCast = () => {
    return new Promise<void>((resolve, reject) => {
      this.device.stop(error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  seek = (seconds: number) =>
    new Promise<void>((resolve, reject) => {
      this.device.seek(seconds, error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

  fastForward = () => this.seek(10);

  fastRewind = () => this.seek(-10);

  pause = () =>
    new Promise<void>((resolve, reject) => {
      this.device.pause(err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

  resume = () =>
    new Promise<void>((resolve, reject) => {
      this.device.resume(err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
}

const castController = new CastController();

export default castController;
