"use strict";

const fsP = require("fs/promises");
const axios = require("axios");

const argv = process.argv[2];

async function cat(path){
  try{
    let contents = await fsP.readFile(path, "utf8");
    console.log("contents", contents);
  } catch(err){
    console.log(err);
    process.exit(1);
  }
}

async function webCat(path){
  try{
    const data = await axios({url: path});
    console.log("data ", data);
  }catch(err){
    console.log("this error: ", err);
    process.exit(1);
  }
}
// change argv to path
function choose(path){
  // if(path.includes(".txt")){
  //   cat(path);
  // }else if(path.startsWith("http")){
  //   webCat(path);
  // }

  path.startsWith("http") ? webCat(path): cat(path);
}

choose(argv);