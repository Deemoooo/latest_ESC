import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import QuestionsProf from'../components/QuestionsProf';

test('should retreive data from firebase', () => {
  const wrapper =mount(
    <MemoryRouter initialEntries={['/QuestionsProf']} initialIndex={0}>
      <QuestionsProf/>
    </MemoryRouter>
  )
  console.log(wrapper.html());
  wrapper.update();

  expect(wrapper.find("List").length).toEqual(1);
});
