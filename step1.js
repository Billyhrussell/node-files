"use strict";

const fsP = require("fs/promises");

const argv = process.argv[2];

async function cat(path){
  try{
    let contents = await fsP.readFile(path, "utf8");
    console.log("contents", contents);
  } catch(err){
    console.log("error reading path", err);
    process.exit(1);
  }
}

cat(argv);

