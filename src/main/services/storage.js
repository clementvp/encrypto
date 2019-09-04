import { app } from "electron";
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const dbPath = app.getPath("userData") + "/mirmidon-db.mirmi";
const adapter = new FileSync(dbPath);

const db = low(adapter);

const initDb = () => {
  db.defaults({
    utils: { activate: false, hash: "", salt: "", iv: "" },
    data: ""
  }).write();
};

const writeData = data => {
  db.get("data")
    .assign(data)
    .write();
};

const readData = () => {
  return db.get("data").value();
};

const readUtils = () => {
  return db.get("utils").value();
};

const writeUtils = utils => {
  db.get("utils")
    .assign(utils)
    .write();
};

export { initDb, writeData, readUtils, readData, writeUtils };
