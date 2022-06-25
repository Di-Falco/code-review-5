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
    const jupiterYear = 11.86;
    this.JupiterAge = Math.floor(this.EarthAge / jupiterYear);
  }

  timeLeft(lifespan) {
    let timeleft = [1, 0.24, 0.62, 1.88, 11.86];
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
    let planetDays = [0, 0, 0, 0];
    const planets = ["Mercury", "Venus", "Mars", "Jupiter"];
    const yearConversion = [0.241, 0.62, 1.88, 11.86];
    let today = new Date();
    let birthday = (today.getTime() - this.Birthday.getTime() - 25200000) / (86400000) / 365;
    
    for (let i = 0; i < planetDays.length; i++) {
      while (planetDays[i] < birthday*365){
        planetDays[i] += Math.round(yearConversion[i]*365);
      }
      planetDays[i] -= (birthday * 365);
    }

    let nextBirthday = ``;
    planetDays.sort(function(a, b){return a-b});

      nextBirthday = `Your next birthday is in ${Math.floor(planetDays[0])} Earth days on ${planets[0]}!`;
    
    return nextBirthday;
  }
}