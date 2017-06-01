import expect from 'expect';
import {authorsFormatedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormatedForDropdown', () => {
    it('should return author data formateted for use in dropdown', () => {
      const authors =[
        {id: 'cory-house', firstName:'Cory', lastName:'House'},
        {id: 'scott-allen', firstName:'Scott', lastName:'Allen'}
      ];

      const expected = [
        {value:'cory-house', text:'Cory House'},
        {value:'scott-allen', text:'Scott Allen'}
      ];

      expect(authorsFormatedForDropdown(authors)).toEqual(expected);
    });
  });
});
