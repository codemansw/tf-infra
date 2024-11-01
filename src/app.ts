import dotenv from 'dotenv'; 
dotenv.config();  // Load environment variables from .env file 

import { getClient } from "./client";

async function main() {
  const grid3 = await getClient();

  //then every module will use the KVStore to save its configuration and restore it.

  // also you can use it like this:
  const db = grid3.kvstore;

  // set key
  const key = "hamada";
  const exampleObj = {
      key1: "value1",
      key2: 2,
  };
  // set key
  await db.set({ key, value: JSON.stringify(exampleObj) });

  // list all the keys
  const keys = await db.list();
  console.log('keys', keys);

  // get the key
  const data = await db.get({ key });
  console.log('data', JSON.parse(data));

  // remove the key
  await db.remove({ key });

  await grid3.disconnect();
}

main();
