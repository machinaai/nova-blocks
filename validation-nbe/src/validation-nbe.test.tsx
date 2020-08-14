import React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';

import ValidationNbe from './index';
import FormItem from './components/FormItem';
import { Component } from 'react';

jest.mock('umi', () => {
  return {
    __esModule: true,
    useIntl: jest.fn(() => {
      return { formatMessage: jest.fn() };
    }),
  };
});

describe('Validation-Nbe', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<ValidationNbe />);
  })

  test('should match with snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test('should have the correct className', () => {
  //   const myClass = wrapper.find('Form').at(0).hasClass('stepForm');
  //   expect(myClass).toBeTruthy();
  // })
  

  // test('should have Create as label', () => {
  //   const text = wrapper.find('Button').at(0).text();
  //   expect(text).toBe('Crear');
  // })
  
});
