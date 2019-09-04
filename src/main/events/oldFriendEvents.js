import { ipcMain } from "electron";
import { readUtils, readData } from "../services/storage";

ipcMain.on("verifyHash", event => {
  const utils = readUtils();
  const hash = utils.hash;
  event.reply("hashResponse", hash);
});

ipcMain.on("getData", event => {
  const data = readData();
  event.reply("dataResponse", data);
});
