import React from 'react';
import { shallow } from 'enzyme';
import { advanceTo } from 'jest-date-mock';

import FooterNbe from './index';
import logoNova from './assets/logos/nova.svg';
import logoTwitter from './assets/icons/twitter.svg';
import logoFacebook from './assets/icons/facebook.svg';
import logoInstagram from './assets/icons/instagram.svg';
import logoLinkedin from './assets/icons/linkedin.svg';

describe('FooterNbe', () => {
  let wrapper = shallow(<FooterNbe />);

  beforeEach(() => {
    wrapper = shallow(<FooterNbe />);
    advanceTo(new Date(2021, 5, 13));
  });

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should has contain the year 2021', () => {
    const a = wrapper.find('a').at(0).text();
    expect(a).toBe('Nova © Copyright 2020');
  });

  test('should has an img call logoNova', () => {
    const img = wrapper.find('img').at(0).prop('src');
    expect(img).toEqual(logoNova);
  });

  test('should has an img call logoTwitter', () => {
    const img = wrapper.find('img').at(1).prop('src');
    expect(img).toEqual(logoTwitter);
  });

  test('should has an img call logoLinkedin', () => {
    const img = wrapper.find('img').at(2).prop('src');
    expect(img).toEqual(logoLinkedin);
  });

  test('should has an img call logoFacebook', () => {
    const img = wrapper.find('img').at(3).prop('src');
    expect(img).toEqual(logoFacebook);
  });

  test('should has an img call logoInstagram', () => {
    const img = wrapper.find('img').at(4).prop('src');
    expect(img).toEqual(logoInstagram);
  });
});