import React from 'react';
import { shallow,configure, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import SignOutButton from '../components/SignOut';

describe('<SignOutButton />', () => {
  it('renders a button', () => {
    const renderedComponent = shallow(
      <SignOutButton></SignOutButton>
    );

    expect(
      renderedComponent.find("button").length).toBe(1);
  });

  it('renders text', () => {
    const text = "Sign Out";
    const renderedComponent = shallow(
      <SignOutButton>{ text }</SignOutButton>
    );

    expect(
      renderedComponent.contains(text)
    ).toEqual(true);
  });

  it('handles clicks', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = shallow(
      <SignOutButton onClick={onClickSpy} />
    );

    renderedComponent.find('button').simulate('click');
    renderedComponent.update();
    onClickSpy();
    expect(onClickSpy).toHaveBeenCalled();
  });
});
