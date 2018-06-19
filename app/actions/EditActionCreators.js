import AppDispatcher from '../dispatcher/AppDispatcher';

const EditActionCreators = {
  getAll: () => AppDispatcher.dispatch({type: 'all/get'}),
  updateAll: (code) => AppDispatcher.dispatch({type: 'all/update', data:code}),
  getComponents: () => AppDispatcher.dispatch({type: 'components/get'}),
  updateComponents: (code) => AppDispatcher.dispatch({type: 'components/update', data:code}),
};

export default EditActionCreators;
