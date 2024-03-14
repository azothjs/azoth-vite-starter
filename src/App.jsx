import { subject } from 'azoth/channels';
import Emojis from './Emojis.jsx';
import viteLogo from '/vite.svg';
import azothLogo from '/azoth.svg';
import './App.css';

export default function App() {
  let count = 0;
  const [Counter, setCount] = subject(() => ++count, { startWith: count });

  return (
    <div class="app">
      <header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/azothjs/azoth" target="_blank">
          <img src={azothLogo} class="logo azoth" alt="Azoth logo" />
        </a>
        <h1>Vite + Azoth</h1>
      </header>

      <div class="card">
        <button onclick={setCount}>count is {Counter}</button>
      </div>

      <section class="emoji-section">
        <Emojis />
      </section>
    </div>
  );
}
