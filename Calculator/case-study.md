**Calculator Project — Case Study**

**Overview:**
- **Project:** Simple web-based calculator implemented with HTML, CSS, and JavaScript.
- **Purpose:** Demonstrate basic DOM interaction and arithmetic expression evaluation in a minimal UI.

**Architecture & Files:**
- **HTML:** index.html — contains the UI: an input display and buttons for digits, operators, clear, and equals.
- **CSS:** style.css — styles the calculator container, display, and buttons for a compact layout.
- **JavaScript:** script.js — manages the input buffer (`currentInput`), updates the display, and evaluates expressions via `eval()`.

**Key Implementation Details:**
- The calculator stores user input in a single string variable `currentInput`.
- `updateDisplay()` writes `currentInput` to the `#display` input element.
- `calculate()` calls `eval(currentInput)` inside a try/catch; on success it writes and stores the result, on error it shows `Error` and clears the input.
- Buttons embed inline `onclick` handlers that append characters to `currentInput` and call `updateDisplay()`; the equals button calls `calculate()`.

**Strengths:**
- Very small, easy-to-read code with direct mapping from UI to behavior.
- Clear separation of duties: input buffer, display update, and evaluation.
- CSS produces a usable, centered calculator layout.

**Risks and Issues:**
- Use of `eval()` on raw user-constructed strings is dangerous if the app later accepts external input or is embedded in a larger site. It can execute arbitrary code.
- Inline `onclick` handlers make behavior harder to test and maintain compared to adding event listeners in `script.js`.
- No input validation (e.g., consecutive operators, leading operators) which may produce unexpected results or errors.
- No keyboard support or accessibility considerations (ARIA labels, focus outlines).

**Suggested Improvements:**
- Replace `eval()` with a safe expression parser/evaluator (e.g., a small shunting-yard implementation or a library like `mathjs`) to avoid code injection risks.
- Move inline `onclick` attributes to JavaScript event listeners (use `querySelectorAll` + `addEventListener`) to separate behavior from markup.
- Add basic input sanitization: prevent multiple operators in a row, handle leading `-`, and normalize decimal usage.
- Add keyboard support (numbers, operators, Enter for equals, Backspace for delete) and ARIA attributes for accessibility.
- Add a small test harness (manual test plan plus automated unit tests for the evaluator) and a README with usage instructions.

**Testing & How to Run:**
- Open `index.html` in a browser (serve via local file or simple static server).
- Manual tests:
  - Click digits/operators to form expressions like `12+34*2`, then press `=` — verify correct result.
  - Press `C` — verify display clears.
  - Enter invalid sequences like `++` and check for graceful handling (currently shows `Error`).
- To automate: extract the evaluator into a separate function (not `eval`) and write unit tests (Node + Jest or plain browser test harness).

**Next Steps (prioritized):**
1. Replace `eval()` with a safe evaluator and add unit tests for parsing and evaluation.
2. Move inline handlers into `script.js` event listeners and add keyboard support.
3. Add input validation and improve error messages.
4. Improve accessibility (labels, roles, keyboard focus) and responsive styling.

**References:**
- Files: `index.html`, `style.css`, `script.js` (in the `Calculator` folder).
