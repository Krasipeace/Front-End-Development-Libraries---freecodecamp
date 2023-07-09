# Markdown Previewer

This is a React component that renders a markdown previewer. It uses the `marked` library to convert markdown text to HTML, and the `Prism` library to highlight code syntax.

## Usage

To use this markdown previewer, simply copy and paste the code into a React project and run it. The previewer will render in the browser, and you can enter markdown text into the `#editor` field to see the HTML output in the `#preview` element.

To run the code, you will need to have React, ReactDOM, and the `marked` and `Prism` libraries installed. You can install these dependencies using npm or yarn.

## Code Explanation

The `App` component defines a state variable `markdown` using the `useState` hook, which is used to store the markdown text entered by the user in the `#editor` field. It also defines an effect using the `useEffect` hook, which sets up an event listener on the `#editor` field to update the preview whenever the user types or pastes text into the field. The effect also sets up a cleanup function to remove the event listener when the component unmounts.

The `App` component renders three main elements: the editor, the converter, and the preview. The editor is a `textarea` element with an `id` of `editor`, which is bound to the `markdown` state variable and the `setMarkdown` function using the `value` and `onChange` props, respectively. The converter is an empty `div` element that is not used in this implementation. The preview is a `div` element with an `id` of `preview`, which is updated with the HTML output of the `marked` function whenever the user types or pastes text into the `#editor` field.

The `defaultMarkdown` variable is a string that contains valid markdown representing each of the required elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text. This default markdown is set as the initial value of the `#editor` field using the `value` property.

## Tests

You can check passed tests by clicking [here](https://codepen.io/krasipeace/pen/rNQYMwJ).
