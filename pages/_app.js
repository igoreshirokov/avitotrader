import "tailwindcss/tailwind.css";
import { CatalogContextProvider } from "../context/CatalogContext";


function MyApp({ Component, pageProps }) {
  return <CatalogContextProvider><Component {...pageProps} /></CatalogContextProvider>
}

export default MyApp
