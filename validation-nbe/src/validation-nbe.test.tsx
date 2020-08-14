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
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ValidationNbe.WrappedComponent />);
  })

  test('should match with snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
