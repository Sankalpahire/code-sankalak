import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import './editor.css';


import 'monaco-editor/esm/vs/basic-languages/html/html.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js';

const Editor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const runCode = () => {
    const iframe = document.getElementById('output-frame');
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
        <h4>HTML</h4>
        <MonacoEditor
          language="html"
          theme="vs-dark"
          value={htmlCode}
          onChange={setHtmlCode}
          options={{
            automaticLayout: true,
            wordWrap: 'on', 
            scrollBeyondLastLine: false, 
            minimap: { enabled: false }, 
            formatOnType: true, 
            formatOnPaste: true,
          }}
        />
      </div>
      <div className="editor-column">
        <h4>CSS</h4>
        <MonacoEditor
          language="css"
          theme="vs-dark"
          value={cssCode}
          onChange={setCssCode}
          options={{
            automaticLayout: true,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            minimap: { enabled: false },
            formatOnType: true,
            formatOnPaste: true,
          }}
        />
      </div>
      <div className="editor-column">
        <h4>JavaScript</h4>
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={jsCode}
          onChange={setJsCode}
          options={{
            automaticLayout: true,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            minimap: { enabled: false },
            formatOnType: true,
            formatOnPaste: true,
          }}
        />
      </div>
      <div className="output">
        <h4>Output</h4>
        <iframe id="output-frame" title="Output" className="output-frame"></iframe>
      </div>
    </div>
  );
};

export default Editor;
