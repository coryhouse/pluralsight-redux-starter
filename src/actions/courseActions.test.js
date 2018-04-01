import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      //arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      //act
      const action = courseActions.createCourseSuccess(course);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('Course Actions Thunk', () => {
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
      // In a real app, you'd likely make a real HTTP call.
      // To mock out that http call, you can use Nock to intercept all
      // calls to a given address or pattern. This means you can test
      // without making actual HTTP calls, and specify the data
      // your mock API should return. Since we're already hitting a mock
      // API, there's no need to call nock in this test.

      // Here's an example call to nock.
      // nock('http://example.com/')
      //   .get('/courses')
      //   .reply(200, { body: { course: [{ id: 'clean-code', title: 'Clean Code'}] }});

      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
      ];
      const store = mockStore({courses: []}, expectedActions, done);
      store.dispatch(courseActions.loadCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
      });
    });
  });
});
