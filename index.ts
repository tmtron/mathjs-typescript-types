// Import stylesheets
import { all, create, MathJsStatic } from 'mathjs';
import './style.css';

const mathJsInstance: MathJsStatic = create(all);
const compiled = mathJsInstance.compile(`2*a`);
const result = compiled.evaluate({
  a: 4,
});

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>result = ${result}</h1>`;
