const {expect} = require('chai');
require('jsdom-global')();

describe(`Type Functions`, () => {
  const functions = require('../../nodejs/fn/type');

  describe(`isEmail`, () => {
    it('should determine if text is an email', () => {
      expect(functions.isEmail('test@test.org')).to.be.true;
      expect(functions.isEmail('something+else@example.com')).to.be.true;

      expect(functions.isEmail('hello@a')).to.be.false;
      expect(functions.isEmail('hello@a.b')).to.be.false;
      expect(functions.isEmail('example.com')).to.be.false;
      expect(functions.isEmail('test@testorg')).to.be.false;
      expect(functions.isEmail('@example.com')).to.be.false;
      expect(functions.isEmail('something@example')).to.be.false;
    });

    it('should check for types other than string', () => {
      expect(functions.isEmail({})).to.be.false;
      expect(functions.isEmail([])).to.be.false;
      expect(functions.isEmail([{}])).to.be.false;
      expect(functions.isEmail(() => {})).to.be.false;
    });
  });

  describe(`isColor`, () => {
    it('should determine if text is a color', () => {
      expect(functions.isColor("red")).to.be.true;
      expect(functions.isColor("#FF0000")).to.be.true;
      expect(functions.isColor("rgb 255, 0, 0")).to.be.true;

      expect(functions.isColor("#FF00")).to.be.false;
      expect(functions.isColor("#FF00FF00")).to.be.false;
    });

    it('should check for types other than string', () => {
      expect(functions.isColor({})).to.be.false;
      expect(functions.isColor([])).to.be.false;
      expect(functions.isColor([{}])).to.be.false;
      expect(functions.isColor(() => {})).to.be.false;
    });
  });

  describe(`isDom`, () => {
    it('should determine if element is a DOM element', () => {
      expect(functions.isDom(document.createElement("div"))).to.be.true;
      expect(functions.isDom(document.createElement("p"))).to.be.true;

      expect(functions.isDom({})).to.be.false;
      expect(functions.isDom([])).to.be.false;
      expect(functions.isDom([{}])).to.be.false;
      expect(functions.isDom(() => {})).to.be.false;
    });
  });
});