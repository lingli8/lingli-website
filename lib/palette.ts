// Character and scene color palette — Section 4.2
// Locked: change only on deliberate redesign (Tier 3 evergreen).
// Used by pixel character renderer and animation scenes.

export const palette = {
  // Skin
  SKIN:          '#F5D3B5',
  SKIN_SHADE:    '#E0B090',
  // Hair
  HAIR:          '#2D2020',
  HAIR_SHINE:    '#4A3535',
  // Glasses & face
  GLASSES:       '#1A1515',
  MOUTH:         '#8B4A3F',
  BLUSH:         '#FFB6C1',
  // Outfit
  HOODIE:        '#B0B0B0',
  HOODIE_SHADE:  '#888888',
  HOODIE_DARK:   '#6A6A6A',
  JEANS:         '#4A5F85',
  JEANS_SHADE:   '#334766',
  SHOE:          '#F0F0F0',
  SHOE_SHADE:    '#B8B8B8',
  // Scene / environment
  BG_WARM_TOP:   '#FFE4C4',
  BG_WARM_BOT:   '#FFDAB9',
  GROUND:        '#C8A97E',
  GROUND_SHADE:  '#8B7355',
  GRASS:         '#7BA05B',
  // Brand
  ACCENT:        '#E07856',  // warm terracotta
  SUCCESS:       '#7BA05B',  // grass green
} as const;

export type PaletteKey = keyof typeof palette;
