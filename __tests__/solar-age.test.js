import { SolarAge } from '../src/solar-age.js';

describe ('Solar Age', () => {

  let anthony; 

  beforeEach(() => {
    anthony = new SolarAge();
  });

  test('should correctly store and return the user\'s age in earth years', () => {
    anthony.earthYears();
    expect(anthony.EarthYears).toEqual(23);
  });

});