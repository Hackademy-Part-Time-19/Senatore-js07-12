let IndiceImmagini = 2;
setInterval(() => {
    if (IndiceImmagini == 1) {
        document.getElementById("immagineCover").style.opacity = 0;
        document.getElementById("paragrafoCover").style.opacity = 0;
        document.getElementById("titoloCover").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("immagineCover").style.opacity = 1;
            document.getElementById("paragrafoCover").style.opacity = 1;
            document.getElementById("titoloCover").style.opacity = 1;
            document.getElementById("immagineCover").src = "https://www.italia.it/content/dam/tdh/it/interests/italia/i-6-posti-piu-belli-in-italia-da-non-perdere/media/1600X1000_6_posti_piu_belli_d_italia_da_non_perdere_hero.jpg"
            document.getElementById("titoloCover").innerText = "Fai un giro a Venezia"
            document.getElementById("paragrafoCover").innerText = "Un luogo magico e unico al mondo in grado di far innamorare chiunque la visiti. Il primo impatto con la laguna e le sue isole lascia a bocca aperta, ma è passeggiando per le vie del centro storico, tra i ponti e i canali di Venezia, che ci si rende conto di quanto sia speciale questa città."
        }, 500);



        IndiceImmagini++
    } else if (IndiceImmagini == 2) {
        document.getElementById("immagineCover").style.opacity = 0;
        document.getElementById("paragrafoCover").style.opacity = 0;
        document.getElementById("titoloCover").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("immagineCover").style.opacity = 1;
            document.getElementById("paragrafoCover").style.opacity = 1;
            document.getElementById("titoloCover").style.opacity = 1;
            document.getElementById("immagineCover").src = "https://travel.thewom.it/content/uploads/sites/4/2022/09/cinque-terre_7.png"
            document.getElementById("titoloCover").innerText = "Fai un giro a Cinque Terre"
            document.getElementById("paragrafoCover").innerText = "Spiagge e calette bellissime incastonate tra le rocce a picco sul mare, deliziosi borghi colorati arroccati sulle scogliere e macchia mediterranea da scoprire tra suggestivi sentieri. Ma quali sono le 5 Terre? Si intende i borghi di Monterosso, Vernazza, Corniglia, Manarola e Riomaggiore che si susseguono lungo la riviera Spezzina tra Punta Mesco e Punta di Montenero."
        }, 500);


        IndiceImmagini++
    } else if (IndiceImmagini == 3) {
        document.getElementById("immagineCover").style.opacity = 0;
        document.getElementById("paragrafoCover").style.opacity = 0;
        document.getElementById("titoloCover").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("immagineCover").style.opacity = 1;
            document.getElementById("immagineCover").src = "https://www.positanoscooter.com/wp-content/uploads/2022/08/positano-la-sera-cosa-fare.jpg"
            document.getElementById("paragrafoCover").style.opacity = 1;
            document.getElementById("titoloCover").style.opacity = 1;
            document.getElementById("titoloCover").innerText = "Fai un giro a Positano"
            document.getElementById("paragrafoCover").innerText = "Ricco di storia, cultura e ottimo cibo, non c’è da meravigliarsi che l’Italia sia una delle destinazioni turistiche più famose al mondo. Solo nel 2018, 14,5 milioni di turisti americani sono venuti a godere degli splendori di questo paradiso mediterraneo, e mentre molti concentrano i loro piani di viaggio su città come Venezia, Firenze e Roma, vale la pena considerare quanto altri posti in Italia hanno da offrire. La Costiera Amalfitana è una costa mozzafiato talmente impressionante che l’intero tratto rientra nel patrimonio mondiale dell’UNESCO. Ci sono molte piccole città che attirano i viaggiatori lungo la Costiera Amalfitana, tra cui Amalfi e Ravello."
            IndiceImmagini = 1;
        }, 500);


    }
}, 5000);
