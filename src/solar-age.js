export class SolarAge{
  constructor(age){
    this.EarthAge = age;
    this.MercuryAge = 0;
  }

  earthYears() {
    return this.EarthAge;
  }

  mercuryYears() {
    return this.MercuryAge;
  }

}