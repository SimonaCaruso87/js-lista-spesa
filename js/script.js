/* CONSEGNA

Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

1)creare un array con una lista della spesa*/

const list = [
    'avocado',
    'uova',
    'tonno',
    'pancarrè',
    'latte',
    'basilico',
    'pinoli',
    'olio',
    'parmigiano reggiano',
];

console.log(list , 'list' , typeof list);

let listaContainer = document.querySelector('.lista-della-spesa');

let i = 0;

while (i < list.length) {

    let li = document.createElement('li');
    let item_list = list[i];
    li.innerText = item_list;
    listaContainer.appendChild(li);

    i++;
};