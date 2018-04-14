import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import QuestionForm from'../components/QuestionsStud';

describe('QuestionForm', () => {

  it('should open the form', () => {
    const spy = jest.spyOn(QuestionForm.prototype, 'handleOpen');
    const isOpen =QuestionForm.handleOpen;
    const wrapper =mount(
        <QuestionForm/>
    );
    expect(spy).not.toHaveBeenCalled();
    wrapper.find("Button").simulate("click");
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().open).toBe(true);
    spy.mockReset();
    spy.mockRestore();
  });

  it('should close the form', () => {
    const spy = jest.spyOn(QuestionForm.prototype, 'handleClose');
    const isClose =QuestionForm.handleClose;
    const wrapper =mount(
        <QuestionForm/>
    );
    expect(spy).not.toHaveBeenCalled();
    const a=wrapper.find("Dialog").props().actions;
    //b.find({label:"Cancel"}).simulate("click");
    //expect(spy).toHaveBeenCalled();
    expect(wrapper.state().open).toBe(false);
    spy.mockReset();
    spy.mockRestore();
  });





});
