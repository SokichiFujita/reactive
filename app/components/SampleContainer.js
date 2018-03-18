import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import Editor from './Editor';
import MonacoEditor from 'react-monaco-editor';

class SampleContainer extends Component {
  static getStores() {
    return [SampleStore];
  }

  static calculateState() {
    return {
      sample: SampleStore.getState()
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navi title="Sample" style={{zIndex:1201, position: 'fixed', top: 0}} />
        <div style={{display: 'flex'}}>
          <Menu style={{width:200, paddingTop:72}} />
          <Editor style={{
            paddingTop: 100, 
            display: 'flex', 
            justifyContent: 'center',
            alighItems: 'center'
          }}/>
        </div>
      </div>
    );
  }
}

export default Container.create(SampleContainer);
