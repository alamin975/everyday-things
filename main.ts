import { mkdirSync, writeFileSync } from "node:fs";

// Two lines, byte-for-byte: line 1 explains a toaster to a 10-year-old via an analogy; line 2 says what the analogy leaves out. One newline between them, no trailing newline.
const LINE1 = "A toaster is like a tiny sun in a metal box — it warms bread until it turns golden, the way the sun warms your skin.";
const LINE2 = "But the sun never pops up toast, and it never burns your bread just because you looked away.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE1 + "\n" + LINE2, { encoding: "utf8" });
}

writeEntry();
