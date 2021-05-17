#!/usr/bin/env node

const filter = require("./src/filter");
const count = require("./src/count");
const printJson = require("./src/index");

const paramErrorMsg = (param, argType) =>
  `Incorrect param for this argument. Please try with '${param}=[${argType}]'`;

const errorMessage = () =>
  `Incorrect argument. Please check possible commands on the Readme.`;

/**
 * MAIN
 */

// Get arguments
let args = process.argv[2];

// --filter
if (args && args.includes("--filter")) {
  const param = args.split("=")[1];

  param
    ? printJson(filter(param))
    : console.log(paramErrorMsg("--filter", "text"));
}

// --count
else if (args && args.includes("--count")) {
  printJson(count());
}

// Otherwise, show a default message
else {
  console.log(errorMessage());
}
