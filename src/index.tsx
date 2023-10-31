import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PackageProvider} from './Contexts/PackageContext';
import {ThemeProvider,createTheme} from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme({
    typography: {
        fontFamily: 'Raleway',
    },
    palette: {
        primary: {
            main: '#060606',

        },
        secondary: {
            main: '#000000',
        },
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
    },
})
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <PackageProvider>
              <App />
          </PackageProvider>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
