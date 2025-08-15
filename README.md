🧐 Development Approach & Trade-offs

APPROACH:-
The project was built using a modern component-based architecture with React and TypeScript, leveraging Vite for a fast development experience. Material-UI (MUI) was chosen for its comprehensive, pre-built components and customizable theme, which helped to quickly establish a consistent and professional design. The UI for the pricing cards was developed as a reusable BillingCard component.

Trade-offs:-
A key trade-off was balancing layout flexibility with visual consistency for the pricing cards. Initially, a "most popular" card used a scaling transform, which created size discrepancies. To ensure all cards were uniform in size and appearance, the scaling effect and conditional styling were removed. A fixed width was applied to the cards on larger screens, which guarantees they are identical. This approach prioritizes a clean, organized look over a more dynamic, content-driven card size.
