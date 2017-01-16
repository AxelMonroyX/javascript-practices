import {
  expect as expect
} from 'chai';
import this_practice from '../src/this_practice.js';
import prototypal_inheritance from '../src/prototypal_inheritance.js';


describe('javascriptPractices', () => {
  describe('this', () => {
    it('should be return name with This and whithout This', () => {
      expect(this_practice.withoutThis).equals("Axel");
      expect(this_practice.withThis).equals("Alfredo");
    });
  });
  describe('prototypalInheritance', () => {
    it('should be return name with This and whithout This', () => {
      expect(prototypal_inheritance.myStudent.firstname).equals("Axel");
      expect(prototypal_inheritance.myStudent.lastname).equals("Monroy");
      expect(prototypal_inheritance.myStudent.card).equals(123);
      expect(prototypal_inheritance.myStudent instanceof prototypal_inheritance.Student).true;
      expect(prototypal_inheritance.myStudent instanceof prototypal_inheritance.Person).true;


    });
  });

});
