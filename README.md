# FAQ Component

This README describes the functionality of a FAQ (Frequently Asked Questions) component built with React and Next.js. This component provides an interactive way for users to view answers to common questions.

## Component Breakdown

### 1. `PlusIcon` Component
- **Purpose:** Renders a plus icon SVG.
- **Usage:** Used to indicate that an FAQ item can be expanded.

### 2. `MinusIcon` Component
- **Purpose:** Renders a minus icon SVG.
- **Usage:** Used to indicate that an FAQ item can be collapsed.

### 3. `Faqs` Component
- **Purpose:** The main component that displays the list of FAQ items. It manages which FAQ item is currently expanded.
- **State:**
  - `activeFaqIndex`: This state variable holds the index of the currently active (expanded) FAQ item. Initially, it is set to `null`, indicating no FAQ is expanded.

### Functions

#### `toggleFaqs(index)`
- **Parameters:** `index` - The index of the FAQ item that was clicked.
- **Purpose:** Toggles the expansion state of an FAQ item.
- **Behavior:**
  - If the clicked FAQ item is already expanded (its index matches `activeFaqIndex`), it collapses the item by setting `activeFaqIndex` to `null`.
  - If the clicked FAQ item is not expanded, it sets `activeFaqIndex` to the index of the clicked item, expanding it.

### FAQ Data Structure

- The FAQ items are stored in an array called `Faqs`. Each FAQ item is an object with the following structure:
  - `title`: The title of the FAQ item.
  - `descriptions`: An array of description objects. Each description object contains:
    - `title`: The text content of the description.

### Rendering Logic

1. **Container and Layout:**
   - The component uses a responsive grid layout to center the FAQ content on the page.
   - It includes a heading and a subheading to introduce the FAQ section.

2. **Accordion Functionality:**
   - The FAQ items are rendered as a list of expandable/collapsible items.
   - Each item shows its title and an icon (plus or minus) indicating its current state (expandable or collapsible).
   - When an item is clicked, `toggleFaqs` is called with the item's index, updating `activeFaqIndex` accordingly.

3. **Conditional Rendering:**
   - If an FAQ item is active (its index matches `activeFaqIndex`), its descriptions are displayed.
   - The `PlusIcon` is shown when the item is collapsed, and the `MinusIcon` is shown when the item is expanded.

### Summary

- The `PlusIcon` and `MinusIcon` components visually indicate whether an FAQ item can be expanded or collapsed.
- The `Faqs` component manages the state of which FAQ item is active using the `activeFaqIndex` state variable.
- The `toggleFaqs` function handles the logic for expanding and collapsing FAQ items.
- The FAQ data is structured to allow for easy management and rendering of multiple FAQ items and their descriptions.

This component provides a clear and user-friendly way for users to access detailed information in a structured FAQ format.
