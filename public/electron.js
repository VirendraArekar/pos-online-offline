// ./public/electron.js
const path = require('path');

const { app, BrowserWindow } = require('electron');
const sqlite3 = require('sqlite3').verbose();
const isDev = require('electron-is-dev');

// Initialize SQLite database
const db = new sqlite3.Database('../src/Db/pos.db', (err) => {
  if (err) console.error('Database opening error: ', err);
});

// Example function to create a table and insert data
function createTableAndInsert() {
  db.serialize(() => {
      // Create a table
      db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");

      // Insert data
      db.run("INSERT INTO users (name) VALUES (?)", ['John Doe'], function(err) {
          if (err) {
              return console.error(err.message);
          }
          console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
  });
}

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
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bars to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});