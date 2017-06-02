import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe ('Manage Course Page', () => {
  it('set error message when trying to save empty title', () => {
    const props = {
      authors:[],
      actions:{ saveCourse:() => { return Promise.resolve();}},
      course : {id:'', watchHref:'', title:'', authorId:'', length:'', category:''}
    }
  //  const wrapper = mount(<Propvider store={store}><ManageCoursePage/></Provider>);//use mount to create a full DOM in memory
  const wrapper = mount(<ManageCoursePage {...props}/>);
  const saveButton = wrapper.find('input').last();
  expect(saveButton.prop('type')).toBe('submit');
  saveButton.simulate('click');
  expect(wrapper.state().errors.title).toBe('Titile must be at least 5 characters.');
  });
});
