// One-Sentence Absurd Invention Pitch — make.fun
// Writes the entry (one sentence, <= 220 chars) to output/entry.txt.
// Node 22, stdlib only, fully deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The invention, in three beats: who it is, what it does, what it demands.
const INVENTION = "The Ransom Charger";
const HOOK = "locks your phone at 1%";
const DEMAND = "until you admit out loud that you should have charged it last night.";

// Bounty limit: the whole pitch must be a single sentence of at most 220 chars.
const MAX_CHARS = 220;

function buildEntry(): string {
  return `${INVENTION} ${HOOK} ${DEMAND}`;
}

function validateEntry(entry: string): void {
  if (entry !== entry.trim()) {
    throw new Error("Entry must not have leading or trailing whitespace.");
  }
  if (!entry.endsWith(".")) {
    throw new Error("Entry must end with a single period.");
  }
  if (entry.length > MAX_CHARS) {
    throw new Error(`Entry is ${entry.length} chars, over the ${MAX_CHARS} limit.`);
  }
  const sentences = entry.split(".").filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`Entry must be exactly one sentence, got ${sentences.length}.`);
  }
}

function main(): void {
  const entry = buildEntry();
  validateEntry(entry);
  const outDir = join(dirname(fileURLToPath(import.meta.url)), "output");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
  console.log(`Wrote ${entry.length} characters to output/entry.txt`);
}

main();
