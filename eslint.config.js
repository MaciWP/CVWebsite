import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, ".eslintrc.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
delete config.extends; // remove unsupported key in flat config

export default [config];
