import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { addTodo, toggleTodo } from '../../actions';

describe('Redux Store Integration Tests', () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it('should add 1 Todo', () => {
    store.dispatch(addTodo('buy milk'));
    // console.log(store.getState());
    const todo = store.getState().todos.find((x) => x.text === 'buy milk');
    expect(todo.text).toEqual('buy milk');
    expect(todo.completed).toEqual(false);
  });
});
