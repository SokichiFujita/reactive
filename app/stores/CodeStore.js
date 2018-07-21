import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';

class CodeStore extends ReduceStore {
  getInitialState() {
    const component = 
`
class Example extends React.Component {
  render() {
    return <div style={{color:'red'}}>Hello World!</div>
  }
}`;

    /*
    return {
      components: [component], 
      containers: [], 
      actions: [], 
      stores: [], 
      dispatchers: [], 
      app: [], 
      scopes: [], 
    };
    */
    return {
      components: [component], 
    };
   
  }

  reduce(state, action) {
    switch (action.type) {
      case 'components/get':
        return state.components;
      case 'components/update':
        return {
          components: action.data
        };
      case 'all/get':
        return state;
      case 'all/update':
        return action.data;
      default:
        return state;
    }
  }
}

export default new CodeStore(AppDispatcher);
