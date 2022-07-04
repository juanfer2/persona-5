import './App.css';

import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from '@/routes/AppRouter';
import { theme } from '@/styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="main">
          <AppRouter />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
