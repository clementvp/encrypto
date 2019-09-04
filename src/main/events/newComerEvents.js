import { ipcMain } from "electron";
import { writeUtils, readUtils } from "../services/storage";

ipcMain.on("initVault", (event, hash) => {
  const utils = readUtils();
  utils.hash = hash;
  utils.activate = true;
  writeUtils(utils);
  event.reply("initVaultOk");
});
