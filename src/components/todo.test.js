import React from 'react';
import Todo from './Todo';
import { configure, shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Todo /> component Unit Tests', () => {
  const mockFn = jest.fn();
  const props = {
    onClick: mockFn,
    completed: false,
    text: 'buy milk',
  };
  let component;

  beforeEach(() => {
    component = shallow(<Todo {...props} />);
  });

  it('should render 1 <Todo /> component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('li')).toHaveLength(1);
  });

  it('should render props correctly', () => {
    // console.log(component.props());
    expect(component.props().children).toEqual('buy milk');
  });

  it('should set props correctly', () => {
    component.setProps({ text: 'hello' });
    expect(component.props().children).toEqual('hello');
  });

  it('should call onClick handler when Todo component is clicked', () => {
    component.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

// See lines 63-71 for explanation on the commented out code on lines 46-50

// fdescribe('<Todo /> Styling behaviour', () => {
// describe.only('<Todo /> Styling behaviour', () => {

// xdescribe('<Todo /> Styling behaviour', () => {
// describe.skip('<Todo /> Styling behaviour', () => {

describe('<Todo /> Styling behaviour', () => {
  const mockFn = jest.fn();
  it('should not have linethrough style when todo is incomplete', () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={false} text='go shopping' />
    );
    expect(component.props().style).toEqual({
      textDecoration: 'none',
    });
  });

  // f => focus on this test only / run only the test in this file that is marked with 'f'
  // fit('should have linethrough style when todo is complete', () => {
  // the following it.only(...) is identical to the fit(...) syntax with regards to the functionality
  // it.only('should have linethrough style when todo is complete', () => {

  // x => skip this test / run all the tests in this file except for the one marked with 'x'
  // xit('should have linethrough style when todo is complete', () => {
  // the following it.skip(...) is identical to the xit(...) syntax with regards to the functionality
  // it.skip('should have linethrough style when todo is complete', () => {

  it('should have linethrough style when todo is complete', () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={true} text='go shopping' />
    );
    expect(component.props().style).toEqual({
      textDecoration: 'line-through',
    });
  });
});
