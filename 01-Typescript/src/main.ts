import { charmander } from './bases/inyection';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello ${charmander.imageUrl}!!!</h1>
  <a href="http://vitejs.dev/guide/features.html target="_blank"></a>
`

