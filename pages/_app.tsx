import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'

type Todo = {
  value: string;
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
