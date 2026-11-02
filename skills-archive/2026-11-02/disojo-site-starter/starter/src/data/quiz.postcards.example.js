// REFERENCE ONLY: the Postcards perfume quiz. Write fresh questions per client.
// Four questions, four answers each. Every answer points at a scent (2 points) and a
// near neighbour (1 point), so the result isn't just "count the same letter".
// Scent ids: 1 Himalayan Morning, 2 Rani Mahal, 3 Malabar Coast, 4 Old Haveli.
export const QUESTIONS = [
  {
    id: 'place',
    prompt: 'Where would you rather be right now?',
    options: [
      { label: 'On a quiet mountain at sunrise', scent: 1, near: 3 },
      { label: 'In a palace garden in full bloom', scent: 2, near: 4 },
      { label: 'In a beach town with the windows open', scent: 3, near: 1 },
      { label: 'In an old house lit by brass lamps', scent: 4, near: 2 },
    ],
  },
  {
    id: 'when',
    prompt: 'When will you wear it most?',
    options: [
      { label: 'Mornings, college and work', scent: 1, near: 3 },
      { label: 'Dates and celebrations', scent: 2, near: 4 },
      { label: 'Travel, brunch and weekends away', scent: 3, near: 1 },
      { label: 'Evenings and festive nights', scent: 4, near: 2 },
    ],
  },
  {
    id: 'feel',
    prompt: 'How should it make you feel?',
    options: [
      { label: 'Awake and clear-headed', scent: 1, near: 3 },
      { label: 'Soft and a little romantic', scent: 2, near: 4 },
      { label: 'Easy and unbothered', scent: 3, near: 1 },
      { label: 'Warm and quietly bold', scent: 4, near: 2 },
    ],
  },
  {
    id: 'note',
    prompt: 'Which note would you reach for first?',
    options: [
      { label: 'Citrus and ginger', scent: 1, near: 3 },
      { label: 'Rose and jasmine', scent: 2, near: 4 },
      { label: 'Sea salt and sage', scent: 3, near: 1 },
      { label: 'Oud and sandalwood', scent: 4, near: 2 },
    ],
  },
];

// Returns the best and second-best scent ids. Ties go to whichever scent the earliest
// answer pointed at, so the first question (the most instinctive one) breaks them.
export function scoreQuiz(answers) {
  const score = {};
  const firstSeen = [];
  answers.forEach((a) => {
    score[a.scent] = (score[a.scent] || 0) + 2;
    score[a.near] = (score[a.near] || 0) + 1;
    [a.scent, a.near].forEach((id) => { if (!firstSeen.includes(id)) firstSeen.push(id); });
  });
  const ranked = [...firstSeen].sort(
    (x, y) => score[y] - score[x] || firstSeen.indexOf(x) - firstSeen.indexOf(y),
  );
  return { best: ranked[0], second: ranked[1] };
}
