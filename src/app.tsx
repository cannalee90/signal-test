import './app.css'
import { h, Fragment } from 'preact'
import { signal, computed } from "@preact/signals";

export function App() {
  const count = signal(0);
  function handleUpdate() {
    count.value = count.value + 1;
  }

  return (
    <>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={handleUpdate}>
          count is {count}
        </button>
        <p/>
		<button onClick={handleUpdate}>
          count is {count}
        </button>
		<button onClick={handleUpdate}>
          count is {count}
        </button>
        {/* <button>
          count is {multiplier2}
        </button> */}
        {/* <button>
          count is {multiplier3}
        </button>
        <button>
          count is {multiplier4}
        </button> */}
      </div>
    </>
  )
}
