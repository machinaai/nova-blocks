import React from 'react';
import { shallow } from 'enzyme';
import TotalRequestCard from './index'


describe('TotalRequestCard', () => {
    let wrapper = shallow(<TotalRequestCard />);

    test('should show correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
});