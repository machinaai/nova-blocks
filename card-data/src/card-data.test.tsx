import React from 'react';
import { shallow } from 'enzyme';
import DataCard from './index'


describe('DataCard', () => {
    let wrapper = shallow(<DataCard />);

    test('should show correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
});