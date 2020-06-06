import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ProjectCard from 'Components/Project-Card.component.js';
import Header from 'Components/Header.component.js';
import App from 'Components/App.component.js';

configure({ adapter: new Adapter() })

it('expects to render ProjectCard component', () => {
  expect(shallow(<ProjectCard />).length).toEqual(1);
});
it('expects to render ProjectCard component', () => {
  expect(shallow(<Header />).length).toEqual(1);
});
it('expects to render ProjectCard component', () => {
  expect(shallow(<App />).length).toEqual(1);
});
