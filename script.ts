class Abbigliamento {
  private id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: number;
  saldo: number;

  constructor(
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: number,
    saldo: number
  ) {
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

  getSaldoCapo() {
    return (this.prezzoivainclusa - this.saldo) / 100;
  }

  getAcquistoCapo() {
    return this.prezzoivainclusa - this.getSaldoCapo();
  }
}

fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
  .then((response) => response.json()) 
  .then((capoArray) => {
    capoArray.forEach((element) => {
      let capoAbbigliamento = new Abbigliamento(
        element.id,
        element.codprod,
        element.collezione,
        element.capo,
        element.modello,
        element.quantita,
        element.colore,
        element.prezzoivaesclusa,
        element.prezzoivainclusa,
        element.disponibile,
        element.saldo
      );

      console.log(`Capo ${element.id}: ` + JSON.stringify(capoAbbigliamento));
      console.log("Totale capo: " + capoAbbigliamento.getAcquistoCapo());
    });
  })
  .catch((error) => console.log("Si è verificato un errore: " + error));
