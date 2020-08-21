import fs from "fs";
import got from "got";

(async () => {
  const { body } = await got("https://jsonplaceholder.typicode.com/todos");
  const writeResults = await fs.writeFile("./new.json", contents);

  console.log("todos", body);

  const contents = await fs.readFile;
  "./users.json", "utf-8";
})(); // we use IIFE  because we nedd it async and immedialtely invoked
