import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className='h-screen w-screen bg-gray-300 p-6 overflow-auto'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
