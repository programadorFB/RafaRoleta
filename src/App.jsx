import React from 'react';
import './App.css';

function App() {
  const currencySymbols = ['$','$','$','$','$','$','$','$','$','$','$','$','$','$','$','$','$','$','$','$'];
  
  return (
    <div className="container">
      {/* Cifras flutuantes em primeiro plano */}
      <div className="floating-currencies">
        {currencySymbols.map((symbol, index) => (
          <div key={index} className="currency-symbol">
            {symbol}
          </div>
        ))}
      </div>
      
      <header className="hero-section" role="banner">
        {/* Banner hero modernizado com efeitos visuais */}
      </header>
      
      <main className="buttons-section">
        <a 
          href="https://betou.bet.br/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="main-button"
          aria-label="Acessar plataforma Betou agora - Abre em nova aba"
        > 
          <div className="button-text">
            <span className="button-title">PLATAFORMA QUE OPERO</span>
            <span className="button-subtitle">CLIQUE PARA ENTRAR</span>
          </div>
          <img 
            src="/betou.png" 
            alt="Betou" 
            className="button-logo"
          />
        </a>

        <a 
          href="https://mais.red/run/comunidademagnata" 
          className="banner-image image-bg-button"
          aria-label="Banner promocional - Primeira oferta"
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.open(e.currentTarget.href, '_blank');
            }
          }}
        >
        </a>
        
        <a 
          href="https://www.youtube.com/@RafaMagnata" 
          className="banner-image info-banner"
          aria-label="Banner promocional - Segunda oferta"
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.open(e.currentTarget.href, '_blank');
            }
          }}
        >
        </a>
      </main>
    </div>
  );
}

export default App;