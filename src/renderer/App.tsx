import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Button, Typography, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import icon from '../../assets/icon.svg';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Hello() {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <img width="200" alt="icon" src={icon} />
        <Typography variant="h4" component="h1" gutterBottom>
          electron-react-boilerplate
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <Button
            variant="contained"
            startIcon={<MenuBookIcon />}
            href="https://electron-react-boilerplate.js.org/"
            target="_blank"
          >
            Read our docs
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FavoriteIcon />}
            href="https://github.com/sponsors/electron-react-boilerplate"
            target="_blank"
          >
            Donate
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            Increment
          </Button>
          <Typography variant="h6" component="p">
            Count: {count}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
