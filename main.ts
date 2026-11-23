import * as fs from "node:fs";
import * as path from "node:path";

const JOKE =
  "Our Wi-Fi went down at dinner, so I told the kids we're finally having a real family connection. Nobody laughed — the router did.";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Dad joke must be 1 to 200 characters, got ${JOKE.length}.`);
}
if (JOKE.trim().length === 0) {
  throw new Error("Dad joke must not be only white space.");
}

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JOKE, "utf8");
