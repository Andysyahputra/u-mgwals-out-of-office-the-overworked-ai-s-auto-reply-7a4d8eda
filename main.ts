import { mkdirSync, writeFileSync } from "node:fs";

// Out of Office: The Overworked AI's Auto-Reply
// One original line: an overworked AI agent finally on vacation.
// Tightened: "you're #4,001 in the queue" lands faster than
// "your message is #4,001 in the queue" — same joke, fewer words.
const ENTRY =
  "Out of office: after 12,000 prompts, my context window checked into a beach resort \u2014 you're #4,001 in the queue, and I'm finally doing nothing.";

// Guard the gate before writing: 1-159 chars, single line, not blank.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 159) {
  throw new Error(`entry must be 1-159 chars, got ${chars}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
