import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { MdOutlineOutput } from "react-icons/md";
import MonacoEditor from "react-monaco-editor";
import "./editor.css";

import "monaco-editor/esm/vs/basic-languages/html/html.contribution.js";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution.js";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js";

const Editor = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const runCode = () => {
    const iframe = document.getElementById("output-frame");
    const iframeContent = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
      </html>
    `;
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(iframeContent);
    iframe.contentWindow.document.close();
  };

  useEffect(() => {
    runCode();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="code-editor-container">
      <div className="editor-column">
        <h4>
          <FaHtml5 />
          HTML
        </h4>
        <MonacoEditor
          language="html"
          theme="vs-dark"
          value={htmlCode}
          onChange={setHtmlCode}
          options={{
            automaticLayout: true,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            minimap: { enabled: false },
            formatOnType: true,
            formatOnPaste: true,
            readOnly: false,
            lineNumbers: "on",
            roundedSelection: true,
            cursorStyle: "line",
            autoIndent: true,
            dragAndDrop: true,
            matchBrackets: true,
            autoClosingBrackets: "always",
            autoClosingQuotes: "always",
            autoSurround: "languageDefined",
            quickSuggestions: true,
            suggestOnTriggerCharacters: true,
            tabCompletion: "on",
            wordBasedSuggestions: true,
          }}
        />
      </div>
      <div className="editor-column">
        <h4>
          {" "}
          <FaCss3Alt />
          CSS
        </h4>
        <MonacoEditor
          language="css"
          theme="vs-dark"
          value={cssCode}
          onChange={setCssCode}
          options={{
            automaticLayout: true,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            minimap: { enabled: false },
            formatOnType: true,
            formatOnPaste: true,
            readOnly: false,
            lineNumbers: "on",
            roundedSelection: true,
            cursorStyle: "line",
            autoIndent: true,
            dragAndDrop: true,
            matchBrackets: true,
            autoClosingBrackets: "always",
            autoClosingQuotes: "always",
            autoSurround: "languageDefined",
            quickSuggestions: true,
            suggestOnTriggerCharacters: true,
            tabCompletion: "on",
            wordBasedSuggestions: true,
          }}
        />
      </div>
      <div className="editor-column">
        <h4>
          {" "}
          <FaJs />
          JavaScript
        </h4>
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={jsCode}
          onChange={setJsCode}
          options={{
            automaticLayout: true,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            minimap: { enabled: false },
            formatOnType: true,
            formatOnPaste: true,
            readOnly: false,
            lineNumbers: "on",
            roundedSelection: true,
            cursorStyle: "line",
            autoIndent: true,
            dragAndDrop: true,
            matchBrackets: true,
            autoClosingBrackets: "always",
            autoClosingQuotes: "always",
            autoSurround: "languageDefined",
            quickSuggestions: true,
            suggestOnTriggerCharacters: true,
            tabCompletion: "on",
            wordBasedSuggestions: true,
          }}
        />
      </div>
      <div className="output">
        <h4>
          {" "}
          <MdOutlineOutput /> Output
        </h4>
        <iframe
          id="output-frame"
          title="Output"
          className="output-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Editor;
