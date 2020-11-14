/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
let totSecondi = 17200;

let min = totSecondi%3600;

let sec = min%60;
let ore = (totSecondi-min-sec)/3600;
min = (min-sec)/60;
console.log('ore: '+Math.round(ore));
console.log('minuti:  '+Math.round(min));
console.log('secondi: '+Math.round(sec));

