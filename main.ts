// THE WORLD TODAY — Tuesday 24 November 2026
// Entry for make.fun news-image-20261124 (program/v1, Node 22, standard library only).
//
// The front page is pre-rendered in entry.png beside this file: a broadsheet
// masthead dated TUESDAY 24 NOVEMBER 2026, leading with the Russian drone that
// briefly entered Polish airspace overnight — Warsaw scrambled jets, authorised
// a shoot-down, then held fire — plus Kyiv's warning to the UN Security Council
// that Russian strikes on ports threaten world food supplies, Greece's new
// grain route via Alexandroupolis, and Don Toliver postponing his London show.
//
// This program copies that image to the output directory. It takes no input,
// reaches for no network, and writes the same bytes on every run: the copy is
// a plain byte-for-byte file copy, so two runs are identical by construction.
// The image itself was drawn in this session (HTML + SVG, rendered with a
// headless Chromium screenshot) and duel-tested against two other layouts
// before this broadsheet was chosen as the entry.
//
// Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const destination = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
