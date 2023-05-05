import "./style.css";
import {
  setupCounter,
  setupDoubleCounter,
  setupTripleCounter,
} from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    
    <h1>Commitiquette</h1>
    <h2>Counter</h2>
    <div class="card">
    <button id="counter" type="button"></button>
    </div>
    <h2>Double counter</h2>
    <div class="card">
    <button id="double-counter" type="button"></button>
    </div>
    <h2>Triple counter</h2>
    <div class="card">
    <button id="triple-counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      A nonsensical counter project to test Commitizen and Github Wiki.
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setupDoubleCounter(
  document.querySelector<HTMLButtonElement>("#double-counter")!
);
setupTripleCounter(
  document.querySelector<HTMLButtonElement>("#triple-counter")!
);
