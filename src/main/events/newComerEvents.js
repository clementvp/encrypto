import { ipcMain } from "electron";
import { writeUtils, readUtils } from "../services/storage";
import bcrypt from "bcryptjs";
ipcMain.on("initVault", (event, masterPassword) => {
  const utils = readUtils();
  const hash = bcrypt.hashSync(masterPassword, 10);
  utils.hash = hash;
  utils.activate = true;
  writeUtils(utils);
  event.reply("initVaultOk");
});
