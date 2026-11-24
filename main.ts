// One-Sentence Absurd Invention Pitch — make.fun
// Writes the entry (one sentence, <= 220 chars) to output/entry.txt.
// Node 22, stdlib only, fully deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "The Ransom Charger locks your phone at 1% until you admit out loud that you should have charged it last night.";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to output/entry.txt`);
