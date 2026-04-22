// Typed manifest of all pixel art sprite assets.
// Source PNGs live in public/sprites/.

export const characterSprites = {
  base:           '/sprites/character/base.png',
  'ey-exhausted': '/sprites/character/ey-exhausted.png',
  victory:        '/sprites/character/victory.png',
  waving:         '/sprites/character/waving.png',
  hiking:         '/sprites/character/hiking.png',
  coding:         '/sprites/character/coding.png',
} as const;

export const walkFrames = [
  '/sprites/character/walk/walk-1.png',
  '/sprites/character/walk/walk-2.png',
  '/sprites/character/walk/walk-3.png',
  '/sprites/character/walk/walk-4.png',
] as const;

export const scenes = {
  'china-origin':   '/sprites/scenes/china-origin.png',
  'office-night':   '/sprites/scenes/office-night.png',
  hackathon:        '/sprites/scenes/hackathon.png',
  northeastern:     '/sprites/scenes/northeastern.png',
  'mountain-trail': '/sprites/scenes/mountain-trail.png',
  'seattle-dusk':   '/sprites/scenes/seattle-dusk.png',
} as const;

export const items = {
  trophy:       '/sprites/items/trophy.png',
  cat:          '/sprites/items/cat.png',
  whale:        '/sprites/items/whale.png',
  matcha:       '/sprites/items/matcha.png',
  coffee:       '/sprites/items/coffee.png',
  laptop_open:  '/sprites/items/laptop_open.png',
  laptop_close: '/sprites/items/laptop_close.png',
  book:         '/sprites/items/book.png',
  hiking_pack:  '/sprites/items/hiking_pack.png',
  tennis:       '/sprites/items/tennis.png',
  dumbbell:     '/sprites/items/dumbbell.png',
  lantern:      '/sprites/items/lantern.png',
  mountain:     '/sprites/items/mountain.png',
  pine_tree:    '/sprites/items/pine_tree.png',
  cloud:        '/sprites/items/cloud.png',
} as const;

export const effects = {
  'sweat-drop':    '/sprites/effects/sweat_drop.png',
  sparkle:         '/sprites/effects/sparkle.png',
  heart:           '/sprites/effects/heart.png',
  confetti:        '/sprites/effects/confetti.png',
  zzz:             '/sprites/effects/Zzz.png',
  'speech-bubble': '/sprites/effects/speech_bubble.png',
  'dust-cloud':    '/sprites/effects/dust_cloud.png',
  exclamation:     '/sprites/effects/exclamation.png',
  question:        '/sprites/effects/question.png',
  'level-up':      '/sprites/effects/level_up.png',
} as const;

export type CharacterVariant = keyof typeof characterSprites | 'walk';
export type Scene  = keyof typeof scenes;
export type Item   = keyof typeof items;
export type Effect = keyof typeof effects;
