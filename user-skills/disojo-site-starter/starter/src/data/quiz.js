// Four questions, four answers each. Every answer points at a product (2 points) and a near neighbour (1 point),
// so the result is not just "count the same letter". Product ids are the `id`s in data/products.js.
// Write questions in the client's own voice and around how people actually choose the product.
// Rules: one answer per product in every question; the "near" neighbour should be the next-closest product.
export const QUESTIONS = [
  {
    id: 'q1',
    prompt: 'Replace with the first question.',
    options: [
      { label: 'Answer for product one', scent: 1, near: 3 },
      { label: 'Answer for product two', scent: 2, near: 4 },
      { label: 'Answer for product three', scent: 3, near: 1 },
      { label: 'Answer for product four', scent: 4, near: 2 },
    ],
  },
  {
    id: 'q2',
    prompt: 'Replace with the second question.',
    options: [
      { label: 'Answer for product one', scent: 1, near: 3 },
      { label: 'Answer for product two', scent: 2, near: 4 },
      { label: 'Answer for product three', scent: 3, near: 1 },
      { label: 'Answer for product four', scent: 4, near: 2 },
    ],
  },
  {
    id: 'q3',
    prompt: 'Replace with the third question.',
    options: [
      { label: 'Answer for product one', scent: 1, near: 3 },
      { label: 'Answer for product two', scent: 2, near: 4 },
      { label: 'Answer for product three', scent: 3, near: 1 },
      { label: 'Answer for product four', scent: 4, near: 2 },
    ],
  },
  {
    id: 'q4',
    prompt: 'Replace with the fourth question.',
    options: [
      { label: 'Answer for product one', scent: 1, near: 3 },
      { label: 'Answer for product two', scent: 2, near: 4 },
      { label: 'Answer for product three', scent: 3, near: 1 },
      { label: 'Answer for product four', scent: 4, near: 2 },
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
