import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 
import EditActionCreators from '../actions/EditActionCreators';
import MonacoEditor from 'react-monaco-editor';
import Playground from 'component-playground';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'


class Editor extends Component {

  handleChange = (code, e) => {
    console.log(code);
    EditActionCreators.updateComponents([code]);
  }
  handleMount = (e) => {}

  render() {
    const code = this.props.code;
    console.log(code);
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

    const live = (
      <LiveProvider 
        code={code.components[0]}
        scope={scope}
      >
        <LivePreview />
        <LiveEditor onChange={this.handleChange}/>
        <LiveError style={{backgroundColor:'black', color:'red'}}/>
      </LiveProvider>
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

    return (
      <div style={this.props.style}>
        {editor}
        {live}
        {playground}
      </div>
    );
  }
}


export default Editor;




