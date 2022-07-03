import { ThemeProvider } from '@mui/material';
import React from 'react';

import { theme } from '@/styles/theme';

function Wrappers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Wrappers;
