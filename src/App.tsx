import { useState } from 'react';
import { CryptoCheckoutModal } from './components/CryptoCheckoutModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="app">
      <div className="app-container">
        <h1>Crypto Checkout Demo</h1>
        <p className="app-description">
          A simple crypto checkout experience that can be embedded on any website.
        </p>

        <button
          className="app-button"
          onClick={() => setIsModalOpen(true)}
        >
          Open Crypto Checkout
        </button>

        <CryptoCheckoutModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;