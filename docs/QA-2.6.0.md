# Hiểu Thật 2.6.0 — slide diagrams and explorations

Date: 2026-10-27.

## Scope

- Each of 75 slides has an individually authored, three-step explanation in `dist/content/slide-guides.js`.
- Propositions use logic and finite-set quantifier examples instead of Venn diagrams. Venn remains a set illustration.
- Explorations cover set operations/intervals, halfplanes, systems, angles, triangles, vectors, dot products, statistics, quadratics, lines/circles, counting and probability. Controls are intentionally bounded examples, not arbitrary mathematical solvers.
- Halfplanes clip the actual inequality to a bounded coordinate window, distinguish open/closed borders, support pointer movement and coordinate sliders, and give feedback on choosing a side. Invalid zero normals are rejected. Quadratics reject a = 0.
- Long explanations use wrapping HTML rather than embedded SVG text. Geometry labels stay short. At narrower desktop widths the slide uses one column; mobile controls retain keyboard access. A bottom gap lets the slide toolbar scroll clear of the floating assistant.
- The knowledge list becomes a collapsible branch map below learning history, with additional crosslinks for multiple foundations. Connections are suggested conceptual paths, not mandatory prerequisites. Completion of slides is separate from evidence from the latest local practice session.
- Lab examples and side-choice feedback do not generate grades, evidence of mastery, or practice hint records. Existing practice help tracking remains in its original workflow.

## Verification

- `npm run check`: passed; `npm run lint`: passed; `npm test`: 75 passed.
- Added checks for all explanation paths, halfplane geometry and strict borders, sample statistics, combinations, circle membership, probability limits, invalid quadratics, and full map coverage with honest evidence states.
- Browser preview: all 15 topics and all 75 slides visited at a 390 × 844 viewport. DOM measurements found no horizontal document overflow or NaN/undefined values. This is responsive browser testing, not a claim of physical phone testing.
- Manual browser interactions: truth-value selection, finite-set quantifier predicate, inequality sign change, keyboard coordinate changes, pointer dragging M, side-choice feedback, probability outcome buttons, quadratic coefficient changes including a = 0, reset, and knowledge-map lesson navigation.
- Preview URLs used: `hieu-that-q035zki8q-hbhb5.vercel.app` (first pass) and `hieu-that-czfqhqweg-hbhb5.vercel.app` (final pass).
- No schema changes, real-account password changes, or new production student records are part of this release. Browser visits on preview write only that preview origin's local self-study progress.

## Limits

- Values displayed with two decimal places are approximate. Probability exploration is a theoretical balanced die, not a random simulation.
- Graphs show a finite window. Points and curves outside it are not a claim of bounded solution sets.
- Lab parameter changes reset when a slide is recreated; they are exploratory controls rather than saved submissions.
- The map reflects local self-study data, not a new server-side assessment of all topics.
