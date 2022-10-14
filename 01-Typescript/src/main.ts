import { bulbasaur, pokemons } from "./bases/objects";

import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello ${bulbasaur.name}!!!</h1>
  <h1>${pokemons.join('')}</h1>
  <a href="http://vitejs.dev/guide/features.html target="_blank"></a>
`

