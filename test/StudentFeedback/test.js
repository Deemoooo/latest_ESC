import React from 'react';
import {shallow} from 'enzyme';

// import modules to be tested
import StudentFeedbackForm from '../../src/components/Student/Feedback';


it('renders', ()=>{
	const wrapper = shallow (<StudentFeedbackForm>);
	expect(wrapper.find('open').boolean()).toEqual(false);
})