import fs from "fs";

const matches = fs
  .readFileSync("football.csv", { encoding: "utf8" })
  .split("\n")
  .map((match) => match.split(","));

console.log(matches);
