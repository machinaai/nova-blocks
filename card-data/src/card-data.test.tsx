import React from 'react';
import { shallow } from 'enzyme';
import DataCard from './index'
describe('DataCard', () => {
    let wrapper;
    it('Should be a create a snapshot without props', () => {
      wrapper = shallow(<DataCard />);
      expect(wrapper).toMatchSnapshot();
    });
    it("Should be create a snapshot with props", () => {
      const props = {
        title:  'Title1',
        subtitle: 'Subtitle1',
        suffix: '%',
        valueStyle: {},
        title2:  'Title2',
        subtitle2: 'Subtitle2',
        suffix2: '%',
        valueStyle2: {},
        icon: {},
      };
      wrapper = shallow(<DataCard {...props} />)
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
    });
});