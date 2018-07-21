import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 
import EditActionCreators from '../actions/EditActionCreators';
import MonacoEditor from 'react-monaco-editor';
import Playground from 'component-playground';
import ReactDOMServer from "react-dom/server";
import * as Babel from "babel-standalone";

class Editor extends Component {

  handleChange = (code, e) => {
    console.log("handleChange", code);
    EditActionCreators.updateComponents([code]);
  }
  handleMount = (e) => {}

  render() {
    const code = this.props.code;
    const options = {
      selectOnLineNumbers: true,
      autoIndent: true,
      automaticLayout: true,
      colorDecorators: true, 
      parameterHints: true,
      renderIndentGuides: true,
    };
    
    const scope = { Component, React, ReactDOM }

    const editor = (
      <MonacoEditor
        width="400"
        height="300"
        language="javascript"
        theme="vs-dark"
        options={options}
        value={code.components[0]}
        onChange={this.handleChange}
        editorDidMount={this.handleDidMount}
      />
    );

    const playground = (
      <Playground 
        codeText={code.components[0]} 
        scope={scope}
        noRender={false}
        collapsableCode={true}
        initiallyExpanded={true}
        es6Console={true}
        onChange={this.handleChange}
      />
    );

    console.log("In Render", code);

    const component = code.components[0]
    //const ast = parse(component, {plugins:["jsx", "react", "stage-0"]});
    //console.log(0, React.isValidElement(ast), ast)
    const codeFromAST = Babel.transform(component, {presets:["es2015", "react", "stage-0"]}).code;
    console.log(1, codeFromAST);
    console.log(2, React.isValidElement(codeFromAST), codeFromAST);

    const com = React.createElement(codeFromAST);
    console.log(3, React.isValidElement(com), com);

    var ccc = null;
    window.React = React
    window.react = React
    try {
      ccc = new Function(codeFromAST)()
      console.log(3, React.isValidElement(ccc), ccc);
    } catch (err) {
      console.log("try error", err);
    }
    console.log("-----------------------------------");

    try {
      const q = ReactDOMServer.renderToString(component);
      ReactDOM.render(ccc, document.getElementById("root1"));
      window.React = React
      const x = Babel.transform("() => { return <h1>XXXX</h1>}", {presets:["latest", "react", "stage-0"]}).code;
      const y = Babel.transform("class XX extends React.Component { render(){ return <h1>YYYY</h1> } }", {presets:["es2015", "react", "stage-0"]}).code;
      console.log("x", x);
      console.log("y", y);
      const xx = new Function(x);
      const yy = new Function(y);
      console.log("xx", xx);
      console.log("yy", yy);
      ReactDOM.render(xx(), document.getElementById("root2"));   
      ReactDOM.render(yy(), document.getElementById("root3"));

    } catch (err) {
      console.log("RENDER ERROR", err);
    }
    return (
      <div style={this.props.style}>
        {editor}
        {playground}
        {ccc}
      </div>
    );
  }
}

export default Editor;




