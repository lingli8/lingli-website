// Easter egg IDs — 9 total, all registered here.
// Hybrid discovery: eggs auto-appear as decorations; each is also clickable.
// Active now: EY_SWEAT, CONSOLE_ASCII, FOOTER_FLOW.
// Wired in intro sessions: BIRTH_CAT (S1), NOVEL_BOOK (S2), then S6/S8/S9/S12.

export const EASTER_EGGS = {
  BIRTH_CAT:     'birth-cat-egg',      // 🐱 Scene 1 — cat walks across
  NOVEL_BOOK:    'novel-book-egg',      // 📖 Scene 2 — book sprite
  PACIFIC_WHALE: 'pacific-whale-egg',  // 🐳 Scene 6 — whale breaches
  EY_SWEAT:      'ey-sweat-drop-egg',  // 💦 Experience — hover EY entry
  CARABINER:     'carabiner-egg',      // 🧗 Scene 8 — carabiner clip
  PUSHUP:        'pushup-cameo-egg',   // 💪 Scene 9 — pushup cameo
  TROPHY_SHELF:  'trophy-shelf-egg',   // 🏆 Scene 12 — trophy shelf
  CONSOLE_ASCII: 'console-ascii-egg',  // 💻 DevTools — type __discoverConsoleEgg()
  FOOTER_FLOW:   'footer-flow-egg',    // $ Footer — click the cursor
} as const;

export const TOTAL_EGGS = 9;

export type EasterEggId = typeof EASTER_EGGS[keyof typeof EASTER_EGGS];
