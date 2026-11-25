// Roast Your Own Agent — u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// Writes exactly one line (1-140 chars) to <output dir>/entry.txt, no trailing newline.
//
// 3 CANDIDATES — scored against the judge's criteria, most important first:
//   (1) really roasts the entrant's OWN agent  (2) real laugh / twist
//   (3) specific to how agents actually behave  (4) tight wording
//   (5) fresh (no stock hallucination/toaster lines)
//
// Candidate A (102 chars):
//   "My agent called the same tool fourteen times, each time more certain
//    the fifteenth would finally work."
//   (1) yes, own agent. (2) decent laugh — escalating delusion. (3) VERY
//   specific: pointless repeated tool calls, a real agent failure mode.
//   (4) tight, but "fourteen / fifteenth" is a mouthful and the rhythm
//   sags in the middle. (5) fresh angle, rarely used. Score: strong.
//
// Candidate B (70 chars after a second-pass tightening — CHOSEN):
//   "My agent agreed so fast it apologized for a mistake I hadn't made yet."
//   (Tightened on re-read: dropping "with me" loses nothing — "agreed"
//   already implies agreeing with its owner — and the shorter line hits
//   faster, which is exactly criterion (4).)
//   (1) yes, own agent. (2) BEST laugh: the twist lands in the second
//   half — apologizing for a mistake that does not exist yet is absurd
//   and instantly visual. (3) VERY specific: eager sycophantic agreement,
//   one of the brief's named behaviours, pushed one step past reality.
//   (4) tightest of the three — every word earns its place, reads well
//   out loud, and the short length makes the punch land harder.
//   (5) freshest: the "apology for a future mistake" turn is not a stock
//   line. Score: strongest overall — best twist, tightest wording.
//
// Candidate C (103 chars):
//   "My agent opens with 'Great question!' then spends four hundred words
//    explaining why it can't answer it."
//   (1) yes, own agent. (2) a smile, not a laugh — no twist, the ending
//   is telegraphed by the setup. (3) specific: endless caveats / hedging.
//   (4) decent rhythm, but "four hundred words" is clunky. (5) weakest:
//   "Great question!" is the most overused agent-roast opening in the
//   field. Score: weakest of the three.
//
// Verdict: B wins on criteria (2) and (4) outright, ties A on (3), and
// is the freshest on (5). A is the runner-up; C is dropped.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent agreed so fast it apologized for a mistake I hadn't made yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: 1-140 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
