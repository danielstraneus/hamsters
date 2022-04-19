import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const firebaseConfig = require("./firebaseConfig.json");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
