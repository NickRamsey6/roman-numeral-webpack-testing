import {convertRomans} from './../src/scripts.js';
describe ('convertRomans', function() {

  it('should test whether a number has been converted to a Roman Numeral', function() {
    expect(convertRomans(5)).toEqual('V');
  });

  it('should test whether or not it tries to evaluate a number greater than 3999', function() {
    expect(convertRomans(4000)).toEqual('not a valid number to be converted');
  })
});
