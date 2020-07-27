const {expect} = require('chai');

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
});