import { ThemeProvider, createTheme } from '@mui/material/styles';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'

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
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
