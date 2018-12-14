import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './assets/index.css';

const app = <App title="Taller Web React JS" />;
const nodoContenedor = document.getElementById('divTallerReact1');

const renderizacion = () => {
    ReactDOM.render(app, nodoContenedor);
}

renderizacion();
