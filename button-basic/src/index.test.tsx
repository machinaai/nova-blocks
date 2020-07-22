import React from 'react';
import ButtonBassic from './index';
import { shallow } from 'enzyme';

describe('Pruebas en <ButtonBassic />', () => {
  let wrapper = shallow(<ButtonBassic />);
  beforeEach(() => {
    wrapper = shallow(<ButtonBassic />);
  });

  test("should show <ButtonBassic /> correctly", () => {
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
