import { SolarAge } from '../src/solar-age.js';

describe ('Solar Age', () => {

  let anthony; 

  beforeEach(() => {
    anthony = new SolarAge(23);
  });

  test('should correctly store and return the user\'s age in earth years', () => {
    anthony.earthYears();
    expect(anthony.EarthAge).toEqual(23);
  });

});