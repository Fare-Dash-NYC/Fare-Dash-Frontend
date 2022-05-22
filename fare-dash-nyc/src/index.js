import App from './App';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
 </BrowserRouter>
);

