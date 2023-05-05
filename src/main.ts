import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter, setupDoubleCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    
    <h1>Commitiquette</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <button id="double-counter" type="button"></button>
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
