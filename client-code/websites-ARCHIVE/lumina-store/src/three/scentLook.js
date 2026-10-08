// One deliberate system, not four independent guesses: each scent's label/oil colour is
// pulled from its own listed notes, at a shared richness so the four read as one palette
// cycling through the journey rather than unrelated pastel swatches. Stamp ink is the one
// constant across all four (true to a real postage stamp), except Old Haveli's deep bottle
// background, where a light stamp is needed to still read against it.
export const LOOK = {
  1: { label: '#CFE3D6', oil: '#9FCBAB', notes: 'FRESH · CITRUS · WOODY', stamp: '#8A3B24' }, // alpine green — green mandarin, vetiver
  2: { label: '#EFD3D8', oil: '#D98DA0', notes: 'FLORAL · SOFT · ELEGANT', stamp: '#8A3B24' }, // palace rose — peony, rose, jasmine
  3: { label: '#CDE6E6', oil: '#6FB8B9', notes: 'BREEZY · COASTAL · FREE', stamp: '#8A3B24' }, // sea-salt teal — ambrette, sage, grapefruit
  4: { label: '#EDDDBC', oil: '#C38A3E', notes: 'WOODY · SPICED · WARM', stamp: '#F3E6CF' }, // oud amber — cardamom, oud, sandalwood
};
