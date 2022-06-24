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

  test('should correctly store and return the user\'s age in jovian years, rounded down', () => {
    anthony.jupiterYears();
    expect(anthony.JupiterAge).toEqual(1);
  });

  test('should calculate the remaining lifespan on each planet in the corresponding year value', () => {
    const lifespan = 79;
    expect(anthony.timeLeft(lifespan)).toEqual(['56.00', '233.33', '90.32', '29.79', '4.79']);
  });

});