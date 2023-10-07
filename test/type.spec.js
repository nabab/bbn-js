const {expect} = require('chai');
require('jsdom-global')();
const bbn = require('../dist/bundle.js');

describe(`Type Functions`, () => {
  describe(`isEmail`, () => {
    it('should determine if text is an email', () => {
      expect(bbn.fn.isEmail('test@test.org')).to.be.true;
      expect(bbn.fn.isEmail('something+else@example.com')).to.be.true;

      expect(bbn.fn.isEmail('hello@a')).to.be.false;
      expect(bbn.fn.isEmail('hello@a.b')).to.be.false;
      expect(bbn.fn.isEmail('example.com')).to.be.false;
      expect(bbn.fn.isEmail('test@testorg')).to.be.false;
      expect(bbn.fn.isEmail('@example.com')).to.be.false;
      expect(bbn.fn.isEmail('something@example')).to.be.false;
    });

    it('should check for types other than string', () => {
      expect(bbn.fn.isEmail({})).to.be.false;
      expect(bbn.fn.isEmail([])).to.be.false;
      expect(bbn.fn.isEmail([{}])).to.be.false;
      expect(bbn.fn.isEmail(() => {})).to.be.false;
    });
  });

  describe(`isColor`, () => {
    it('should determine if text is a color', () => {
      expect(bbn.fn.isColor("red")).to.be.true;
      expect(bbn.fn.isColor("#FF0000")).to.be.true;
      expect(bbn.fn.isColor("rgb 255, 0, 0")).to.be.true;

      expect(bbn.fn.isColor("#FF00")).to.be.false;
      expect(bbn.fn.isColor("#FF00FF00")).to.be.false;
    });

    it('should check for types other than string', () => {
      expect(bbn.fn.isColor({})).to.be.false;
      expect(bbn.fn.isColor([])).to.be.false;
      expect(bbn.fn.isColor([{}])).to.be.false;
      expect(bbn.fn.isColor(() => {})).to.be.false;
    });
  });

  describe(`isDom`, () => {
    it('should determine if element is a DOM element', () => {
      expect(bbn.fn.isDom(document.createElement("div"))).to.be.true;
      expect(bbn.fn.isDom(document.createElement("p"))).to.be.true;
      expect(bbn.fn.isDom(window)).to.be.false;

      expect(bbn.fn.isDom({})).to.be.false;
      expect(bbn.fn.isDom([])).to.be.false;
      expect(bbn.fn.isDom([{}])).to.be.false;
      expect(bbn.fn.isDom(() => {})).to.be.false;
    });
  });
});