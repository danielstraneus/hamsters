import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// const firebaseConfig = require("./firebaseConfig.json");

let privateKey;
if (process.env.PRIVATE_KEY) {
  privateKey = JSON.parse(process.env.PRIVATE_KEY);
} else {
  privateKey = require("./firebaseConfig.json");
}

const app = initializeApp(privateKey);
const db = getFirestore(app);

export { db };
