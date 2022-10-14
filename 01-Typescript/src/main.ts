import { name, age } from "./bases/types"

import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello ${name} ${age}!!!</h1>
  <a href="http://vitejs.dev/guide/features.html target="_blank"></a>
`

