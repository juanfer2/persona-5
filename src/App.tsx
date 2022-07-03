import './App.css';

import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from '@/routes/AppRouter';
import { theme } from '@/styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
