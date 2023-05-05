import "./style.css";
import { setupCounter, setupTripleCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    
    <h1>Commitiquette</h1>
    <h2>Counter</h2>
    <div class="card">
    <button id="counter" type="button"></button>
    </div>
    <h2>Triple counter</h2>
    <div class="card">
    <button id="triple-counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      A nonsensical counter project to test Commitizen, automatic release notes and Github Wiki.
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setupTripleCounter(
  document.querySelector<HTMLButtonElement>("#triple-counter")!
);
