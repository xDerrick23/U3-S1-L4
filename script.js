var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getSaldoCapo = function () {
        return (this.prezzoivainclusa - this.saldo) / 100;
    };
    Abbigliamento.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo();
    };
    return Abbigliamento;
}());
fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
    .then(function (response) { return response.json(); }) // Semplificato per leggibilità
    .then(function (capoArray) {
    capoArray.forEach(function (element) {
        var capoAbbigliamento = new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        console.log("Capo ".concat(element.id, ": ") + JSON.stringify(capoAbbigliamento));
        console.log("Totale capo: " + capoAbbigliamento.getAcquistoCapo());
    });
})
    .catch(function (error) { return console.log("Si è verificato un errore: " + error); });
