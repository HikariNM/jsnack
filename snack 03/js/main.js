const animals = [
    {nome: 'Leone', famiglia: 'Felidi', classe: 'Mammiferi',},
    {nome: 'Squalo', famiglia: 'Lamnidi', classe: 'Pesci',},
    {nome: 'Aquila', famiglia: 'Accipitridi' , classe: 'Uccelli',},
    {nome: 'Cane', famiglia: 'Canidi', classe: 'Mammiferi',},
    {nome: 'Rana', famiglia: 'Ranidi', classe: 'Anfibi' },
    {nome: 'Elefante', famiglia: 'Elefantidi', classe: 'Mammiferi' },
    {nome: 'Pinguino', famiglia: 'Sfeniscidi', classe: 'Uccelli' },
]

// const mammals = animals.filter(animal => animal.classe === 'Mammiferi');
const mammals = animals.filter(animal => animal.classe.toLowerCase() === 'Mammiferi'.toLowerCase());
console.log(mammals)