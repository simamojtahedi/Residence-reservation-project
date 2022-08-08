import { ThemeProvider, createTheme } from '@mui/material/styles';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import AuthProvider from '../context/AuthContext';
import { Toaster } from 'react-hot-toast';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: [
      'primary-font',
      'sans-serif',
    ].join(','),
  },
});

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><AuthProvider><Component {...pageProps} /><Toaster /></AuthProvider></ThemeProvider>
}

export default MyApp
