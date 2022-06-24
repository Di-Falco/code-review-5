export class SolarAge{
  constructor(age){
    this.EarthAge = age;
    this.MercuryAge = 0;
  }

  mercuryYears() {
    const mercuryYear = 0.24;
    this.MercuryAge = Math.floor(this.EarthAge / mercuryYear);
  }

}