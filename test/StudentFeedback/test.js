import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

// import modules to be tested
import StudentFeedbackForm from '../../src/components/Student/Feedback';

describe('<StudentFeedbackForm/>', () => {
	// test initial state
	it('renders', ()=>{
		const wrapper = shallow (<StudentFeedbackForm/>);
		expect(wrapper.contains(<MuiThemeProvider/>)).to.Equal(true)
		expect(wrapper.find('open').boolean()).to.Equal(false)
		expect(wrapper.find('pace').text()).to.Equal('0')
	});	

	it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
})
