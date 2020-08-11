import React from 'react';
import { shallow } from 'enzyme';

import HeaderNbe from './index';

jest.mock('umi', () => {
  return {
    __esModule: true,
    useIntl: jest.fn(() => {
      return { formatMessage: jest.fn() };
    }),
  };
});

describe('HeaderNbe', () => {
  let wrapper = shallow(<HeaderNbe />);

  beforeEach(() => {
    wrapper = shallow(<HeaderNbe />);
  });

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
