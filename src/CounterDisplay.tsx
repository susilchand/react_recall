import useCounterStore from "./store/counterStore";

function CounterDisplay() {
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
}

export default CounterDisplay;
