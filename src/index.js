import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { SolarAge } from './solar-age';

$(document).ready(function(){

  $("form#age").submit(function(event){
    event.preventDefault();

    const today = new Date;
    //const today = todayDate.getFullYear()+'-'+todayDate.getMonth()+'-'+todayDate.getDay();
    console.log(today);
    let birthday = new Date;
    birthday = Date.parse($("#birthday").val());
    console.log(birthday);
    const age = Math.floor((today.getTime() - birthday.getTime())/365);
    console.log(age);
    const user = new SolarAge(age);

    user.mercuryYears();
    user.venusYears();
    user.marsYears();
    user.jupiterYears();

    $("#mercury-age").text(`Mercury: ${user.MercuryAge}`);
    $("#venus-age").text(`Venus: ${user.VenusAge}`);
    $("#earth-age").text(`Earth: ${user.EarthAge}`);
    $("#mars-age").text(`Mars: ${user.MarsAge}`);
    $("#jupiter-age").text(`Jupiter: ${user.JupiterAge}`);

    const lifespan = 79;
    let timeleft = user.timeLeft(lifespan);

    if (user.EarthAge > lifespan) {
      $("#remaining-lifespan").text("You've outlived the average person by:");
    } else {
      $("#remaining-lifespan").text("Remaining lifespan on:");
    }

    $("#mercury-lifespan").text(`Mercury: ${timeleft[1]} mercurial years`);
    $("#venus-lifespan").text(`Venus: ${timeleft[2]} venusian years`);
    $("#earth-lifespan").text(`Earth: ${timeleft[0]} earth years`);
    $("#mars-lifespan").text(`Mars: ${timeleft[3]} martian years`);
    $("#jupiter-lifespan").text(`Jupiter: ${timeleft[4]} jovian years`);

    $("#next-birthday").text(user.nextBirthday());
  });

});