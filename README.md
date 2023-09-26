Tic-tac-toe tutorial from https://react.dev/learn/tutorial-tic-tac-toe


Some lessons:

- Lifting state up means moving state for lower to higher level components: To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent.

- The importance of immutability. Immutability makes it very cheap for components to compare whether their data has changed or not so you can avoid unnecessary re-renders ([more info](https://react.dev/reference/react/memo#usage)). It also makes it easir to implement more complex features like history tracking.

- List items in React need unique keys otherwise they risk being mixed up on re-render.


Optional extras to implement:

If you have extra time or want to practice your new React skills, here are some ideas for improvements that you could make to the tic-tac-toe game, listed in order of increasing difficulty:

- [ ] For the current move only, show “You are at move #…” instead of a button.
- [ ] Rewrite Board to use two loops to make the squares instead of hardcoding them.
- [ ] Add a toggle button that lets you sort the moves in either ascending or descending order.
- [ ] When someone wins, highlight the three squares that caused the win (and when no one wins,  display a message about the result being a draw).
- [ ] Display the location for each move in the format (row, col) in the move history list.