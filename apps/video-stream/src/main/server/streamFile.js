// @flow

import fs from 'fs';
import type { $Request, $Response } from 'express';
import path from 'path';
import util from 'util';
import srt2vtt from 'srt2vtt';

const getStream = (path: string, options?: { ... }) => fs.createReadStream(path, options ?? {});
const convertToVtt = util.promisify(srt2vtt);

export default async function streamMovie(req: $Request, res: $Response): Promise<$Response> {
  const filePath = req.query.path;
  if (Array.isArray(filePath)) {
    return res.sendStatus(400).send({ message: 'Expected path to be a string' });
  }
  const fileType = path.extname(filePath);
  if (fileType === '.vtt') {
    return res.sendFile(filePath);
  } else if (fileType === '.srt') {
    const srt = fs.readFileSync(filePath);
    const vttData = await convertToVtt(srt);
    const vttPath = filePath.replace('.srt', '.vtt');
    fs.writeFileSync(vttPath, vttData);
    return res.sendFile(vttPath);
  }

  const stat = fs.statSync(filePath);
  const total = stat.size;
  const {
    headers: { range },
  } = req;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const partialstart = parts[0];
    const partialend = parts[1];

    const start = parseInt(partialstart, 10);
    const end = partialend ? parseInt(partialend, 10) : total - 1;
    const chunksize = end - start + 1;

    const movieStream = fs.createReadStream(filePath, { start, end });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize.toString(),
      'Content-Type': 'video/mp4',
    });
    return movieStream.pipe(res);
  }
  res.writeHead(200, {
    'Content-Length': total.toString(),
    'Content-Type': 'video/mp4',
  });
  const movieStreamAll = getStream(filePath);
  return movieStreamAll.pipe(res);
}
