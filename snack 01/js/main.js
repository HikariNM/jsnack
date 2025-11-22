const veicle = [
    {marca: 'Fiat', modello: 'Panda', alimentazione: 'GPL',},
    {marca: 'Audi', modello: 'A3', alimentazione: 'Benzina',},
    {marca: 'Renault', modello: 'Clio', alimentazione: 'Diesel',},
    {marca: 'Dacia', modello: 'Duster', alimentazione: 'Elettrico',},
    {marca: 'Volkswagen', modello: 'Polo', alimentazione: 'Diesel',},
    {marca: 'Toyota', modello: 'Corolla', alimentazione: 'GPL',},
    {marca: 'Ford', modello: 'Focus', alimentazione: 'Metano',},
    {marca: 'BMW', modello: 'X6', alimentazione: 'Benzina',},
    {marca: 'Mercedes', modello: 'EQA', alimentazione: 'Elettrico',},
    {marca: 'Seat', modello: 'Ibiza', alimentazione: 'Diesel',},
]
console.log(veicle)

const benzina = veicle.filter(type => type.alimentazione === 'Benzina')
console.log('Veicoli a Benzina', benzina)

const diesel = veicle.filter(type => type.alimentazione === 'Diesel')
console.log('Veicoli a Diesel', diesel)

const other = veicle.filter(type => type.alimentazione !== 'Diesel' && type.alimentazione !== 'Benzina')
console.log('Veicoli ad altri tipi di alimentazione', other)