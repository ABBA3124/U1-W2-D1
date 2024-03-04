/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* booleani: possono essere true e false
   numeri: Sono come i numeri che usi per contare le cose o fare operazioni matematiche.
   stringhe: rappresentano il testo (lettere,frasi e parole)
   null: e come se in una scatola non c'è nulla 
   undefined: non ha un valore definito
*/ 




/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "davide"
console.log (myName)







/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 12
let number2 = 20
let result = number1 + number2
console.log("Il risultato dell'addizione di", number1, "e", number2, "è:", result)

// altro modo
let result2 = number1 + number2
console.log(result2)





/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12






/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
myName = "abbadessa"
console.log(myName)

const errore = 7
// errore = 10
console.log(errore)






/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number3 = 4
let subtraction = x - number3
console.log(subtraction)

// si può anche fare:
let subtraction2 = x - 4
console.log(subtraction2)






/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
let verify = name1 !== name2
console.log("sono diversi:","John", "e", "john","?", verify)

// EXTRA
console.log("Sono uguali se scritti in lowercase:", name1.toLowerCase(), "e", name2.toLowerCase(), "?", verify)


// EXTRA: ALTRO MODO PER FARLO 
let verify2 = name1.toLowerCase() === name2.toLowerCase()
console.log("Sono uguali se scritti in lowercase:", name1, "e", name2, "?", verify2)
