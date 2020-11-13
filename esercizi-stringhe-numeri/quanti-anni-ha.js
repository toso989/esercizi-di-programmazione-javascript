/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var oggi = 2020;
var natoIl = 1989;
const cento = 100;
var eta = oggi-natoIl;
var aniiMancanti = cento-eta;

console.log('eta: ',eta);
console.log('anni mancanti: ',anniMancanti);
