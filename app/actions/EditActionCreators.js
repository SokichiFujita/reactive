import AppDispatcher from '../dispatcher/AppDispatcher';

const EditActionCreators = {
  getAll: () => AppDispatcher.dispatch({type: 'all/get'}),
  updateAll: (codeObject) => AppDispatcher.dispatch({type: 'all/update', data:codeObject}),
  getComponents: () => AppDispatcher.dispatch({type: 'components/get'}),
  updateComponents: (componentList) => AppDispatcher.dispatch({type: 'components/update', data:componentList}),
};

export default EditActionCreators;
