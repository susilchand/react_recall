import useCounterStore from "./store/counterStore";

function Counter() {
  const increment = useCounterStore((state) => state.increament);
  const decrement = useCounterStore((state) => state.decreament);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <button onClick={decrement}>-</button>

      <button onClick={increment}>+</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
