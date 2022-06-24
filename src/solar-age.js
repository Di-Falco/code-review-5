export class SolarAge{
  constructor(age, birthday){
    this.Birthday = new Date(birthday);
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
    let planetDays = [this.EarthAge, this.EarthAge, this.EarthAge, this.EarthAge];
    const planets = ["Mercury", "Venus", "Mars", "Jupiter"];
    const yearConversion = [0.24, 0.62, 1.88, 11.68];

    for (let i = 0; i < planetDays.length; i++) {
      planetDays[i] = Math.floor(((planetDays[i] * 365 * yearConversion[i]) % 365));
    }
    
    let birthday = Math.floor(this.Birthday.getTime() / (86400000) % 365.24);
    console.log("BIRTHDAY: ", birthday);
    console.log("THIS.BIRTHDAY: ", Math.floor(this.Birthday.getTime() / (86400000) % 365.24));
    console.log("PLANET DAYS: ", planetDays);
    let nextBirthday = `Your next birthday is in ${planetDays[0]-birthday} Earth days on ${planets[0]}!`;
    for (let i = 1; i < planetDays.length; i++) {
      if(planetDays[i]-birthday > 0 && planetDays[i]-birthday < planetDays[i-1]) {
        nextBirthday = `Your next birthday is in ${planetDays[i]-birthday} Earth days on ${planets[i]}!`;
      }
    }
    return nextBirthday;
  }

}