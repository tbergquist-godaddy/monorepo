// @flow

import { app, BrowserWindow } from 'electron';
import { fork } from 'child_process';
import path from 'path';

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  if (__DEV__) {
    win.loadURL('http://127.0.0.1:9000');
  } else {
    win.loadFile('dist/index.html');
  }
}
app.on('ready', createWindow);

fork(path.join(__dirname, 'server', 'index.js'));
