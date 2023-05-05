let counter = 0;
let doubleCounter = 0;
let tripleCounter = 0;

export function setupCounter(element: HTMLButtonElement) {
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export function setupDoubleCounter(element: HTMLButtonElement) {
  const setCounter = (count: number) => {
    doubleCounter = count;
    element.innerHTML = `count is ${doubleCounter}`;
  };
  element.addEventListener("click", () => setCounter(doubleCounter + 2));
  setCounter(0);
}

export function setupTripleCounter(element: HTMLButtonElement) {
  const setCounter = (count: number) => {
    tripleCounter = count;
    element.innerHTML = `count is ${tripleCounter}`;
  };
  element.addEventListener("click", () => setCounter(tripleCounter + 3));
  setCounter(0);
}
