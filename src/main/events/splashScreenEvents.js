import { ipcMain } from "electron";
import { readUtils, initDb } from "../services/storage";

ipcMain.on("frontReady", event => {
  if (!readUtils()) {
    initDb();
  }
  const utils = readUtils();
  if (!utils.activate || !utils.hash || !utils.iv || !utils.salt) {
    event.reply("newComer");
  } else {
    event.reply("oldFriend");
  }
});
