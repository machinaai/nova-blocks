import React from 'react';
import { shallow } from 'enzyme';
import  ButtonBlock from './index';


describe('Test en <ButtonBlock />', () => {
  let wrapper = shallow(<ButtonBlock />);
  beforeEach(() => {
    wrapper = shallow(<ButtonBlock />);
  });

  test("should show <ButtonBlock /> correctly", () => {
     expect(wrapper).toMatchSnapshot(); 
  });

  test('Primary Button', () => {
    let text =wrapper.find('Button').at(0).text()
     expect(text).toBe('Primary');
    });
 
    test('Default Button', () => {
     let text =wrapper.find('Button').at(1).text()
      expect(text).toBe('Default');
   });
 
   test('Dashed Button', () => {
     let text =wrapper.find('Button').at(2).text()
      expect(text).toBe('Dashed');
   });
 
   test('Link Button', () => {
     let text =wrapper.find('Button').at(3).text()
      expect(text).toBe('Link');
   });
});


