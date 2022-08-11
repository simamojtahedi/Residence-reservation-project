import { wrapper } from "../redux/store";
import { useStore } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { loadUser } from "../redux/user/userActions";

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
  const store = useStore()

  useEffect(() => {
    loadUser(store)
  }, [])

  return <ThemeProvider theme={theme}><Component {...pageProps} /><Toaster /></ThemeProvider>
}

export default wrapper.withRedux(MyApp);

