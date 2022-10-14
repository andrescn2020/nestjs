export const pokemonsIds = [1,20,30,40,66];

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: "Bulbasaur",
    age: 23
}

export const charmander: Pokemon = {
    id: 4,
    name: "Charmander",
    age: 1
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasaur);