import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PackageProvider} from './Contexts/PackageContext';
import {ThemeProvider,createTheme} from '@mui/material';

const primary = {
    main: '#607D8B',
    light: '#CFD8DC',
    dark: '#455A64',
    contrastText: '#FFFFFF',
}

const text = {
    primary: '#212121',
    secondary: '#757575',
}

const secondary = {
    main: '#9E9D24',
    light: '#cecdbd',
    dark: '#707014',
    contrastText: '#FAFAFA',
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme({
    typography: {
        fontFamily: 'Questrial',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: '2.75rem',
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
    },
    palette: {
        primary: primary,
        secondary: secondary,
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
        background: {
            default: '#EEEEEE',
            paper: '#FFFFFF',
        }
    },

    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: primary.main,
                    color: primary.contrastText,
                    borderRadius: '1rem',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {

                },
                text: {
                    color: primary.contrastText,
                    '&:hover': {
                        backgroundColor: primary.main,
                        color: primary.contrastText,
                    },
                },
                contained: {
                    backgroundColor: primary.main,
                    color: primary.contrastText,
                    '&:hover': {
                        backgroundColor: primary.dark,
                        color: primary.contrastText,
                    },
                },
                outlined: {

                }
            }
        },
        MuiTextField: {

            variants: [
                {
                    props: {type: 'number'},
                    style: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: primary.main,
                            },
                            '&:hover fieldset': {
                                borderColor: primary.dark,
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: primary.dark,
                            },
                        },
                    },
                },
                ]


        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: primary.contrastText,
                },
            }
        },
        }
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
