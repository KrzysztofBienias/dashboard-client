import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '@/scenes/navbar';
import Dashboard from '@/scenes/dashboard';

const App = () => {
    const theme = useMemo(() => createTheme(themeSettings), []);

    return (
        <div>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box width="100%" height="100%" padding="1rem 2rem 4rem">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/predictions" element={<div>predictions</div>} />
                        </Routes>
                    </Box>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
