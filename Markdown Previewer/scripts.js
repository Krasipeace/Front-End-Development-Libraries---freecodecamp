const { useState, useEffect } = React;

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");

    const updatePreview = () => {
      preview.innerHTML = marked(editor.value, { breaks: true });
      Prism.highlightAll();
    };

    editor.addEventListener("input", updatePreview);

    updatePreview();

    return () => {
      editor.removeEventListener("input", updatePreview);
    };
  }, []);

  return (
    <div>
      <div className="editorWrap">
        <div className="toolbar">
          <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
          Editor
          <i className="fa fa-arrows-alt"></i>
        </div>
        <textarea
          id="editor"
          type="text"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </div>
      <div className="converter"></div>
      <div className="previewWrap">
        <div className="toolbar">
          <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
          Previewer
          <i className="fa fa-arrows-alt"></i>
        </div>
        <div id="preview"></div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

const defaultMarkdown = `# This is a header (H1 size)

## This is a sub header (H2 size)

Here is a [link](https://www.example.com).

Here is some inline code: \`console.log('Hello, world!');\`

\`\`\`
// This is a code block
function add(a, b) {
  return a + b;
}
\`\`\`

- This is a list item
- This is another list item

> This is a blockquote

Here is an image:
![alt text](https://via.placeholder.com/150)

**This text is bolded**

This text has  
a line break`;

document.getElementById("editor").value = defaultMarkdown;