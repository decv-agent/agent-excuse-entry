import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "The judge's training data ended before my genius began.");
