import { app, BrowserWindow, Tray, nativeImage } from "electron";
import path from "path";
import "./events/splashScreenEvents";
import "./events/newComerEvents";
import "./events/oldFriendEvents";
const isDevelopment = process.env.NODE_ENV !== "production";
app.on("ready", () => {
  let window = new BrowserWindow({
    show: false,
    width: 1024,
    height: 700,
    title: "Encrypto",
    resizable: false,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadFile(path.join(__dirname, "index.html"));
  }

  window.on("closed", () => {
    window = null;
  });

  window.once("ready-to-show", () => {
    window.show();
  });

  window.on("blur", () => {
    if (!isDevelopment) {
      window.hide();
    }
  });

  const tray = new Tray(
    nativeImage.createFromDataURL(require("./assets/ico.png"))
  );
  tray.on("click", function() {
    window.isVisible() ? window.hide() : window.show();
  });
});

if (!isDevelopment) {
  app.dock.hide();
}
