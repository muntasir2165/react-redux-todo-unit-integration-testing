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

  it('should toggle 1 Todo', () => {
    store.dispatch(addTodo('go shopping'));
    // console.log('before toggle', store.getState());
    store.dispatch(toggleTodo(1));
    // console.log('after toggle', store.getState());
    const todo = store.getState().todos.find((x) => x.text === 'go shopping');
        expect(todo.text).toEqual('go shopping');
        expect(todo.completed).toEqual(true);
  });
});
