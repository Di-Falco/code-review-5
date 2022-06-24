import { SolarAge } from '../src/solar-age.js';

describe ('Solar Age', () => {

  let anthony; 

  beforeEach(() => {
    anthony = new SolarAge(23);
  });

  test('should correctly store and return the user\'s age in earth years', () => {
    expect(anthony.EarthAge).toEqual(23);
  });

  test('should correctly store and return the user\'s age in mercurial years, rounded down', () => {
    anthony.mercuryYears();
    expect(anthony.MercuryAge).toEqual(95);
  });

  test('should correctly store and return the user\'s age in venusian years, rounded down', () => {
    anthony.venusYears();
    expect(anthony.VenusAge).toEqual(37);
  });

  test('should correctly store and return the user\'s age in martian years, rounded down', () => {
    anthony.marsYears();
    expect(anthony.MarsAge).toEqual(12);
  });

});