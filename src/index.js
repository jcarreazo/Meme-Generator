import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function GenerateImage() {
  fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((response) => {
      const { memes } = response.data;
      this.setState({ allMeme: memes });
    });
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
