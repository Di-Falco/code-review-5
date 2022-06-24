import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { SolarAge } from './solar-age';

$(document).ready(function(){

  $("form#age").submit(function(event){
    event.preventDefault();

    const today = new Date;
    const birthday = new Date($("#birthday").val());
    const age = Math.floor((today.getTime() - birthday.getTime())/(365*24*60*60*1000));
    const user = new SolarAge(age, birthday);

    user.mercuryYears();
    user.venusYears();
    user.marsYears();
    user.jupiterYears();

    $("#mercury-age").html(`Mercury: ${user.MercuryAge} mercurial years`);
    $("#venus-age").html(`Venus: ${user.VenusAge} venusian years`);
    $("#earth-age").html(`Earth: ${user.EarthAge} earth years`);
    $("#mars-age").html(`Mars: ${user.MarsAge} martian years`);
    $("#jupiter-age").html(`Jupiter: ${user.JupiterAge} jovian years`);

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