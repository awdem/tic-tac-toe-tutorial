Tic-tac-toe tutorial from https://react.dev/learn/tutorial-tic-tac-toe


Some lessons:

- Lifting state up means moving state for lower to higher level components: To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent.

- The importance of immutability. Immutability makes it very cheap for components to compare whether their data has changed or not so you can avoid unnecessary re-renders ([more info](https://react.dev/reference/react/memo#usage)). It also makes it easir to implement more complex features like history tracking.

- List items in React need unique keys otherwise they risk being mixed up on re-render.


Optional extras to implement:

- [x] For the current move only, show “You are at move #…” instead of a button.
- [x] Rewrite Board to use two loops to make the squares instead of hard coding them.
	- Extra lesson about closures and scope here. Because the squares are receiving a function as a prop for onSquareClick, you can't directly reference counter, because it's not capturing counter at that instance, but rather a reference to it. That's why you needed to declare a count variable that capture the value of counter at that instance within the loop instead.
- [ ] Add a toggle button that lets you sort the moves in either ascending or descending order.
- [ ] When someone wins, highlight the three squares that caused the win (and when no one wins,  display a message about the result being a draw).
- [ ] Display the location for each move in the format (row, col) in the move history list.