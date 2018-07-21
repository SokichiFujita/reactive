import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import CodeStore from '../stores/CodeStore';
import Navi from './Navi';
import Menu from './Menu';
import Editor from './Editor2';
import MonacoEditor from 'react-monaco-editor';

class SampleContainer extends Component {
  static getStores() {
    return [SampleStore, CodeStore];
  }

  static calculateState() {
    return {
      sample: SampleStore.getState(),
      code: CodeStore.getState(),
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex'}}>
          <Editor 
            style={{
              display: 'flex', 
              justifyContent: 'center',
              alighItems: 'center'
            }} 
            code={this.state.code}
          />
        </div>
      </div>
    );
  }
}

export default Container.create(SampleContainer);
