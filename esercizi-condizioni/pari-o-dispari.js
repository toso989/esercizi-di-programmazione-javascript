/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.

  Esempi:
    Input: numero = 63
    Output: 1

    Input: numero = 24
    Output: 0

  Consigli:
  Per capire se un numero è pari o dispari puoi usare un operatore, ma quale? :) 
  (Se non ti ricordi riguarda la lezione "Come dichiarare e definire le variabili e i tipi di dato" oppure "Il tipo Numero e gli operatori aritmetici")

  http://www.imparareaprogrammare.it
*/

*/

let num= 11;
let a = num%2;
let b = Boolean(a == 0);
let c = b ? 'pari' : 'dispari';
let d = Boolean(c=='pari')
let e = d ? '0' : '1';

console.log(e);
