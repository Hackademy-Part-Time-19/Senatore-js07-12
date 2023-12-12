document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".cards");

    cards.forEach(function(card) {
      card.addEventListener("mouseover", function() {
        card.style.backgroundColor = "white";
        card.style.color = "black";
        const titoloCar = card.querySelector(".TitoloCar");
        const parCar = card.querySelectorAll(".caratteristiche");

        if (titoloCar) {
          titoloCar.style.color = "black";
        }

        if (parCar) {
          parCar.forEach(function(par) {
            par.style.color = "black";
          });
        }
      });

      card.addEventListener("mouseout", function() {
        card.style.backgroundColor = "";
        card.style.color = ""; 
        const titoloCar = card.querySelector(".TitoloCar");
        const parCar = card.querySelectorAll(".caratteristiche");

        if (titoloCar) {
          titoloCar.style.color = ""; 
        }

        if (parCar) {
          parCar.forEach(function(par) {
            par.style.color = ""; 
          });
        }
      });
    });
  });
