import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
    const theme = useMemo(() => createTheme(themeSettings), []);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                app
            </ThemeProvider>
        </div>
    );
};

export default App;
