import { Counter } from "./Counter.js";

const c1: Counter = Counter.createInstance();
const c2: Counter = Counter.createInstance();

c1.increment();
c1.increment();
c2.increment();

console.log("Counter 1:", c1.getCount());
console.log("Counter 2:", c2.getCount());