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
    let timeleft = [1, 0.24, 0.62, 1.88, 11.68];
    if (this.EarthAge < lifespan) {
      for (let i = 0; i < timeleft.length; i++){
      timeleft[i] = ((lifespan-this.EarthAge) / timeleft[i]).toFixed(2); 
      }
    } else {
      for (let i = 0; i < timeleft.length; i++){
        timeleft[i] = ((this.EarthAge-lifespan) / timeleft[i]).toFixed(2); 
      }
    }
    return timeleft;
  }

  nextBirthday() {
    
  }

}