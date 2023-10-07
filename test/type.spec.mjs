import {expect} from 'chai';
import {} from 'jsdom-global';
import {isEmail} from '../dist/fn/type/isEmail.js';
import {isColor} from '../dist/fn/type/isColor.js';
import {isDom} from '../dist/fn/type/isDom.js';

describe(`Type Functions`, () => {

  describe(`isEmail`, () => {
    it('should determine if text is an email', () => {
      expect(isEmail('test@test.org')).to.be.true;
      expect(isEmail('something+else@example.com')).to.be.true;

      expect(isEmail('hello@a')).to.be.false;
      expect(isEmail('hello@a.b')).to.be.false;
      expect(isEmail('example.com')).to.be.false;
      expect(isEmail('test@testorg')).to.be.false;
      expect(isEmail('@example.com')).to.be.false;
      expect(isEmail('something@example')).to.be.false;
    });

    it('should check for types other than string', () => {
      expect(isEmail({})).to.be.false;
      expect(isEmail([])).to.be.false;
      expect(isEmail([{}])).to.be.false;
      expect(isEmail(() => {})).to.be.false;
    });
  });

  describe(`isColor`, () => {
    it('should determine if text is a color', () => {
      expect(isColor("red")).to.be.true;
      expect(isColor("#FF0000")).to.be.true;
      expect(isColor("rgb 255, 0, 0")).to.be.true;

      expect(isColor("#FF00")).to.be.false;
      expect(isColor("#FF00FF00")).to.be.false;
    });

    it('should check for types other than string', () => {
      expect(isColor({})).to.be.false;
      expect(isColor([])).to.be.false;
      expect(isColor([{}])).to.be.false;
      expect(isColor(() => {})).to.be.false;
    });
  });

  describe(`isDom`, () => {
    it('should determine if element is a DOM element', () => {
      expect(isDom(document.createElement("div"))).to.be.true;
      expect(isDom(document.createElement("p"))).to.be.true;
      expect(isDom(window)).to.be.false;

      expect(isDom({})).to.be.false;
      expect(isDom([])).to.be.false;
      expect(isDom([{}])).to.be.false;
      expect(isDom(() => {})).to.be.false;
    });
  });
});