const hashcode = require('../js/hashcode');
const constants = require('../js/constants');

describe('hashcode', () => {
  describe('loadInput', () => {
    it('shall load a file', () => {
      const results = hashcode.loadFile('tests/provided.hc');
      expect(results.parameters.X).toEqual(2);
      expect(results.parameters.S).toEqual(5);
      expect(results.parameters.U).toEqual(1);
      expect(results.parameters.P).toEqual(2);
      expect(results.parameters.M).toEqual(5);
    });
  });

  describe('XX', () => {
    it('shall ...', () => {
		});
  });
});
