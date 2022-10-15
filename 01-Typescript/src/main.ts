import { charmander } from './bases/decorators2';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello ${charmander.name}!!!</h1>
  <a href="http://vitejs.dev/guide/features.html target="_blank"></a>
`

