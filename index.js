const { app, BrowserWindow } = require("electron");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 420,
    height: 260,
    webPreferences: {
      preload: path.join(__dirname, "./src/preload.js"),
    },
  });

  win.loadFile("./src/index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
