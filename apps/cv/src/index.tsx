import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs';
import path from 'path';

import App from './app';

const distPath = path.resolve(__dirname, '../dist');
const htmlDist = path.resolve(distPath, 'index.html');
const htmlSrc = path.join(__dirname, 'index.html');
const html = fs.readFileSync(htmlSrc, 'utf8');

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}
fs.writeFileSync(htmlDist, html.replace('{% body %}', renderToStaticMarkup(<App />)));
