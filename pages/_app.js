import '../styles/globals.css';
import { useEffect } from 'react';
//UseEffect para fixar o erro do estilo nao pegar quando da reload na pagina

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });
  return <Component {...pageProps} />;
}

export default MyApp;
