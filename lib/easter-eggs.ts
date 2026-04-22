// Easter egg IDs. 9 total planned; 3 are active now.
// The remaining 6 will be wired when the intro animation ships.

export const EASTER_EGGS = {
  EY_SWEAT_DROP: 'ey-sweat-drop',      // 💦 hover next to EY in Experience
  FOOTER_PROMPT: 'footer-flow-prompt', // $ flow▌ click in Footer
  CONSOLE_ASCII: 'console-ascii-art',  // type __discoverConsoleEgg() in DevTools
  // --- intro animation eggs (wire up when /intro ships) ---
  // CAT:          'intro-cat',
  // WHALE:        'intro-whale',
  // PONYTAIL:     'intro-ponytail',
  // CARABINER:    'intro-carabiner',
  // PUSHUP:       'intro-pushup',
  // TROPHY_SHELF: 'intro-trophy-shelf',
} as const;

export const TOTAL_EGGS = 9;

export type EasterEggId = typeof EASTER_EGGS[keyof typeof EASTER_EGGS];
