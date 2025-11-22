const person = [
    { nome: 'Mario', cognome: 'Rossi', eta: 35, },
    { nome: 'Sara', cognome: 'Conti', eta: 16, },
    { nome: 'Michele', cognome: 'DeLuca', eta: 25, },
]

const newArray = person.map((element) => {
    if (element.eta > 18) {
        return `${element.nome} ${element.cognome} può guidare perchè ha ${element.eta}`;
    }
    else {
    return `${element.nome} ${element.cognome} non può guidare perchè ha ${element.eta}`;}
});
console.log(newArray)