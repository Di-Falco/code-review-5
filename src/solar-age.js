export class SolarAge{
  constructor(age){
    this.EarthAge = age;
    this.MercuryAge = 0;
    this.VenusAge = 0;
    this.MarsAge = 0;
    this.JupiterAge = 0;
  }

  mercuryYears() {
    const mercuryYear = 0.24;
    this.MercuryAge = Math.floor(this.EarthAge / mercuryYear);
  }

  venusYears() {
    const venusYear = 0.62;
    this.VenusAge = Math.floor(this.EarthAge / venusYear);
  }

  marsYears() {
    const marsYear = 1.88;
    this.MarsAge = Math.floor(this.EarthAge / marsYear);
  }

  jupiterYears() {
    const jupiterYear = 11.68;
    this.JupiterAge = Math.floor(this.EarthAge / jupiterYear);
  }

  timeLeft(lifespan) {
    let timeleft = [];

    return timeleft;
  }

}